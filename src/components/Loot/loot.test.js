import React from 'react';
import {shallow,mount,configure } from 'enzyme';
import {Loot} from './index';

var Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new Adapter() });

describe('Loot Component ',()=>{

    const fetchBitcoinMock = jest.fn();
    let props = {
        balance : 10,
        bitcoin: {},
        fetchBitcoin: fetchBitcoinMock 
    }

    let loot = shallow(<Loot {...props}/>);
  
    it("Loot render",()=>{
        expect(loot).toMatchSnapshot(); 
    });

    describe('When mounted ', ()=>{
        
        beforeEach(()=>{
            props.fetchBitcoin = fetchBitcoinMock;
            loot = mount(<Loot {...props}/>); 
        })
        
        it('it dispatches the fetch method from the props',()=>{
            expect(fetchBitcoinMock).toHaveBeenCalled();
        })
    })

    describe('When we have valid bitcoin props',()=>{
  
        beforeEach(()=>{
            props = {fetchBitcoin : fetchBitcoinMock,balance:10, bitcoin: { bpi: { USD:{rate:'1000'}}}}
            loot = shallow(<Loot {...props}/>); 
        })
    
        it('it display the correct bitcoin value',()=>{
            expect(loot.find('h3').text()).toEqual('Bitcoin balance:0.01')
        })
    })

})