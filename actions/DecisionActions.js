import { DO_IT, NOT_IT } from './types';

export function doOrDoNot(points) {

    return {
      type: DO_IT,
      payload: points,
    }
  }
