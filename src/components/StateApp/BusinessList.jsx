import React, { Component } from 'react';
import PropTypes from 'prop-types';
import request from 'superagent';
import BusinessPortal from '../BusinessPortal/BusinessPortal';
import BusinessListItem from './BusinessListItem';

export default class BusinessList extends Component {

  static propTypes = {
    businessesArray: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {
      businessesArray: null,
      // displayList: false,
      displayEin: null,
      displayPortal: false,
    };
  }

  // get results from server
  // componentDidMount() {
  //
  // }

  /* get single biz data  */
  getData = (event) => {
    event.preventDefault();
     request
      .post(`https://hungry-mouse-68.localtunnel.me/`)
      .send({ })
      // .set('Authorization', `Token token=${this.state.token}`)
      .end((err, res) =>{
        if (err) {
          console.log(err);
          this.setState({ error: res.body.error });
        } else {
          console.log(res);
          window.location.href = "/dashboard";
        }
      })
  }

  setBusiness = (ein) => {
    this.setState({
      displayEin: ein,
      displayPortal: true,
    })
  }

  closePortal = () => {
    this.setState({ displayPortal: false })
  }

  // generate list with results
  generateBusinessList() {
    let businessList = []
    if (this.props.businessesArray !== null && this.props.businessesArray !== undefined) {
      businessList = this.props.businessesArray.map((infoObject) => {
        return <BusinessListItem
            key={infoObject.ein}
            name={infoObject.name}
            type={infoObject.type}
            ein={infoObject.ein}
            setBusiness={this.setBusiness} // display BusinessPortal
          />
      })
    } else {
      return businessList
    }
  }

  render() {
    return (
      <div
        // className="col justify-content-start"
      >
        <div className="spacer"></div>
        <div className="card" >
          <div className="row card-header" >
            <div className="col business-list-item">Currency</div>
            <div className="col business-list-item">Official Wallet Address</div>
            <div className="col business-list-item">Total</div>
          </div>
          <div className="list-group">

              { this.state.error &&
                <div className="list-group-item">
                  {this.state.error.toString()}
                </div>
              }
              { this.props.businessesArray &&
                this.generateBusinessList()
              }
              { this.props.loading &&
                <div className="list-group-item">
                  Loading...</div>
              }
              { this.state.displayPortal &&
                <BusinessPortal
                  ein={this.state.displayEin}
                  fromState={true}
                  close={this.closePortal}
                />
              }

          </div>
        </div>
      </div>
    );
  }
}
