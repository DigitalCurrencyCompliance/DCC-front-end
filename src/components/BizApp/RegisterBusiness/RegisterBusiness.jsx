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
      type: {}
    };
  }

  setCompanyType = (type) => {
    // get profile form
    this.setState({ type: type })
  }

  render() {
    return (
      <div className="register-business">
        <div className="header">Register Business</div>
        <CompanyTypeList
          sendCompanyType={this.setCompanyType}
        />
        <BusinessProfile
          formType={this.state.type}
        />
        <DigitalCurrencyList />
        {/* submit button */}
      </div>
    );
  }

}
