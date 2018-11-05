import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../components/Button';

describe('<Button />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Button />);
    expect(Component.exists()).toEqual(true);
  });

  it('should click', () => {
    const mockFn = jest.fn();
    const Component = shallow(<Button onClick={mockFn} />).dive();

    Component.simulate('click');
    expect(mockFn).toBeCalled();
  });
});
