import React from 'react';
import { shallow } from 'enzyme';
import { AppContainer as App } from '../app';

const dispatch = () => null;

describe('<App />', () => {
  it('renders <App /> container', () => {
    const wrapper = shallow(<App dispatch={dispatch} />);
    expect(wrapper.find('div').length).toBe(0);
  });

  it('renders <App /> container', () => {
    const wrapper = shallow(<App dispatch={dispatch} loaded />);
    expect(wrapper.find('div').length).toBe(1);
  });
});
