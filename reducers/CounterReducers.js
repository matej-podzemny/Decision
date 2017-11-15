import { INCREMENT, DECREMENT } from '../actions/types';

const INITIAL_STATE = {
  points: 0,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
    console.log("INCREMENT is called");
      return {...state, points: action.payload };
    case DECREMENT:
      console.log("DECREMENT is called");
      return {...state, points: action.payload };
    default:
      return state;
  }
};
