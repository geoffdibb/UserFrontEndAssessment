import React from 'react';
import ReactDOM from 'react-dom';
import navbar from '../navbar';
import renderer from 'react-test-renderer';


it('snapshot navbar', () => {
  const tree = renderer.create(<navbar/>).toJSON()
  expect(tree).toMatchSnapshot();
})