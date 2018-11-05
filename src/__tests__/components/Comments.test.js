import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Button from './../../components/Button';
import Comments from '../../components/Comments';
import Comment from './../../components/Comment';
import Loading from './../../components/Loading';

const initialState = { posts: { comments: ['comment 1', 'comment 2'] } };
const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Comments />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Comments store={store} />);
    expect(Component.exists()).toEqual(true);
  });

  it('should show loader', () => {
    const Component = shallow(<Comments store={store} />).dive();
    Component.setState({ loading: true });
    expect(Component.find(Loading).length).toEqual(1);
  });

  it('should show comments', () => {
    const Component = shallow(<Comments store={store} />).dive();
    Component.setState({ loading: false });
    expect(Component.find(Comment).length).toEqual(2);
  });

  it('should load more comments', () => {
    const Component = shallow(<Comments store={store} />).dive();
    const loadMore = jest.spyOn(Component.instance(), 'loadMore');

    Component.setState({ loading: false });
    Component.find(Button).simulate('click');
    expect(Component.find(Comment).length).toEqual(2);
    expect(loadMore).toBeCalled();
  });
});
