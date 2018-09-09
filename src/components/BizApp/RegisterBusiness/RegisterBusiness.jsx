import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CompanyTypeList from '../../CompanyTypeList/CompanyTypeList';
import BusinessProfile from '../../BusinessProfile/BusinessProfile';
// import DigitalCurrencyList from '../../DigitalCurrency/DigitalCurrencyList';


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

  isNotEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return true;
    }
      return false;
  }

  render() {
    return (
      <div className="pt-3 register-business">
        <h4>Profit Corporation</h4>
        <h4>Articles of Incorporation</h4>
        <CompanyTypeList
          sendCompanyType={this.setCompanyType}
        />
        { this.isNotEmpty(this.state.type) &&
          <BusinessProfile
            formType={this.state.type}
          />
        }
        {/* <DigitalCurrencyList /> */}
        {/* submit button */}
      </div>
    );
  }

}
