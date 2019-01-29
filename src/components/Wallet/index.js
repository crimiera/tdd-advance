import React,{Component} from 'react';
import {connect} from 'react-redux';
import {deposit, withdraw } from '../../actions/balance';

export class Wallet extends Component {

    constructor(){
        super();
       
        this.state = {
            balance :null
        }

        this.updateBalance= this.updateBalance.bind(this);
        this.deposit = this.deposit.bind(this);
        this.withdraw = this.withdraw.bind(this);
    }

    updateBalance(event){
        this.setState({balance: parseInt(event.target.value,10)})
    }
 
    deposit(){
        this.props.deposit(this.state.balance)
    }

    withdraw(){
        this.props.withdraw(this.state.balance)
    }

    render(){
        return (
            <div>
                <h3 className='balance'>Wallet {this.props.balance}</h3>
                <input className='input-wallet' onChange={this.updateBalance}/>
                <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
                <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
            </div>
        )
    }
}


export default connect( state=> state ,{deposit, withdraw})(Wallet);