import {
  ADD_CONTESTS,
  ContestListState
} from './contests.types';

const initialState: ContestListState = [];

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_CONTESTS:
      return [...action.contests];

    default:
      return [...state];
  }
}