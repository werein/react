import React from 'react';
import { App } from '../app';
import { shallow } from 'enzyme';
import { store } from '../../store';

describe('<App />', () => {
  it('renders <App /> container', () => {
    const wrapper = shallow(<App store={store} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
