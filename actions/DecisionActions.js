import { DO_IT, NOT_IT } from './types';

export function doItAction(points) {
  return {
    type: DO_IT,
    payload: points,
  }
}

export function notItAction(points) {
  return {
    type: NOT_IT,
    payload: points,
  }
}
