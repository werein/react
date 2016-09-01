import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'store';
import { App } from '../app';

describe('<App />', () => {
  it('renders <App /> container', () => {
    const wrapper = shallow(<App store={store} />);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
