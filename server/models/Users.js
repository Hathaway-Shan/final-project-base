import pool from '../database.js';

export default class Users {
  id;
  email;
  #passwordHash;

  constructor(row) {
    this.id = row.id;
    this.email = row.email;
    this.#passwordHash = row.password_hash;
  }

  static async insert({ email, passwordHash }) {
    const { rows } = await pool.query(
      `
      INSERT INTO users (email, password_hash)
      VALUES ($1, $2)
      RETURNING *
      `,
      [email, passwordHash]
    );
    return new Users(rows[0]);
  }

  static async getByEmail(email) {
    const { rows } = await pool.query(
      `
      SELECT * FROM users
      WHERE email = $1
      `,
      [email]
    );
    return new Users(rows[0]);
  }

  get passwordHash() {
    return this.#passwordHash;
  }
}
