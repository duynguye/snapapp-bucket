import {
  ADD_CONTESTS
} from './contests.types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTESTS:
      return [...action.contests];

    default:
      return [...state];
  }
}