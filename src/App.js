import React, {Component} from 'react';
import {connect} from 'react-redux';

import TableHeader from './components/tableHeader';
import Row from './components/content';
import ErrorString from './components/errorString';

import {loadRecent} from './AC/loadData';

import './App.css';

class App extends Component {

  componentWillMount(){
    const {loadRecent}=this.props;
    loadRecent();
  }

  render() {
    const {campers, isError}=this.props;
    const listLeaders = campers.map((camper, index) =>
      <Row index={index} camper={camper} key={camper.username}/>
    );
    const contentTable=isError?<ErrorString/>:listLeaders;
    return (
      <div className="board">
        <h2 className="board__name">Leaderboard </h2>
        <table className="board__table">
          <TableHeader/>
          <tbody>
          {contentTable}
          </tbody>
        </table>
      </div>
    )
  };
}

const mapStateToProps = state=> {
  console.log(state, state.board);
  return {
    campers: state.board.get('campers'),
    isError: state.board.get('isError')
  }
};

export default connect(mapStateToProps, {loadRecent})(App);