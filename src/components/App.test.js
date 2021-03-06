import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,configure} from 'enzyme';
import App from './App';

var Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

describe('App',()=>{
  const app = shallow(<App/>);

  it('It render the app ',()=>{
    expect(app).toMatchSnapshot();
  });

  it('contains a Wallet container',()=>{
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })

  it('contains a Loot container',()=>{
    expect(app.find('Connect(Loot)').exists()).toBe(true);
  })

  it('contain a link to the coindesk price page',()=>{
    expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
  })
  
});

