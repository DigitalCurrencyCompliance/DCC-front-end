import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import Search from './Search';
import BusinessList from './BusinessList';

export default class StateApp extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      businessesArray: null,
    };
  }

  // receive data from Search --> get businesses
  getBusinessArray = (object) => {
    // event.preventDefault();
    this.setState({ loading: true })
    request
      .post(`http://my.aae.co:55555/6ef2c5b8-0561-4837-ac7f-5dc4e4f244fc/dcc2`)
      .send({
        searchFor: this.state.searchFor,
        filterBy: this.state.filterBy,
      })
      // .set('Authorization', `Token token=${this.state.token}`)
      .end((err, res) =>{
        if (err) {
          console.log(err);
          this.setState({ error: res.body.error });
        } else {
          console.log(res); // res = []
          this.setState({
            businessesArray: res,
            loading: false,
          });
        }
      })
  }

  render() {
    return (
      <div className="state-app">
        <div className="spacer"></div>
        <Search
          sendParams={this.getBusinessArray}
        />
        <BusinessList
          loading={this.state.loading}
          businessesArray={this.state.businessesArray}
        />
      </div>
    );
  }

}
