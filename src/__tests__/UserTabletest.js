import React from 'react';
import ReactDOM from 'react-dom';
import UserTable from '../UserTable';
import renderer from 'react-test-renderer';


it('snapshot UserTable', () => {
  const tree = renderer.create(<UserTable/>).toJSON()
  expect(tree).toMatchSnapshot();
})