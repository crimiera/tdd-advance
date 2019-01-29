import React from 'react';
import {shallow } from 'enzyme';
import {Wallet} from './index';

describe('Wallet',()=>{

    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();

    const props = {
        balance : 20,
        deposit: mockDeposit,
        withdraw: mockWithdraw 
    }

    const wallet = shallow(<Wallet {...props}/>);
    it("Wallet render",()=>{
        expect(wallet).toMatchSnapshot(); 
    });

    it('display the write balance ', ()=>{
        expect(wallet.find('.balance').text()).toEqual('Wallet 20');
    })

    it("check if the input add / withdraw  exist on the page ",()=>{
        expect(wallet.find(".input-wallet").exists()).toBe(true);
    })

    describe("When the user type into the input ",()=>{
        const balance = '25';
        
        beforeEach(()=>{
            wallet.find(".input-wallet").simulate('change',{target:{value:balance}})
        })

        it('Convert the input into a number',()=>{
            expect(wallet.state().balance).toEqual(parseInt(balance,10));
        });

        describe('The user submit on the deposit balance', ()=>{
          
            beforeEach(()=>  wallet.find('.btn-deposit').simulate('click') )

            it("it dispatch the deposit from props with the local balance",() => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(balance,10))
            })
        })

        describe('The user submit on the  withdraw balance', ()=>{
          
            beforeEach(()=>  wallet.find('.btn-withdraw').simulate('click') )

            it("it dispatch the withdraw from props with the local balance",() => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(balance,10))
            })
        })
    })
})