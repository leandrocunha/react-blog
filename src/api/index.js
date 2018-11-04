const APIURL = 'https://jsonplaceholder.typicode.com';

const api = {
  author: id => {
    return fetch(`${APIURL}/users/${id}`).then(res => res.json());
  },

  commentsNew: (postId, comment) => {
    return fetch(`${APIURL}/posts/${postId}/comments`, {
      body: JSON.stringify(comment),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      method: 'POST'
    }).then(res => res.json());
  },

  comments: (postId, limit = 3) => {
    return fetch(`${APIURL}/posts/${postId}/comments?_limit=${limit}`).then(
      res => res.json()
    );
  },

  posts: (limit = 10) => {
    return fetch(`${APIURL}/posts?_limit=${limit}`).then(res => res.json());
  },

  post: id => {
    return fetch(`${APIURL}/posts/${id}`).then(res => res.json());
  }
};

export default api;
