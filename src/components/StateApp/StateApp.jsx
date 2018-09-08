import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import BusinessPortal from '../BusinessPortal/BusinessPortal';

export default class StateApp extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="state-app">
        <div>State Portal</div>
        <Search />
        <BusinessPortal />
      </div>
    );
  }

}
