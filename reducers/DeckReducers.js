import { COMPLETED, UNCOMPLETED } from '../actions/types';

const INITIAL_STATE = {
  show: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COMPLETED:
      return { ...state, show: action.payload };
    default:
      return state;
  }
};
