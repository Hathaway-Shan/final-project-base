import setupDb from '../setup-data.js';
import request from 'supertest';
import app from '../app';
import UserService from '../services/UserServices.js';

const mockUser = {
  email: 'test@example.com',
  password: '123456',
};

const existingUser = {
  email: 'existinguser@example.com',
  password: 'iexist123',
};

const registerAndLogin = async (userProps = {}) => {
  const password = userProps.password ?? mockUser.password;

  // Create an "agent" that gives us the ability
  // to store cookies between requests in a test
  const agent = request.agent(app);

  // Create a user to sign in with
  const user = await UserService.create({
    ...mockUser,
    ...userProps,
  });

  // ...then sign in
  const { email } = user;
  const res = await agent
    .post('/users/sessions')
    .send({ email, password });
  if (res.ok) {
    return [agent, user];
  } else {
    throw new Error(res.body);
  }
};

describe('users', () => {
  beforeEach(() => {
    return setupDb();
  });

  it('POST /users creates and logs in a new user', async () => {
    const res = await request(app).post('/users').send(mockUser);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: 'Successfully logged in with new account!',
    });
  });

  it('POST /users/sessions signs in an existing user', async () => {
    const res = await request(app)
      .post('/users/sessions')
      .send(existingUser);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: 'Successfully signed in!',
    });
  });

  it('GET /users/me returns the current user', async () => {
    const [agent, user] = await registerAndLogin();

    const me = await agent.get('/users/me');
    expect(me.body).toEqual({
      ...user,
      exp: expect.any(Number),
      iat: expect.any(Number),
    });
  });

  it('DELETE /users/sessions deletes the user session', async () => {
    const [agent] = await registerAndLogin();
    const me = await agent.get('/users/me');
    expect(me.status).toBe(200);
    const resp = await agent.delete('/users/sessions');
    expect(resp.status).toBe(204);
  });
});
