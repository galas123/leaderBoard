import React, {
  Component
} from 'react';


export default class content extends Component {
  render() {
    const {camper, index}=this.props;
    const camperName=camper.username;
    const recentPoints=camper.recent;
    const allPoints=camper.alltime;
    

    return (
      <tr>
        <td className="cell">{index+1}</td>
        <td className="cell">{camperName}</td>
        <td className="cell">{recentPoints}</td>
        <td className="cell">{allPoints}</td>
      </tr>
    );
  }
}
