import React from 'react';
import { shallow } from 'enzyme';
import TwoColumn from './index';

describe('<TwoColumn />', () => {
  it('should render the TwoColumn', () => {
    const wrapper = shallow(<TwoColumn />);
    expect(wrapper).toMatchSnapshot();
  });
});
