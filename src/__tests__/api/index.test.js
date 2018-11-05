import api from '../../api';

describe('test api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls author', () => {
    const response = { name: 'John Doe', email: 'foo@bar' };

    fetch.mockResponseOnce(JSON.stringify(response));
    api.author(1).then(res => {
      expect(res).toEqual(response);
    });
  });

  it('calls commentNew', () => {
    const postId = 1;
    const comment = { body: 'Lorem ipsum', name: 'John Doe', email: 'foo@bar' };
    const response = { ...comment, postId, id: 501 };

    fetch.mockResponseOnce(JSON.stringify(response));
    api.author(postId, comment).then(res => {
      expect(res).toEqual(response);
    });
  });
});
