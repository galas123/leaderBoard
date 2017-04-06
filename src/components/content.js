import React, {
  Component
} from 'react';

export default class content extends Component {
  render() {
    const {camper, index}=this.props;
    const {username, recent, alltime, img}=camper;
    const profileUrl=`https://www.freecodecamp.com/${username}`;

    return (
      <tr>
        <td className="cell">{index + 1}</td>
        <td className="cell">
          <div className="camper-info">
            <img className="camper-avatar" src={img}/>
            <a href={profileUrl} target="_blank">
              {username}
            </a>
          </div>
        </td>
        <td className="cell">
          {recent}
        </td>
        <td className="cell">
          {alltime}
        </td>
      </tr>
    );
  }
}

