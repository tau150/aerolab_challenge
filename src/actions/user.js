
import axios from 'axios';
import {launchToast} from './notifications';


export const FETCH_USER = 'FETCH_USER'
export const REDEEM_PRODUCT = 'REDEEM_PRODUCT'


const ROOT_URL_REDEEM = 'https://cors-anywhere.herokuapp.com/https://aerolab-challenge.now.sh/redeem'
const ROOT_URL_USER = 'https://cors-anywhere.herokuapp.com/https://aerolab-challenge.now.sh/user/'

const HEADERS = {
  'Content-Type': 'application/json',
  'Accept':'application/json',
  'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjOWViMWU0OTYwMDAwNjBkMDBhNmYiLCJpYXQiOjE1MTA3NzY0OTd9.P88Ulh1oCwbmO6qgjIEihAr3Lp2ky__lD2fGwdQIyVI'
}


export function reddemProductAndUpdateUser(product_id) {
  return dispatch => {
    dispatch(redeemProduct(product_id))

    .then(
      response =>  {
        dispatch(fetchUser())

      }
    )
    .then(
      response => {

        dispatch( launchToast('You ve redeem the product successfully'))
      }
    )
  }
}


export function fetchUser(){

    const request = axios.get( `${ROOT_URL_USER}me`, { headers: HEADERS});
    return{
      type: FETCH_USER,
      payload: request
    }
}


export function redeemProduct(product_id){


  const request = axios({
  method: 'post',
  url: ROOT_URL_REDEEM,
  headers:HEADERS,
  data: {
    productId: product_id
  }
});

    return{
      type: REDEEM_PRODUCT,
      payload: request
    }
}
