import React from 'react';
import PropTypes from 'prop-types';


export default function CurrencyAddressItem({ currency, address, setAddress, balance }) {
  return (
    <div className="list-group-item">
      <div className="col">{currency}</div>
      <div
        className="col"
        onClick={event => setAddress(address)}
      ><a>{address}</a></div>
      <div className="col">{balance}</div>
    </div>
  );
}

CurrencyAddressItem.propTypes = {
  currency: PropTypes.string,
  address: PropTypes.string,
  setAddress: PropTypes.func,
  balance: PropTypes.number,
};
