import * as constants from "../../constants/map-common";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

/**
 * @param value 添加描绘图形/null全清
 */
export function setDraw(value: any) {
	return { type: constants.MAP_SET_MEASURE, value };
}

/**
 * 勾选收藏组
 */
export function collectCheckedAll() {
	return (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => any) => {
	};
}
