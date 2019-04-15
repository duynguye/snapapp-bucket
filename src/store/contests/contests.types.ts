import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export const ADD_CONTESTS = 'ADD_CONTESTS';

export interface ContestEntry {
  id: number;
  issueId: number | string | undefined;
  entries: number;
  title: string;
  type: string;

  startDate: string;
  endDate: string;

  station: string;
  submissionURL: string;
  creator?: string;
}

export interface ContestListState extends Array<ContestEntry> {}