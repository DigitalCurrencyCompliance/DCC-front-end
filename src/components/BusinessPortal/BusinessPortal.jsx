import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import ProfileName from './ProfileName';
import CurrencyAddressList from '../CurrencyAddress/CurrencyAddressList';

export default class BusinessPortal extends Component {

  static propTypes = {
    id: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    // this.getData();
  }



  render() {
    return (
      <div>
        <div className="business-portal">
          <div>BusinessPortal</div>
          <ProfileName
            name={this.state.name}
            isBiz={true}
          />
          <CurrencyAddressList
            id={this.props.id}
          />
        </div>
      </div>
    );
  }

}
