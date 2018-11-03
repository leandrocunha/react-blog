const APIURL = 'https://jsonplaceholder.typicode.com';

const api = {
  posts: (limit = 10) => {
    return fetch(`${APIURL}/posts?_limit=${limit}`).then(res => res.json());
  }
};

export default api;
