import React from 'react';
import Home from '../Home';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../App';


it('snapshot Home', () => {
  const tree = renderer.create(<Home/>).toJSON()
  expect(tree).toMatchSnapshot();
})

it('renders Home text', () => {
  const wrapper = shallow(<App />);
      const Home = <Home/>;
  expect(wrapper.contains(Home)).toEqual(true);

});