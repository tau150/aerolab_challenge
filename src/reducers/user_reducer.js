import {FETCH_USER, REDEEM_PRODUCT} from '../actions/user';


export default function(state = [], action){

  switch(action.type){

    case FETCH_USER:
        return { ...state, LoggedUser: action.payload.data }

    case REDEEM_PRODUCT:
        return {...state, redeemConfirmation: action.payload.data.message}

    default:
      return state;
  }

  return state;
}
