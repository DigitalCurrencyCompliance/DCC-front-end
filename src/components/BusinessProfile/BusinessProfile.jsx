import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import request from 'superagent';
import TextInput from '../TextInput';
import Address from '../Address';
import OwnersArray from './OwnersArray';
import DigitalCurrencyList from '../DigitalCurrency/DigitalCurrencyList';

export default class BusinessProfile extends Component {

  static propTypes = {
    formType: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      corporationName: '',
      closeCorp: false,

      registeredAgentName: '',
      agentAddress: '',
      agentCity: '',
      agentCounty: '',
      agentState: '',
      agentPostalCode: '',

      mailingAddress: '',
      mailingCity: '',
      mailingCounty: '',
      mailingState: '',
      mailingPostalCode: '',

      sameAddrs: false,

      officeAddress: '',
      officeCity: '',
      officeCounty: '',
      officeState: '',
      officePostalCode: '',

      shareClass: '',
      shareNumber: '',

      ownersArray: [],

      // DigitalCurrencyList

      contactPerson: '',
      phoneNumber: '',
      email: '',
      password: '',
    };
    // products or services ?
  }

  toggleCloseCorp = () => {
    this.setState({ closeCorp: !this.state.closeCorp });
  }

  toggleSameAddress = () => {
    if (!this.state.sameAddrs) {
      this.setState({
        officeAddress: this.state.mailingAddress,
        officeCity: this.state.mailingCity,
        officeCounty: this.state.mailingCounty,
        officeState: this.state.mailingState,
        officePostalCode: this.state.mailingPostalCode,
        sameAddrs: true,
      })
    } else {
      this.setState({
        officeAddress: '',
        officeCity: '',
        officeCounty: '',
        officeState: '',
        officePostalCode: '',
        sameAddrs: false,
      });
    }
  }

  handleTextChange = (event) => {
      if(this.state[event.target.id] !== undefined) {
          this.setState({[event.target.id]: event.target.value});
      }
  }

  submitAddressData = (object, preName) => {
    this.setState({
      [preName + "City"]: object.city,
      [preName + "Address"]: object.address,
      [preName + "State"]: object.state,
      [preName + "PostalCode"]: object.postalCode,
    })
  }

  setOwnerArray = (ownersArray) => {
    this.setState({ ownersArray });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // send to DB
    let data = this.state;
    request
      .post('https://hungry-mouse-68.localtunnel.me/account/newAccount')
      .send({ data })
      .end((err, res) =>{
        if (err) {
          console.log(err);
          console.log(res);
          this.setState({ error: res.body.error });
        } else {
          console.log('res', res);
          // this.setState({ currencyAddressArray: res });
        }
      })
  }

  // TODO get pdf forms with fill and docusign

  render() {
    return (
      <div className=" card business-profile">
        <form className="p-3">
          <fieldset>
            <div className="card my-3 p-4">
              <TextInput
                htmlId="corporationName"
                name="corporationName"
                label="Corporation name:"
                type="text"
                value={this.state.corporationName}
                onChange={this.handleTextChange}
                required
              />
              <div className="row my-2">
                <label className="ml-3">
                  This entity elects to be a statutory close corporation:
                </label>
                <input
                  className="m-1"
                  type="checkbox"
                  checked={this.state.closeCorp}
                  onChange={this.toggleCloseCorp}
                  id="closeCorp"
                />
              </div>
            </div>

            <div className="card p-4">
              <h5>Name and physical address of its registered agent:</h5>
              <p>(The registered agent may be an individual resident in Wyoming or
                 a domestic or foreign business entity authorized to transact
                 business in Wyoming. The registered agent must have a physical
                 address in Wyoming. If the registered office includes a suite
                 number, it must be included in the registered office address. A
                 Drop Box is not acceptable. A PO Box is acceptable if listed in
                 addition to a physical address.)</p>
              <TextInput
                htmlId="name"
                name="name"
                label="Name:"
                type="text"
                value={this.state.name}
                onChange={this.handleTextChange}
                required
              />
              <Address
                passUpAddress={this.submitAddressData}
                preName="agent"
              />
              <p>(If mail is received at a Post Office Box, please list above in
                 addition to the physical address.)</p>
            </div>

            <div className="card my-3 p-4">
              <h5 className="mt-3">Mailing address of the corporation:</h5>
              <Address
                passUpAddress={this.submitAddressData}
                preName="mailing"
              />
            </div>

            <div className="card my-3 p-4">
              <h5 className="mt-3">
                 Principal office address:
              </h5>
              <div className="row my-2">
                <label >
                  Check if same as mailing address:
                </label>
                <input
                  className="m-1"
                  type="checkbox"
                  checked={this.state.sameAddrs}
                  onChange={this.toggleSameAddress}
                  id="sameAddrs"
                />
              </div>
              <Address
                passUpAddress={this.submitAddressData}
                preName="office"
              />
            </div>

            <div className="card my-3 p-4">
              <h5>Number and class of shares the corporation will have the
                authority to issue:</h5>
              <div className="row">
                <TextInput
                  htmlId="shareClass"
                  name="shareClass"
                  label="Class of Shares:"
                  type="text"
                  value={this.state.shareClass}
                  onChange={this.handleTextChange}
                />
                <TextInput
                  htmlId="shareNumber"
                  name="shareNumber"
                  label="Number of Shares:"
                  type="number"
                  value={this.state.shareNumber}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>

            <OwnersArray
              passArrayUp={this.setOwnerArray}
            />

            <div className="card my-3 p-4">

              <TextInput
                htmlId="contactPerson"
                name="contactPerson"
                label="Contact Person:"
                type="text"
                value={this.state.contactPerson}
                onChange={this.handleTextChange}
              />

              <TextInput
                htmlId="phoneNumber"
                name="phoneNumber"
                label="Phone Number:"
                type="text"
                value={this.state.phoneNumber}
                onChange={this.handleTextChange}
              />

              <TextInput
                htmlId="email"
                name="email"
                label="Email:"
                type="text"
                value={this.state.email}
                onChange={this.handleTextChange}
              />

              <TextInput
                htmlId="password"
                name="password"
                label="Password:"
                type="text"
                value={this.state.password}
                onChange={this.handleTextChange}
              />

            </div>

            <DigitalCurrencyList

            />

            <Button
              bsStyle="primary"
              className="button-size"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </fieldset>
        </form>
      </div>
    );
  }

}
