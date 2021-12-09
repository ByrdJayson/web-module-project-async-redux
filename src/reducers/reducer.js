import {ERROR, SUCCESS, LOADING} from '../actions';

const initialState = {
    loading: false,
    error: '',
    username: 'ruxxxin',
    platform: 'steam',
    info: {}
    
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

    case 'LOADING':
      return { ...state,
        loading: true
    }

    case 'ERROR':
        return {...state,
        loading:false,
        error: action.payload
        }

    case 'SUCCESS':
        return {...state,
        loading: false,
        info: action.payload,
    }

    default:
        return state
    }
}

