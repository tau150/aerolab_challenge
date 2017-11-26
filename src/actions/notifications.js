export const ADD_TOAST = "ADD_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";
export const ADD_LOADING = "ADD_LOADING";
export const REMOVE_LOADING = "REMOVE_LOADING";
export const TOGGLE_ALERT = "TOGGLE_ALERT";



export function launchToast(message, status) {
  return dispatch => {
    dispatch(addToast(message, status))
    setTimeout(()=>{
      dispatch(removeToast())
    }, 8000)
  }
}


export function addToast(message, status) {

  return {
    type: ADD_TOAST,
    message, 
    status
  };

}


export function removeToast() {

  return {
    type: REMOVE_TOAST

  };
}


export function toggleAlert(showing) {

    return {
      type: TOGGLE_ALERT,
       payload: !showing

    };
  
  }


export function addLoading() {

  return {
    type: ADD_LOADING,
    payload: true
  };
}

export function removeLoading() {

  return {
    type: REMOVE_LOADING,

  };
}
