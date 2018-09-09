import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';

export default function BusinessListItem({ name, type, ein, setBusiness }) {
  return (
    <div className="list-group-item row">
      <div className="col">{name}</div>
      <div className="col">{type}</div>
      <div className="col">{ein}</div>
      <div className="col">
        <Button bsStyle="primary"
          onClick={event => setBusiness(ein)}
        >
          Show Details
        </Button>
      </div>
    </div>
  );
}

BusinessListItem.propTypes = {
  currency: PropTypes.string,
  address: PropTypes.string,
  setAddress: PropTypes.func,
  balance: PropTypes.number,
};
