import React from 'react';
import { shallow } from 'enzyme';
import Posts from '../../components/Posts';

describe('<Posts />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Posts posts={[]} />);
    expect(Component.exists()).toEqual(true);
  });
});
