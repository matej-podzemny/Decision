import { DO_IT, NOT_IT } from './types';

export function doitfunc() {
  return {
    type: DO_IT,
  }
}

export function notitfunc() {
  return {
    type: NOT_IT,
  }
}
