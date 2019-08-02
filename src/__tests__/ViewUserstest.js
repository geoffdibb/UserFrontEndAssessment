import React from 'react';
import ReactDOM from 'react-dom';
import ViewUsers from '../ViewUsers';
import renderer from 'react-test-renderer';


it('snapshot ViewUsers', () => {
  const tree = renderer.create(<ViewUsers/>).toJSON()
  expect(tree).toMatchSnapshot();
})