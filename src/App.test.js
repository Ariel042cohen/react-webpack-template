import React from 'react';
import {expect} from 'chai';
import { shallow, configure } from 'enzyme';
import App from './App.jsx';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

const wrapper = shallow(<App />);

describe('HelloWorld Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).to.equal('Hello World')
  })
})