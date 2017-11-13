import { NOT_IT, DO_IT } from '../actions/types';

const INITIAL_STATE = {
  doit: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DO_IT:
      return { ...state, doit: true };
    case NOT_IT:
      return { ...state, doit: false };
    default:
      return state;
  }
};
