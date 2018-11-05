import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumb from '../../components/Breadcrumb';

describe('<Breadcrumb />', () => {
  it('should mount whitout a crash', () => {
    const Component = shallow(<Breadcrumb />);
    expect(Component.exists()).toEqual(true);
  });
});
