import React, {
  Component
} from 'react';

export default class content extends Component {
  render() {
    const {camper, index}=this.props;
    const camperName=camper.username;
    const recentPoints=camper.recent;
    const allPoints=camper.alltime;
    const avatar=camper.img;
    const avatarUrl=`https://www.freecodecamp.com/${camperName}`;

    return (
      <tr>
        <td className="cell">{index + 1}</td>
        <td className="cell">
          <div className="camper-info">
            <img className="camper-avatar" src={avatar}/>
            <a href={avatarUrl} target="_blank">
              {camperName}
            </a>
          </div>
        </td>
        <td className="cell">
          {recentPoints}
        </td>
        <td className="cell">
          {allPoints}
        </td>
      </tr>
    );
  }
}

