import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import CurrencyAddressItem from './CurrencyAddressItem';

export default class CurrencyAddressList extends Component {

  static propTypes = {
    id: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      currencyAddressArray: null,
      singleAddress: null,
    };
  }

  componentDidMount() {
    if (this.props.id) {
      this.getCurrencyArray(this.props.id);
    }
  }

  getCurrencyArray = (id) => {
    // event.preventDefault()
    request
      .post('https://hungry-mouse-68.localtunnel.me/account/find')
      .send({ id: id })
      .end((err, res) =>{
        if (err) {
          console.log(err);
          console.log(res);
          this.setState({ error: res.body.error });
        } else {
          console.log(res);
          this.setState({ currencyAddressArray: res });
        }
      })
  }

  setAddress = (addr) => {
    this.setState({ singleAddress: addr });
  }

  close = () => {
    this.setState({ singleAddress: null });
  }

  generateCurrenciesList() {
    let currencyList = null
    if (this.state.currencyAddressArray !== null
      && this.state.currencyAddressArray !== undefined) {
      currencyList = this.state.currencyAddressArray.map((addressObject, index) => {
        return <CurrencyAddressItem
            key={index}
            currency={addressObject.currency}
            address={addressObject.address}
            setAddress={this.setAddress}
            balance={addressObject.balance}
          />
      })
    }
    return currencyList
  }

  render() {
    return (
      <div className="card">
        <div className="card-header row">
          <div className="col">
            Currencies
          </div>
          <div className="col">
            Addresses
          </div>
          <div className="col">
            Total
          </div>
        </div>
        { this.state.error &&
          <div className="alert">{this.state.error}</div>
        }
        <div className="list-group list-group-flush">
          { this.state.currencyAddressArray &&
            this.generateCurrenciesList()
          }
        </div>
        { this.state.singleAddress &&
          <SingleCurrency
            address={this.state.singleAddress}
            close={this.close}
          />
        }
      </div>
    );
  }

}
