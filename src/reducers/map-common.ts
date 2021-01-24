import * as mapContants from '../constants/map-common';

import { IMapCommonType, mapCommonState } from '../actions/map-common';

export function reducer(state: any, action: any): void;
export function reducer(state = mapCommonState, action: any) {
  const newState = state as IMapCommonType;
  switch (action.type) {
    case mapContants.MAP_SET_MEASURE: {
      if (action.value) {
        return {
          ...newState,
          drawBuffer: action.value,
          measureList: [...newState.measureList, action.value]
        };
      } else {
        return {
          ...newState,
          measureList: []
        };
      }
    }
  }
  return newState;
}