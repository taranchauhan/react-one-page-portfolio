import React from 'components/TwoColumn/react';
import { shallow } from 'components/TwoColumn/enzyme';
import TwoColumn from './index';

describe('<TwoColumn />', () => {
  it('should render the TwoColumn', () => {
    const wrapper = shallow(<TwoColumn />);
    expect(wrapper).toMatchSnapshot();
  });
});
