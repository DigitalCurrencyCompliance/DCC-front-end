import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../TextInput';
import Button from 'react-bootstrap/lib/Button';

export default class Search extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="search-bar">
        {/* <div>Search</div> */}
        <div className="d-flex justify-content-between">
          <TextInput
            htmlId="searchFor"
            name="searchFor"
            label="Search for:"
            type="text"
            // placeholder="Hotel Name"
            value={this.state.searchFor}
            onChange={this.handleTextChange}
          />
          <TextInput
            htmlId="filterBy"
            name="filterBy"
            label="Filter by:"
            type="text"
            // placeholder="Hotel Name"
            value={this.state.filterBy}
            onChange={this.handleTextChange}
          />
          <Button
            bsStyle="primary"
            className="button-size"
          >
            Search
          </Button>
        </div>
      </div>
    );
  }

}
