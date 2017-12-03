import {FETCH_PRODUCTS, ORDER_PRODUCTS, NEXT_PAGE, PREV_PAGE, ADD_TO_FAVOURITES, GET_FAVOURITES, REFRESH_PRODUCTS} from '../actions/products';


export default function(state =  {favourites:[] }, action){

  switch(action.type){
    case FETCH_PRODUCTS:
        return { ...state, products: action.payload.data, idx:0 }

    case ORDER_PRODUCTS:
        return { ...state, products: action.payload, criteria: action.criteria  };

    case NEXT_PAGE:
        return {...state, products: action.products, idx:action.idx}

    case PREV_PAGE:
        return {...state, product: action.products, idx:action.idx}

    case REFRESH_PRODUCTS:
        return {...state, reload: action.payload}

    case GET_FAVOURITES:
        return {...state, favourites: action.payload }

    case ADD_TO_FAVOURITES:
        return {...state, favourites: action.payload }

    default:
      return state;
  }


  return state;
}
