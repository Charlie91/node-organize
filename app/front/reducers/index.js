import { combineReducers } from 'redux';
import notes from './notes';
import visibilityFilter from './filter';

export default combineReducers({
  notes,
  visibilityFilter
})
