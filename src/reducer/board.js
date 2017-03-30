import {
  LOAD_DATA, ERROR_DATA
} from '../constants';

import {Map, List}  from 'immutable';

const defaultState = Map({
  campers: List([]),
  isError:false
});

export default (board = defaultState, action) => {
  const {type, payload} = action;
  switch (type) {
    
    case LOAD_DATA:
      return board.setIn(['campers'], payload);
    
    case ERROR_DATA:
      return board.setIn(['campers'], []).setIn(['isError'],true);
  };
  return board;
}

