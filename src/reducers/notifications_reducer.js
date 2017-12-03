import { ADD_TOAST, REMOVE_TOAST, ADD_LOADING, REMOVE_LOADING, TOGGLE_ALERT, TOGGLE_LOCK} from "../actions/notifications";

export default function toasts(state= {}, action) {


  switch (action.type) {

    case ADD_TOAST:
   
      return  {...state, message: action.message, status: action.status}

    case REMOVE_TOAST:

      return (state={});

    case ADD_LOADING:

      return {...state, loading: action.payload};

     case TOGGLE_LOCK:

        return {...state, showingLock: action.payload};

    case TOGGLE_ALERT:

        return {...state,  showingAlert: action.payload};
         
    case REMOVE_LOADING:

        return (state={});


    default:
      return state;
  }
}
