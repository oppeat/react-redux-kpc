import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import records from './records'
import selected from './selected'
export default combineReducers({
  records,
  selected,
  form: formReducer
})