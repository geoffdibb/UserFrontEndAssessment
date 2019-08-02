import React from 'react';
import Home from '../Home';
import renderer from 'react-test-renderer';


it('snapshot Home', () => {
  const tree = renderer.create(<Home/>).toJSON()
  expect(tree).toMatchSnapshot();
})

