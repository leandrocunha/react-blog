import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Post from '../../components/Post';
import Loading from './../../components/Loading';

const initialState = { posts: {} };
const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Post />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Post store={store} />);
    expect(Component.exists()).toEqual(true);
  });

  it('should show loader', () => {
    const Component = shallow(
      <Post match={{ params: { id: 1 } }} store={store} />
    ).dive();
    Component.setState({ loading: true });
    expect(Component.find(Loading).length).toEqual(1);
  });
});
