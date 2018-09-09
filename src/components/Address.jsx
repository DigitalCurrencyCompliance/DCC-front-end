import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from 'react-bootstrap/lib/Button';

export default class BusinessProfile extends Component {

  static propTypes = {
    
  };

  constructor(props) {
    super(props);

    this.state = {
      address: '',
      city: '',
      // county: '',
      state: '',
      postalCode: '',
    };
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
    this.props.passUpAddress({ addressObject: this.state });
  }

  // TODO get pdf forms with fill and docusign

  render() {
    console.log('formType', this.props.formType.value);
    console.log('formType', this.props.formType.label);

    return (
      <div className=" card business-profile">
        <div>BusinessProfile</div>
        <form className={`form`}>
          <fieldset>

            <TextInput
              htmlId="address"
              name="address"
              label="Address:"
              type="text"
              value={this.state.address1}
              onChange={this.handleTextChange}
              required
            />

            <TextInput
              htmlId="city"
              name="city"
              label="City:"
              type="text"
              value={this.state.city}
              onChange={this.handleTextChange}
              required
            />

            <TextInput
              htmlId="state"
              name="state"
              label="State:"
              type="text"
              value={this.state.state}
              onChange={this.handleTextChange}
              required
            />

            {/* <TextInput
              htmlId="county"
              name="county"
              label="County"
              type="text"
              value={this.state.county}
              onChange={this.handleTextChange}
            /> */}

            <TextInput
              htmlId="postalCode"
              name="postalCode"
              label="Postal Code:"
              type="text"
              value={this.state.postalCode}
              onChange={this.handleTextChange}
              required
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
