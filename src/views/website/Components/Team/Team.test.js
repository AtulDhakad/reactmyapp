import React from 'react';
import { shallow } from 'enzyme';
import Team from './Team';

describe('<Team />', () => {
  test('renders', () => {
    const wrapper = shallow(<Team />);
    expect(wrapper).toMatchSnapshot();
  });
});
