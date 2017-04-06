import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loadData} from '../AC/loadData';

class tableHeader extends Component {
  render() {
    return (
      <tr className="headers-raw">
        <th className="header">#</th>
        <th className="header"> Camper name</th>
        <th className="header">
          <button className="sort-button" onClick={this.onSortByRecentPoints}>
            Points in past 30 days
        </button>
        </th>
        <th className="header">
        <button className="sort-button" onClick={this.onSortByAllPoints}>
        All time points
        </button>
        </th>
      </tr>
    );
  }

  onSortByRecentPoints = (ev) => {
    const {loadData}=this.props;
    ev.preventDefault();
    loadData('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  onSortByAllPoints = (ev) => {
    const {loadData}=this.props;
    ev.preventDefault();
    loadData('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

}

export default connect(null, {loadData})(tableHeader);