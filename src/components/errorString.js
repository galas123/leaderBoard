import React, {
  Component
} from 'react';

export default class errorString extends Component {
  render() {
    return (
      <tr>
        <td className="cell error-row" colSpan="4">
          No data loaded!
          </td>
      </tr>
    );
  }
}
