import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompanyTypeList from '../../CompanyTypeList/CompanyTypeList';
import BusinessProfile from '../../BusinessProfile';
import DigitalCurrencyList from '../../DigitalCurrency/DigitalCurrencyList';


export default class RegisterBusiness extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="register-business">
        <div className="header">Register Business</div>
        <CompanyTypeList />
        <BusinessProfile />
        <DigitalCurrencyList />
        {/* submit button */}
      </div>
    );
  }

}
