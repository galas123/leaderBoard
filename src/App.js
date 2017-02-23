import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="board">
        <h2 className="board__name">Leaderboard </h2>
        <table className="board__table">
          <tr className="board__captures">
            <td></td>
          </tr>
        </table>
      </div>
    )
  };
}

export default App;
