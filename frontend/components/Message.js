import React from 'react' 
import {connect} from 'react-redux';

export function Message(props) {
  console.log(props.message)
  return <div id="message">{props.message}</div>
}

const mapStateToProps = (stateFromStore) => {
  return{
    message: stateFromStore.infoMessage.message
  }
}
export default connect(mapStateToProps, null)(Message);
