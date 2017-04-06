import {LOAD_DATA, ERROR_DATA} from '../constants'

export const loadRecent = () => {
  return (dispatch) => {
    fetchCampers(dispatch, 'https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }
}

export const loadAll = () => {
  return (dispatch) => {
    fetchCampers(dispatch, 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime');

  }
}

export const fetchCampers =(dispatch, url) => {
       fetch(url)
         .then(response=>response.json())
         .then(
           list => dispatch(fetchSucsessful(list)),
           error => dispatch(fetchFall(error))
         )
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