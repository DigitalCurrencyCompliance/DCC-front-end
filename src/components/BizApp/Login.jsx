import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import TextInput from '../TextInput';

export default class Login extends Component {

  static propTypes = {
    passUpID: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      ein: '',
      password: '',
      navigate: null,
    };
  }

  handleTextChange = event => {
    if (this.state[event.target.id] !== undefined) {
      this.setState({ [event.target.id]: event.target.value })
    }
  }

  commenceLogin = () => {
    this.props.passUpID(this.state.ein);
    this.setState({ navigate: 'gogogo' })
  }

  render() {
    if (this.state.navigate === 'gogogo') {
      return <Redirect to="/business/portal" />
    }
    return (
      <div className="login">
        <div className="d-flex justify-content-around align-items-end">
          {/* <div className="col justify-content-end"> */}
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
          {/* </div> */}
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
            <Button
              bsStyle="primary mt-3"
              onClick={this.commenceLogin}
            >
              {/* <NavLink
                // to={`/business/${business.name}`}
                to={`/business/portal/${this.state.ein}`}
                className="nav-link"
              > */}
                Login In
              {/* </NavLink> */}
            </Button>
          </div>

        </div>
      </div>
    );
  }

}
