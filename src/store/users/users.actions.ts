import {
  SET_AUTH
} from './users.types';

export function setAuthState (newStatus: boolean) {
  return {
    type: SET_AUTH,
    newStatus
  };
}
