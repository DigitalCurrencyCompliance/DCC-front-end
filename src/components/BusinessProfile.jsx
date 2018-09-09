import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from 'react-bootstrap/lib/Button';
import Checkbox from 'react-bootstrap/lib/Checkbox';

export default class BusinessProfile extends Component {

  static propTypes = {
    formType: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      corporationName: '',
      closeCorp: '',

      registeredAgentName: '',

      mailingAddress: '',
      mailingCity: '',
      mailingCounty: '',
      mailingState: '',
      mailingPostalCode: '',
      officeAddress: '',
      officeCity: '',
      officeCounty: '',
      officeState: '',
      officePostalCode: '',
      contactPerson: '',
      phoneNumber: '',
      email: ''
    };
    // products or services ?
  }

  handleTextChange = (event) => {
    if (this.props.disabled === false) {
      if(this.state[event.target.id] !== undefined) {
          this.setState({[event.target.id]: event.target.value});
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.passUpResponse({dude: "dude!"})
  }

  // TODO get pdf forms with fill and docusign

  render() {
    console.log('formType', this.props.formType.value);
    console.log('formType', this.props.formType.label);

    return (
      <div className=" card business-profile">
        <div>Profit Corporation</div>
        <div>Articles of Incorporation</div>
        <form className="card">
          <fieldset>

            <TextInput
              htmlId="corporationName"
              name="corporationName"
              label="Corporation name:"
              type="text"
              value={this.state.corporationName}
              onChange={this.handleTextChange}
              required
            />

            <label >
              This entity elects to be a statutory close corporation:
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              value={this.state.closeCorp}
              id="closeCorp"
            />

            

            <TextInput
              htmlId="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              type="phone"
              placeholder="919-929-9339"
              value={this.state.phoneNumber}
              onChange={this.handleTextChange}
              readOnly={this.props.disabled}
              // disabled={this.props.disabled}
            />
            <TextInput
              htmlId="address1"
              name="address1"
              label="Address 1"
              type="text"
              placeholder="1234 Main St"
              value={this.state.address1}
              onChange={this.handleTextChange}
              readOnly={this.props.disabled}
              // disabled={this.props.disabled}
            />
            <TextInput
              htmlId="address2"
              name="address2"
              label="Address 2"
              type="text"
              placeholder="Apartment, studio, or floor"
              value={this.state.address2}
              onChange={this.handleTextChange}
              readOnly={this.props.disabled}
              // disabled={this.props.disabled}
            />
            <TextInput
              htmlId="city"
              name="city"
              label="City"
              type="text"
              placeholder="Memphis"
              value={this.state.city}
              onChange={this.handleTextChange}
              readOnly={this.props.disabled}
              // disabled={this.props.disabled}
            />
            <TextInput
              htmlId="state"
              name="state"
              label="State"
              type="text"
              placeholder="Tennessee"
              value={this.state.state}
              onChange={this.handleTextChange}
              readOnly={this.props.disabled}
              // disabled={this.props.createHotelSuccessState}
            />
            <TextInput
              htmlId="county"
              name="county"
              label="county"
              type="text"
              placeholder="USA"
              value={this.state.county}
              onChange={this.handleTextChange}
              readOnly={this.props.disabled}
              // disabled={this.props.createHotelSuccessState}
            />
            <TextInput
              htmlId="postalCode"
              name="postalCode"
              label="Postal Code"
              type="text"
              placeholder="50304"
              value={this.state.postalCode}
              onChange={this.handleTextChange}
              readOnly={this.props.disabled}
              // disabled={this.props.createHotelSuccessState}
            />
            <Button
              bsStyle="primary"
              className="button-size"
            >
                Register
            </Button>
          </fieldset>
        </form>
      </div>
    );
  }

}
