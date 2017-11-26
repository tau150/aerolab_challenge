
import axios from 'axios';
import { addLoading, removeLoading, launchToast } from './notifications'
import _ from 'lodash';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
export const ORDER_PRODUCTS = 'ORDER_PRODUCTS'
export const NEXT_PAGE = 'NEXT_PAGE'
export const PREV_PAGE = 'PREV_PAGE'

const ROOT_URL = 'https://cors-anywhere.herokuapp.com/https://aerolab-challenge.now.sh/products'

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept':'application/json',
  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjOWViMWU0OTYwMDAwNjBkMDBhNmYiLCJpYXQiOjE1MTA3NzY0OTd9.P88Ulh1oCwbmO6qgjIEihAr3Lp2ky__lD2fGwdQIyVI'
}


export function fetchProductsWithLoading(){
  return dispatch => {
    dispatch(addLoading());
    dispatch(fetchProducts())
    .then(
        response => {
          dispatch(removeLoading())
        }   
    )
    .catch(
      response =>{
        dispatch( launchToast('There was a problem, try later', 'error'))
      }
    )
  }
}


export function nextPage(products, idx, chunkedProducts){

  let max_idx = chunkedProducts.length -1;

  if( idx + 1 >  max_idx){
    return{
      type: NEXT_PAGE,
      products,
      idx
    }
  }
  idx +=1;

  return{
    type: NEXT_PAGE,
    products,
    idx
  }

}


export function prevPage(products, idx, chunkedProducts){

  if( idx - 1 < 0){
    return{
      type: PREV_PAGE,
      products,
      idx
    }
  }

  idx -=1;
  return{
    type: PREV_PAGE,
    products,
    idx
  }

}


export function fetchProducts(){

    const request = axios.get(ROOT_URL, { headers: HEADERS});

    return{
      type: FETCH_PRODUCTS,
      payload: request
    }
}



export function orderProducts(products, criteria, order){
    let productsMerged = [].concat.apply([], products);
    let  sortedList =  _.orderBy(productsMerged, criteria , order);

    return{
      type: ORDER_PRODUCTS,
      payload: sortedList
    }
}
