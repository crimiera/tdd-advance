import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchBitcoin} from '../../actions/bitcoin';

export class Loot extends Component {
        
    componentDidMount(){
       this.props.fetchBitcoin();
    }

    computeBitcoin = () => {
        const { bitcoin } = this.props;
        if( Object.keys(bitcoin).length === 0 ) return '';
        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(','))
    }

    render(){
        return (
            <div>
                <h3 className=''>Bitcoin balance:{this.computeBitcoin()}</h3>
            </div>
        )
    }
}

export default connect( state=> state ,{fetchBitcoin})(Loot);