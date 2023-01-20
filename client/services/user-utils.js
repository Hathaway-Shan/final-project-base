const BASE_URL = 'http://localhost:7891/api/v1';

export async function signUpUser(userInfo) {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(userInfo),
  });
  const data = await response.json();
  if (response.ok) {
    location.replace('/');
  } else {
    console.error(data.message);
  }
}

export async function signInUser(userInfo) {
  const response = await fetch(`${BASE_URL}/users/sessions`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(userInfo),
  });
  const data = response.json();

  if (response.ok) {
    location.replace('/');
  } else {
    console.error(data.message);
  }
}

export async function getUser() {
  const response = await fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  const data = response.json();

  if (response.okay) {
    const user = await response.json();
    return user;
  } else {
    console.error(data.message);
  }
}

export async function signOutUser() {
  const response = await fetch(`${BASE_URL}/users/sessions`, {
    method: 'DELETE',
    credentials: 'include',
  });
}
