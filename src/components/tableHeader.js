import React, {
  Component
} from 'react';
import cx from 'classnames';

class tableHeader extends Component {
  render() {
    const {numberCell, table}=this.props;
    const isO = table[numberCell] === SIDE_O;
    return (
      <div>
        {table[numberCell]}
      </div>
    );
  }