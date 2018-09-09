import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import Transaction from './Transaction';

export default class SingleCurrency extends Component {

  static propTypes = {
    addr: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      transactionsArray: null,
    };
  }

  componentDidMount() {
    this.getTxnByWallet(this.props.addr);
  }

  getTxnByWallet = (addr) => {
    // event.preventDefault()
    request
      .post('http://my.aae.co:55555/6ef2c5b8-0561-4837-ac7f-5dc4e4f244fc/dcc7/account/find')
      .send({ _id: addr })
      .end((err, res) =>{
        if (err) {
          console.log(err);
          console.log(res);
          this.setState({ error: res.body.error });
        } else {
          console.log(res);
          this.setState({ transactionsArray: res });
        }
      })
  }

  // map
  generateTxnsList() {
    let txnsList = null
    if (this.state.transactionsArray !== null
      && this.state.transactionsArray !== undefined) {
      txnsList = this.state.transactionsArray.map((txnObject, index) => {
        return <Transaction
            key={index}
            currency={txnObject.currency}
            address={txnObject.address}
            setAddress={this.setAddress}
            balance={txnObject.balance}
          />
      })
    }
    return txnsList
  }

  render() {
    return (
      <div>

      </div>
    );
  }

}
