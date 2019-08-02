import React from 'react';
import ReactDOM from 'react-dom';
import Users from '../Users';
import renderer from 'react-test-renderer';


it('snapshot Users', () => {
  const tree = renderer.create(<Users/>).toJSON()
  expect(tree).toMatchSnapshot();
})