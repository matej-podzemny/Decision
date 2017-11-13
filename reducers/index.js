import { combineReducers } from 'redux';
import decision from './decision';
import counter from './CounterReducers';

const rootReducer = combineReducers({
    decision: decision,
    counter: counter
});

export default rootReducer
