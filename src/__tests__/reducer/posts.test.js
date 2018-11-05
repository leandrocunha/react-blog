import posts from '../../reducers/posts';

describe('posts reducer', () => {
  it('should return the initial state', () => {
    expect(posts(undefined, {})).toEqual({});
  });

  it('should list posts', () => {
    expect(posts(undefined, { type: 'LIST', data: [{}, {}] })).toEqual({
      list: [{}, {}]
    });
  });

  it('should get post', () => {
    expect(posts(undefined, { type: 'POST', data: {} })).toEqual({
      post: {}
    });
  });

  it('should list comments', () => {
    expect(posts(undefined, { type: 'COMMENTS', data: [{}, {}] })).toEqual({
      comments: [{}, {}]
    });
  });
});
