import {
  LOAD_DATA
} from '../constants';

import {Map, List}  from 'immutable';

const defaultState = Map({
  campers: List([])
});

export default (board = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOAD_DATA:
      return board.setIn(['campers'],getCampersFromApiAsync());
      };
  return board;
}

function getCampersFromApiAsync() {
  return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
}

