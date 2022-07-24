import React, {useState} from 'react'
import {moveClockwise, moveCounterClockwise} from '../state/action-creators'
import { connect } from 'react-redux';

export function Wheel(props) {
  
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={props.position === 0 ? "cog active" : "cog"} style={{ "--i": 0 }}>{props.position === 0 ? "B": ""}</div>
        <div className={props.position === 1 ? "cog active" : "cog"} style={{ "--i": 1 }}>{props.position === 1 ? "B": ""}</div>
        <div className={props.position === 2 ? "cog active" : "cog"} style={{ "--i": 2 }}>{props.position === 2 ? "B": ""}</div>
        <div className={props.position === 3 ? "cog active" : "cog"} style={{ "--i": 3 }}>{props.position === 3 ? "B": ""}</div>
        <div className={props.position === 4 ? "cog active" : "cog"} style={{ "--i": 4 }}>{props.position === 4 ? "B": ""}</div>
        <div className={props.position === 5 ? "cog active" : "cog"} style={{ "--i": 5 }}>{props.position === 5 ? "B": ""}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={props.moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={props.moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (stateFromStore) => {
  return{
    position: stateFromStore.wheel.position
  }
}
export default connect(mapStateToProps, { moveClockwise, moveCounterClockwise })(Wheel);
