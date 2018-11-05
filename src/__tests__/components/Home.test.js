import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Home from '../../components/Home';
import Loading from './../../components/Loading';
import api from './../../api';
import actions from './../../actions';

const initialState = { notifier: { show: false } };
const mockStore = configureStore();
const store = mockStore(initialState);

const posts = [
  {
    body:
      'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    userId: 1
  },
  {
    body:
      'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    id: 2,
    title: 'qui est esse',
    userId: 1
  }
];

describe('<Home />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Home store={store} />);
    expect(Component.exists()).toEqual(true);
  });

  it('should show loader', () => {
    const Component = shallow(<Home store={store} />).dive();
    Component.setState({ loading: true });
    expect(Component.find(Loading).length).toEqual(1);
  });

  it('should load more', () => {
    const Component = shallow(<Home store={store} />).dive();
    Component.instance().loadMore();

    fetch.mockResponseOnce(JSON.stringify(posts));
    api.posts().then(res => {
      expect(actions.posts.list(res)).toBeCalled();
    });
  });
});
