export const ADD_TOAST = "ADD_TOAST";
export const REMOVE_TOAST = "REMOVE_TOAST";
export const ADD_LOADING = "ADD_LOADING";
export const REMOVE_LOADING = "REMOVE_LOADING";

export function launchToast(message) {
  return dispatch => {
    dispatch(addToast(message))
    setTimeout(()=>{
      dispatch(removeToast(message))
    }, 5000)
  }
}


export function addToast(message) {

  return {
    type: ADD_TOAST,
    payload: message
  };

}


export function removeToast(message) {

  return {
    type: REMOVE_TOAST

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
