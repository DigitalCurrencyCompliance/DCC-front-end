import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';

export default class Home extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="home">
        <div className="d-flex justify-content-around">
          {/* businesses */}
          <Button bsStyle="primary">
            <NavLink
              to="/business"
              className="nav-link"
            >
              Businesses
            </NavLink>
          </Button>

          {/* state of wyoming */}
          <Button bsStyle="primary">
            <NavLink
              to="/state"
              className="nav-link"
            >
              State of Wyoming
            </NavLink>
          </Button>
        </div>
      </div>
    );
  }

}
