import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import Address from '../Address';
import OwnerItem from './OwnerItem';

export default class OwnersArray extends Component {

  static propTypes = {
    passArrayUp: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      ownersArray: [],
      arrayBool: false,
    };
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined) {
        this.setState({[event.target.id]: event.target.value});
    }
  }

  pushToArray = () => {
    // event.preventDefault()
    // debugger
    let ownersArray = this.state.ownersArray;
    let ownerObject = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      postalCode: this.state.postalCode,
    };
    ownersArray.push(ownerObject);
    this.setState({
      ownersArray: ownersArray,
      name: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      arrayBool: false,
    });
  }

  submitAddressData = (object, preName) => {
    this.setState({
      city: object.city,
      address: object.address,
      state: object.state,
      postalCode: object.postalCode,
      arrayBool: true,
    })
  }

  render() {
    let ownersDisplayInputs
    if (this.state.ownersArray.length > 0) {
      ownersDisplayInputs = this.state.ownersArray.map((ownerObject, index) => {
        return (
          <OwnerItem
            key={index}
            ownerObject={ownerObject}
          />
        )
      })
    } else {
      setTimeout(100);
    }
    let ownerNumber = '';
    return (
      <div className="card my-3 p-4">
        <div>
          <div className="col justify-content-start" >
            {this.state.error &&
              <div>{this.state.error}</div>
            }
          </div>
          <div>
            <TextInput
              htmlId="name"
              name="name"
              label="Name"
              type="text"
              required={true}
              onChange={this.handleTextChange}
              value={this.state.name}
              // readOnly={this.props.disabled}
              // disabled={this.state.disableAddOwner}
            />
            <Address
              passUpAddress={this.submitAddressData}
              preName={ownerNumber}
            />
            {/* <TextInputBEM
              htmlId="walletAddress"
              name="walletAddress"
              label="Wallet Address"
              type="text"
              required={true}
              onChange={this.handleTextChange}
              placeholder="address"
              value={this.state.walletAddress}
              readOnly={this.props.disabled}
              // disabled={this.state.disableAddOwner}
            /> */}
            { (this.state.name !== '') && this.state.arrayBool ?
              <input
                id="ownerAddress"
                type="submit"
                className="button"
                value="Add Owner"
                onClick={this.pushToArray}
              />
            :
              <input
                id="search"
                type="submit"
                className="button disabled"
                // styleName={`${buttonStyle}`}
                value="Add Owner"
                // onClick={this.handleSubmit}
                disabled
              />
            }
            {ownersDisplayInputs}
            <input
              id="ownerAddress"
              type="submit"
              className="button"
              value="Done"
              onClick={event => this.props.passArrayUp(this.state.ownersArray)}
            />
          </div>
        </div>
      </div>
    );
  }

}
