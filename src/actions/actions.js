/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes';
import axios from 'axios';

export const getJobs = (jobs) => ({
  type: types.GET_JOBS,
  payload: jobs,
});

export const jobDeleted = () => ({
  type: types.DELETE_JOB,
});

// export const loadJobs = () => {
//   return function (dispatch) {
//     fetch('/getJobs')
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(getJobs(data.data));
//       })
//       .catch(error => console.log('error in getJobs fetch request',error));
//   };
// };

export const loadJobs = () => {
  return function(dispatch) {
    axios
      .get('/getJobs')
      .then((response) => {
        dispatch(getJobs(response.data));
      })
      .catch(error => console.log('error in getJobs axios request',error));
  };
};

export const deleteJob = (id) => {
  return function(dispatch) {
    axios
      .delete(`/delJob/${id}`)
      .then((response) => {
        dispatch(jobDeleted());
        dispatch(loadJobs());
      })
      .catch(error => console.log('error in deleteJob axios request',error));
  };
};