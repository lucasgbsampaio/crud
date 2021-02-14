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

export function ALL_PRODUCTS() {
  return {
    url: API_URL + '/product',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
      cache: 'no-store',
    },
  };
}

export function NEW_PRODUCT(body) {
  return {
    url: API_URL + '/product',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function UPDATE_PRODUCT(body, id) {
  return {
    url: API_URL + '/product' + id,
    options: {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function DELETE_PRODUCT(id) {
  return {
    url: API_URL + '/product' + id,
    options: {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + window.localStorage.getItem('token'),
      },
    },
  };
}
