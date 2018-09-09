import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DClist = [ 'BTC', 'ETH', 'PIVX', 'DTC', 'DAI' ];

export default class DigitalCurrencyList extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }



  createCheckBoxList = () => {
    return DClist.map((item) => {
      return <div key={item} className="list-group-item">
        <input
          className="m-2"
          type="checkbox"
          // checked={this.state.closeCorp}
          onChange={this.toggleCloseCorp}
          id={item}
        />
          {item}
      </div>
    })
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">Digital Currency List</div>
        <div className="list-group list-group-flush">
          {this.createCheckBoxList()}

        </div>
      </div>
    );
  }

}
