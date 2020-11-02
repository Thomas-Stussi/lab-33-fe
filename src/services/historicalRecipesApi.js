/* eslint-disable max-len */
export const recipeFetch = (method, body, id) => {
  // eslint-disable-next-line keyword-spacing
  if (method !== 'GET') {
    return fetch(`http://localhost:7890/api/v1/recipes/${id}`, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json());
  }
  return fetch(`http://localhost:7890/api/v1/recipes/${id !== null ? id : ''}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
}; 
