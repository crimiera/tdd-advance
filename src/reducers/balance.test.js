import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balance reducer test ',()=>{
    it('sets a balance', ()=> {
        const balance = 10;
        expect(balanceReducer(undefined,{type:constants.SET_BALANCE,balance})).toEqual(balance);
    })

    it('deposite into the balance',()=>{
        const initialState = 0 ;
        const deposit = 10;
        expect(balanceReducer(initialState,{type:constants.DEPOSIT, deposit})).toEqual(10);
    })

    it('withdraw from the balance',()=>{
        const initialState = 20 ;
        const withdrawal = 5;
        expect(balanceReducer(initialState,{type:constants.WITHDRAW, withdrawal})).toEqual(15);
    })
})