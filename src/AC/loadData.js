import {LOAD_DATA, ERROR_DATA} from '../constants'

export const loadData = url => {
  return dispatch => {
    fetch(url)
      .then(response=>response.json())
      .then(
        list => dispatch(fetchSucsessful(list)),
        error => dispatch(fetchFall(error))
      )
  };
};

export const fetchSucsessful = (list) =>
  ({
    type   : LOAD_DATA,
    payload: list
  });

export const fetchFall = (error) =>
  ({
    type   : ERROR_DATA,
    payload: error
  });