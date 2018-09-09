import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProfileName from './ProfileName';
import CurrencyAddressList from '../CurrencyAddress/CurrencyAddressList';

export default class BusinessPortal extends Component {

  static propTypes = {
    ein: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    // this.getData();
  }

  getData() {

  }

  render() {
    return (
      <div>
        <div className="business-portal">
          <div>BusinessPortal</div>
          <ProfileName />
          <CurrencyAddressList />
        </div>
      </div>
    );
  }

}
