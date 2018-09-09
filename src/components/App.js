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
  constructor(props) {
    super(props);

    this.state = {
      id: null,
    }
  }

  passUpID = (id) => {
    this.setState({ id });
  }

  render() {
    return (
      <div className="App">
        <BaseLayout>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/business/register' component={RegisterBusiness} />
              <Route path='/business/portal' render={(props)=>(<BusinessPortal
                id={this.state.id}
              />)} />
              <Route path='/business' render={(props)=>(<Login
                passUpID={this.passUpID}
              />)} />
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
