import {FETCH_USER, REDEEM_PRODUCT, GET_COINS} from '../actions/user';


export default function(state = [], action){

  switch(action.type){

    case FETCH_USER:
        return { ...state, LoggedUser: action.payload.data, points: action.payload.data.points }

    case REDEEM_PRODUCT:
        return {...state, redeemConfirmation: action.payload.data.message}

    case GET_COINS:

        console.log(action.payload.data['New Points'])
        return {...state, points: action.payload.data['New Points']}



    default:
      return state;
  }

  return state;
}
