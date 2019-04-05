import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export interface ContestEntry {
  id: number;
  issueId: number;
  entries: number;
  title: string;
  type: string;

  startDate: string;
  endDate: string;

  station: string;
  submissionURL: string;
}

export interface ContestListState extends Array<ContestEntry> {}