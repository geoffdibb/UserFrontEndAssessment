import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('snapshot App', () => {
  // const wrapper = shallow(<App />);
  const tree = renderer.create(<App/>).toJSON()
  expect(tree).toMatchSnapshot();
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders Navbar', () => {
  const wrapper = shallow(<App />);
      const Navbar = <Navbar/>;
  expect(wrapper.contains(Navbar)).toEqual(true);

});