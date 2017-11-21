import { combineReducers } from 'redux';
import products  from './products_reducer'
import user  from './user_reducer'
import notifications  from './notifications_reducer'

const reducers = combineReducers({
  products,
  user,
  notifications
});

export default reducers;
