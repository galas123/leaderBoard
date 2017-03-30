import React, {Component} from 'react';
import './App.css';
import TableHeader from './components/tableHeader';
import Row from './components/content';
import {loadData} from './AC/loadData';
import {connect} from 'react-redux';

class App extends Component {

  componentWillMount(){
    const {loadData}=this.props;
    loadData();
  }

  render() {
    const {campers}=this.props;
    console.log(campers);
    const listLeaders = campers.map((camper, index) =>
      <Row index={index} camper={camper} key={camper.username}/>
    );
    return (
      <div className="board">
        <h2 className="board__name">Leaderboard </h2>
        <table className="board__table">
          <TableHeader/>
          <tbody>
          {listLeaders}
          </tbody>
        </table>
      </div>
    )
  };
}

const mapStateToProps = state=>{
  console.log(state, state.board);
  return{
    campers           : state.board.get('campers')
  }};

export default connect(mapStateToProps, {loadData})(App);