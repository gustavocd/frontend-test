import { combineReducers } from 'redux';
import visibilityFilter from './filter';
import inbox from './inbox';

const reducers = combineReducers({
    inbox,
    visibilityFilter
});

export default reducers;