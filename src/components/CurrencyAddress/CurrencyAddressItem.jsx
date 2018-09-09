import React from 'react';
import PropTypes from 'prop-types';


export default function ({ currency, address, setAddress, balance }) {
  return (
    <div className="row">
      <div className="col">{currency}</div>
      <div
        className="col"
        onClick={event => setAddress(address)}
      >{address}</div>
      <div className="col">{balance}</div>
    </div>
  );
}

.propTypes = {
  currency: PropTypes.string,
  address: PropTypes.string,
  setAddress: PropTypes.func,
  balance: PropTypes.number,
};
