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

export const addRowActionCreator = marketId => ({
  type: types.ADD_ROW,
  payload: marketId,
});

// export const updateCompanyNameCreator