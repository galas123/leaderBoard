import {LOAD_DATA, ERROR_DATA} from '../constants'

export const loadData = () => {
  return function (dispatch) {
    fetchCampers()
      .then( list=>list.json())
      .then ((listJson)  => {
        console.log('list',listJson);
        dispatch(fetchSucsessful(listJson))},
      error => dispatch(fetchFall(error))
    )
  };
};

function fetchCampers() {
  return fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
}

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