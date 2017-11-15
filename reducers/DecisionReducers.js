import { NOT_IT, DO_IT } from '../actions/types';

const INITIAL_STATE = {
  thumbsUp: true,
  text: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DO_IT:
      return { ...state, thumbsUp: true, text: action.payload};
    case NOT_IT:
      return { ...state, thumbsUp: false, text: action.payload };
    default:
      return state;
  }
};
