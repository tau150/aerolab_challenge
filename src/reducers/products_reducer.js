import {FETCH_PRODUCTS, ORDER_PRODUCTS, NEXT_PAGE, PREV_PAGE} from '../actions/products';


export default function(state = [], action){

  switch(action.type){

    case FETCH_PRODUCTS:

        return { ...state, products: action.payload.data, idx:0}

    case ORDER_PRODUCTS:

        return { ...state, products: action.payload };

    case NEXT_PAGE:
        return {...state, products: action.products, idx:action.idx}

    case PREV_PAGE:
        return {...state, product: action.products, idx:action.idx}

    default:
      return state;
  }

  return state;
}
