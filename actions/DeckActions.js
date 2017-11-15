import { COMPLETED } from './types';

export function showDeck(bool) {
    return {
      type: COMPLETED,
      payload: bool,
    }
}
