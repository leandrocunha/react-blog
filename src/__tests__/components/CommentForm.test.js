import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import CommentForm from '../../components/CommentForm';
import Loading from './../../components/Loading';
import api from './../../api';

const initialState = { posts: { post: { id: 1 } } };
const mockStore = configureStore();
const store = mockStore(initialState);

describe('<CommentForm />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<CommentForm store={store} />);
    expect(Component.exists()).toEqual(true);
  });

  it('should show loader', () => {
    const Component = shallow(<CommentForm store={store} />).dive();
    Component.setState({ loading: true });
    expect(Component.find(Loading).length).toEqual(1);
  });

  it('should submit form', () => {
    const Component = shallow(<CommentForm store={store} />).dive();
    const comment = {
      comment: 'Lorem ipsum dolor sit',
      email: 'foo@bar.com',
      name: 'John Doe'
    };
    const post = Component.props();

    Component.setState({
      ...Component.state(),
      ...comment
    });

    Component.simulate('submit', { preventDefault() {} });
    api.commentsNew(post.id, comment).then(res => {
      Component.setState({
        ...Component.state(),
        loading: false
      });
      expect(Component.state()).toEqual({
        ...Component.state(),
        loading: false
      });
    });
  });

  it('should submit form error', () => {
    const Component = shallow(<CommentForm store={store} />).dive();
    const comment = { comment: 'Lore', email: 'foo@bar.com', name: 'John Doe' };
    const error = {
      error: true,
      errorMsg: 'Your comment need 5 character at least.'
    };

    Component.setState({
      ...Component.state(),
      ...comment
    });

    Component.simulate('submit', { preventDefault() {} });
    expect(Component.state()).toEqual({ ...error, ...comment, loading: false });
  });
});
