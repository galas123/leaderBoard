import React, {
  Component
} from 'react';

export default class tableHeader extends Component {
  render() {
    return (
      <tr className="headers-raw">
        <th className="header">#</th>
        <th className="header"> Camper name</th>
        <th className="header">Points in past 30 days</th>
        <th className="header">All time points</th>
      </tr>
    );
  }
}