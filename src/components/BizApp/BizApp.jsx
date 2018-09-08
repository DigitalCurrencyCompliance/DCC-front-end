import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import Login from './Login';
import RegisterBusiness from './RegisterBusiness/RegisterBusiness';
import BusinessPortal from '../BusinessPortal/BusinessPortal';

export default class BizApp extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="biz-app">
        {/* <BrowserRouter> */}
          <Switch>
            {/* <Route path='/business' component={Login} /> */}
            <Route path='/business/register' component={RegisterBusiness} />
            <Route path='/business/portal' component={BusinessPortal} />
          </Switch>
        {/* </BrowserRouter> */}
      </div>
    );
  }

}
