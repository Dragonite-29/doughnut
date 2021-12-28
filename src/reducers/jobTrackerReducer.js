/**
 * ************************************
 *
 * @module  jobTrackerReducer
 * @author
 * @date
 * @description reducer for job tracker data
 *
 * ************************************
 */

import JobTracker from '../Components/JobTracker';
import * as types from '../constants/actionTypes';

const initialState = {
  companyName: [],
  jobPosting: [],
  role: [],
  dateSubmitted: [],
  appStatus: [],
  notes: [],
};
 
const jobReducer = (state = initialState, action) => {
  let marketList;
 
  switch (action.type) {
    case types.ADD_ROW: 
      // maybe the point of this is resetting new location to an empty string after creating a new market? 
      // or preventing user from adding a market without a location?
      return {
        ...state,
        newLocation: action.payload
      };
  }

//     case types.UPDATE_COMPANY_NAME:
//       // iterate through marketList
//       for (let i = 0; i < state.companyName.length; i += 1) {
//         // for each object, check if it has a location key with vale equal to state.newLocation
//         if (state.newLocation === state.marketList[i].location) {
//           // if so, return deconstructed state, and new location set to empty string
//           return {
//             ...state, // previous state
//             newLocation: '',
//           };
//         }
//       }
 
//       // increment lastMarketId and totalMarkets counters
//       state.lastMarketId += 1;
//       state.totalMarkets += 1;
//       // create the new market object from provided data
//       // eslint-disable-next-line no-case-declarations
//       const newMarket = {
//         marketId: state.lastMarketId, 
//         location: state.newLocation,
//         cards: 0,
//         percentOfTotal: 0,
//       };
 
//       // push the new market onto a copy of the market list
//       marketList = state.marketList.slice();
//       marketList.push(newMarket);
 
//       // return updated state
//       return {
//         ...state, // previous state
//         marketList, // entire market array with new market pushed in 
//         lastMarketId: state.lastMarketId,
//         totalMarkets: state.totalMarkets,
//         newLocation: '',
//       };
 
//     case types.SET_NEW_LOCATION: 
//       // maybe the point of this is resetting new location to an empty string after creating a new market? 
//       // or preventing user from adding a market without a location?
//       return {
//         ...state,
//         newLocation: action.payload
//       };
 
//     case types.ADD_CARD:
 
//       state.totalCards += 1;
 
//       for (let i = 0; i < state.marketList.length; i += 1) {
//         if (action.payload === state.marketList[i].marketId) {
//           state.marketList[i].cards += 1;
//         }
//         state.marketList[i].percentOfTotal = Math.floor(state.marketList[i].cards / state.totalCards * 100); 
//       }
       
//       return {
//         ...state,
//         totalCards: state.totalCards,
//         marketList: [...state.marketList] //explicitly return our updates to state
//       };
 
//     case types.DELETE_CARD: 
//       // if (state.totalCards !== 0) 
//       //need to make a conditional to insure we don't go into negative numbers when deleting cards
//       for (let i = 0; i < state.marketList.length; i += 1) {
//         if (action.payload === state.marketList[i].marketId) {
//           if (state.marketList[i].cards === 0) break;
//           state.marketList[i].cards -= 1;
//           state.totalCards -= 1;
//         }
//         state.marketList[i].percentOfTotal = Math.floor(state.marketList[i].cards / state.totalCards * 100); 
//       }
//       return {
//         ...state,
//         totalCards: state.totalCards,
//         marketList: [...state.marketList]
//       };
 
//     default: {
//       return state;
//     }
  // }
};
 
export default jobReducer;