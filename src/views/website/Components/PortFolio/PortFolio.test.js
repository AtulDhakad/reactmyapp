import React from 'react';
import { shallow } from 'enzyme';
import PortFolio from './PortFolio';

describe('<PortFolio />', () => {
  test('renders', () => {
    const wrapper = shallow(<PortFolio />);
    expect(wrapper).toMatchSnapshot();
  });
});
