import { combineReducers } from 'redux';
import decision from './DecisionReducers';
import counter from './CounterReducers';
import deck from './DeckReducers';

const rootReducer = combineReducers({
    decision: decision,
    counter: counter,
    deck: deck,
});

export default rootReducer
