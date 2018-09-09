import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
  { value: 'c-corp', label: 'C corp' },
  { value: 's-corp', label: 'S corp' },
  { value: 'llc', label: 'LLC' },
  { value: 'series-llc', label: 'Series LLC' },
  { value: '501c3', label: '501c3' }
];

export default class CompanyTypeList extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
    };
  }

  handleChange = (selectedOption) => {
    if (selectedOption !== this.state.selectedOption) {
      this.setState({ selectedOption });
      this.props.sendCompanyType(selectedOption);
      console.log(`Option selected:`, selectedOption);
    }
  }

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="company-type">
        <div className="header">CompanyTypeList</div>
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }

}
