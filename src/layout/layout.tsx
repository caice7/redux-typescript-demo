import React from "react";

import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { setDraw } from "../actions/map-common"

interface Iprops {
  actions: any,
  measureList: any[],
}

const VSplitLayout = (props: Iprops) => {
  return <div onClick={() => props.actions.setDraw("test")}>
    {props.measureList.map((m: any, k: number) => <div key={k}>{m}</div>)}
  </div>
    ;

}

const mapStateToProps = (proj: any) => {
  return {
    measureList: proj.mapCommon.measureList,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: bindActionCreators({ setDraw }, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VSplitLayout);