import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Address from '../Address';

export default class OwnerItem extends Component {

  static propTypes = {
    ownerObject: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { name, address, city, state, postalCode } = this.props.ownerObject;
    console.log('THIS.PROPS.OWNEROBJECT', this.props.ownerObject);
    return (
      <div className="row">
        <input
          value={name}
          readOnly
        />
        <Address
          address={address}
          city={city}
          state={state}
          postalCode={postalCode}
          readOnly={true}
        />
      </div>
    );
  }

}
