import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Login from '../Login';
import renderer from 'react-test-renderer';


it('snapshot Login', () => {
  const tree = renderer.create(<Login/>).toJSON()
  expect(tree).toMatchSnapshot();
})
