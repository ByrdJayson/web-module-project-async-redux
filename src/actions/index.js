import axios from 'axios';

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export const getProfile = () => (dispatch) => {
    dispatch({type: LOADING});
    axios.get('https://playerdb.co/api/player/steam/Ruxxxin')
    .then(res => {
        console.log(res);
        dispatch({type:SUCCESS, payload: res.data.data});
        
    })
    .catch(err => {
        dispatch({type: ERROR, payload: { err }})
    })
}