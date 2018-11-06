/**
 * APIURL is an object containing the mapping api's address.
 * Maybe in the future it can be moved to a env file
 * */
const APIURL = 'https://jsonplaceholder.typicode.com';

/**
 * Build api  object with methods to fetch external resources.
 */
const api = {
  /**
   * @function author Fetch author profile
   * @param {number} id The id of author profile
   * @example author(1);
   * @return {Promise}
   */
  author: id => {
    return fetch(`${APIURL}/users/${id}`).then(res => res.json());
  },

  /**
   * @function commentsNew Add new comment on post
   * @param {number} postId The id of post
   * @param {Object} comment Object containing data of comment
   * @example
   * const comment = {title: 'New Post', body: 'Lorem ipsum dolor sit'};
   * commentsNew(1, comment);
   * @return {Promise}
   */
  commentsNew: (postId, comment) => {
    return fetch(`${APIURL}/posts/${postId}/comments`, {
      body: JSON.stringify(comment),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      method: 'POST'
    }).then(res => res.json());
  },

  /**
   * @function comments Fetch comments from post
   * @param {number} postId The id of post
   * @param {number} limit The number of comments limit in request. Default is 3
   * @example comments(1);
   * @return {Promise}
   */
  comments: (postId, limit = 3) => {
    return fetch(`${APIURL}/posts/${postId}/comments?_limit=${limit}`).then(
      res => res.json()
    );
  },

  /**
   * @function posts Fetch posts
   * @param {number} limit The number of posts limit in request. Default is 10
   * @example posts();
   * @return {Promise}
   */
  posts: (limit = 10) => {
    return fetch(`${APIURL}/posts?_limit=${limit}`).then(res => res.json());
  },

  /**
   * @function post Fetch single post
   * @param {number} id The id of post
   * @example post(1);
   * @return {Promise}
   */

  post: id => {
    return fetch(`${APIURL}/posts/${id}`).then(res => res.json());
  }
};

export default api;
