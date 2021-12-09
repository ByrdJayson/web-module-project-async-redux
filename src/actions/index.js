import axios from 'axios';
import { connect } from 'react-redux';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export const getProfile = (props) => (dispatch) => {
    dispatch({type: LOADING});
    axios.get(`https://playerdb.co/api/player/${props.state.platform}/${props.state.username}`)
    .then(res => {
        console.log(res);
        dispatch({type:SUCCESS, payload: res});
        
    })
    .catch(err => {
        dispatch({type: ERROR, payload: { err }})
    })
}


const mapStateToProps = (state) => {
    return ({
      state
    })
  }
  
  export default connect(mapStateToProps)(getProfile);