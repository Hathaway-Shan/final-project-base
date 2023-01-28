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
  if (!response.ok) {
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
  const data = await response.json();

  if (!response.ok) {
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
  // const data = await response.json(); //can't json twice dummy

  if (response.ok) {
    const user = await response.json();
    return user;
  } else {
    console.error(response.message);
  }
}

export async function signOutUser() {
  const response = await fetch(`${BASE_URL}/users/sessions`, {
    method: 'DELETE',
    credentials: 'include',
  });
}
