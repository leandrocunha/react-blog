import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Author from '../../components/Author';
import Loading from './../../components/Loading';

const initialState = { notifier: { show: false } };
const mockStore = configureStore();
const store = mockStore(initialState);

describe('<Author />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Author store={store} />);
    expect(Component.exists()).toEqual(true);
  });

  it('should show loader', () => {
    const Component = shallow(<Author store={store} />).dive();
    Component.setState({ loading: true });
    expect(Component.find(Loading).length).toEqual(1);
  });
});
