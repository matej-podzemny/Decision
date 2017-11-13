import { INCREMENT, DECREMENT } from './types';

export function onIncrement(credits) {
  const cr = credits + 1;
  return {
    type: INCREMENT,
    payload: cr
  }
}

export function onDecrement(credits) {
  const cr = credits - 1;
  return {
    type: DECREMENT,
    payload: cr
  }
}
