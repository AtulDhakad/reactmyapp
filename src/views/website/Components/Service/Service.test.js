import React from 'react';
import { shallow } from 'enzyme';
import Service from './Service';

describe('<Service />', () => {
  test('renders', () => {
    const wrapper = shallow(<Service />);
    expect(wrapper).toMatchSnapshot();
  });
});
