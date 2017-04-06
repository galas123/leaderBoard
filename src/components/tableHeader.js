import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loadRecent, loadAll} from '../AC/loadData';

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
    const {loadRecent}=this.props;
    ev.preventDefault();
    loadRecent();
  }

  onSortByAllPoints = (ev) => {
    const {loadAll}=this.props;
    ev.preventDefault();
    loadAll();
  }

}

export default connect(null, {loadRecent, loadAll})(tableHeader);