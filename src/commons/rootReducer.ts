import { combineReducers } from "redux";
import { reducer as mapCommonReducer } from "../reducers/map-common";

const reducerMap = {
  mapCommon: mapCommonReducer,
};

export default combineReducers(reducerMap);
