import React from 'react';
import { shallow } from 'enzyme';
import { AppContainer as App } from '../app';

describe('<App />', () => {
  it('renders <App /> container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').length).toBe(0);
  });

  it('renders <App /> container', () => {
    const wrapper = shallow(<App loaded />);
    expect(wrapper.find('div').length).toBe(1);
  });
});
