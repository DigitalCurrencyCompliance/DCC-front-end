import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import TextInput from '../TextInput';

export default class Login extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      ein: '',
      password: '',
    };
  }

  handleTextChange = event => {
    if (this.state[event.target.id] !== undefined) {
      this.setState({ [event.target.id]: event.target.value })
    }
  }

  render() {
    return (
      <div className="login">
        <div className="d-flex justify-content-around">

          <Button
            bsStyle="primary"
            className="button-size"
          >
            <NavLink
              to="/business/register"
              className="nav-link"
            >
              Register
            </NavLink>
          </Button>

          <div className="flex-column justify-content-start">
            <TextInput
              htmlId="ein"
              name="ein"
              label="EIN:"
              type="text"
              // placeholder=""
              value={this.state.ein}
              onChange={this.handleTextChange}
            />
            <TextInput
              htmlId="password"
              name="password"
              label="Password:"
              type="password"
              // placeholder=""
              value={this.state.password}
              onChange={this.handleTextChange}
            />
            <Button bsStyle="primary">
              <NavLink
                // to={`/business/${business.name}`}
                to={`/business/portal/${this.state.ein}`}
                className="nav-link"
              >
                Login In
              </NavLink>
            </Button>
          </div>

        </div>
      </div>
    );
  }

}
