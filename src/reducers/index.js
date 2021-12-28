/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import jobTrackerReducer from './jobTrackerReducer';
 
 
// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  jobs: jobTrackerReducer,
});
 
// make the combined reducers available for import
export default reducers;
 
 