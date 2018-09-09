import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Button from 'react-bootstrap/lib/Button';

export default class BusinessProfile extends Component {

  static propTypes = {
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
    readOnly: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.state = {
      address: props.address ? props.address : '',
      city: props.city ? props.city : '',
      // county: '',
      state: props.state ? props.state : '',
      postalCode: props.postalCode ? props.postalCode : '',
    };
  }

  handleTextChange = (event) => {
      if(this.state[event.target.id] !== undefined) {
          this.setState({[event.target.id]: event.target.value});
      }
  }

  submitForm = (event) => {
    event.preventDefault()
    this.props.passUpAddress(this.state, this.props.preName);
  }

  // TODO get pdf forms with fill and docusign

  render() {

    return (
      <div className="address-form">
        <div>
          {/* <fieldset> */}

            <TextInput
              className="w-100"
              htmlId="address"
              name="address"
              label="Address:"
              type="text"
              value={this.state.address}
              onChange={this.handleTextChange}
              required
              readOnly={this.props.readOnly}
            />

            <div className="row">

              <TextInput
                className="col"
                htmlId="city"
                name="city"
                label="City:"
                type="text"
                value={this.state.city}
                onChange={this.handleTextChange}
                required
                readOnly={this.props.readOnly}
              />

              <TextInput
                className="col"
                htmlId="state"
                name="state"
                label="State:"
                type="text"
                value={this.state.state}
                onChange={this.handleTextChange}
                required
                readOnly={this.props.readOnly}
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
                className="col"
                htmlId="postalCode"
                name="postalCode"
                label="Postal Code:"
                type="text"
                value={this.state.postalCode}
                onChange={this.handleTextChange}
                required
                readOnly={this.props.readOnly}
              />

            </div>

            <Button
              bsStyle="primary"
              className="button-size"
              onClick={this.submitForm}
            >
              Save
            </Button>
          {/* </fieldset> */}
        </div>
      </div>
    );
  }

}
