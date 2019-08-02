import React from 'react';
import ReactDOM from 'react-dom';
import Register from '../Register';
import renderer from 'react-test-renderer';


it('snapshot Register', () => {
  const tree = renderer.create(<Register/>).toJSON()
  expect(tree).toMatchSnapshot();
})