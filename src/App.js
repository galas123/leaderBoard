import React, {Component} from 'react';
import './App.css';
import TableHeader from './components/tableHeader';
import Row from './components/content';
import {loadData} from './AC/loadData';
import {connect} from 'react-redux';

class App extends Component {

  componentWillMount(){
    loadData();
  }

  render() {
    const {campers}=this.props;
    const listLeaders = campers.map((camper, index) =>
      <Row index={index} camper={camper}/>
    );
    return (
      <div className="board">
        <h2 className="board__name">Leaderboard </h2>
        <table className="board__table">
          <TableHeader/>
          {listLeaders}
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

export default connect(mapStateToProps, null)(App);