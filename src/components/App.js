import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from './Home';
import BizApp from './BizApp/BizApp';
import StateApp from './StateApp/StateApp';
import Login from './BizApp/Login';
import RegisterBusiness from './BizApp/RegisterBusiness/RegisterBusiness';
import BusinessPortal from './BusinessPortal/BusinessPortal';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/business/register' component={RegisterBusiness} />
              <Route path='/business/portal' component={BusinessPortal} />
              <Route path='/business' component={Login} />

              <Route path='/state' component={StateApp} >

              </Route>
            </Switch>
          </BrowserRouter>
        </BaseLayout>
      </div>
    );
  }
}

export default App;
