import { NOT_IT, DO_IT } from '../actions/types';

const INITIAL_STATE = {
  doit: null,
  points: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DO_IT:
      console.log("action payload be like: "+action.payload);
      return { ...state, doit: true, points: action.payload};
    case NOT_IT:
      return { ...state, doit: false };
    default:
      return state;
  }
};
