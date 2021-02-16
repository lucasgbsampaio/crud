export const API_URL = '/api';

export function USER_LOGIN(body) {
  return {
    url: API_URL + '/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export async function ALL_PRODUCTS() {
  const res = await fetch(API_URL + '/product', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    },
    cache: 'no-store',
  });
  const json = await res.json();

  return json;
}

export async function NEW_PRODUCT(body) {
  const res = await fetch(API_URL + '/product', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  return json;
}

export async function UPDATE_PRODUCT(body, id) {
  const res = await fetch(API_URL + '/product/' + id, {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  return json;
}

export async function DELETE_PRODUCT(id) {
  const res = await fetch(API_URL + '/product/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    },
  });
  const json = await res.json();

  return json;
}
