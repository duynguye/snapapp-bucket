import { fetchContestList } from '../../lib/contests';
import {
  ContestListState 
} from './contests.types';

/**
 * This converts the API data to working attributes.
 */
const transformContestData = (contests: any) => {
  if (contests.length > 0) {
    return contests.map((contest: any) => {
      return {
        id:             contest.ticket_id,
        issueId:        contest.external_ticket_number,
        entries:        contest.total_entries ? contest.total_entries : 0,
        title:          contest.ticket_name,
        type:           contest.contest_type,
        startDate:      contest.contest_start_date,
        endDate:        contest.contest_end_date,
        drawDate:       contest.contest_draw_time,
        station:        contest.ticket_station,
        submissionURL:  contest.contest_submission_url,
        creator:        `${contest.creator_first_name} ${contest.creator_last_name}`
      };
    });
  }
}

const addContests = (contests: ContestListState) => ({
  type: 'ADD_CONTESTS',
  contests
});

export const getContests = () => {
  return async (dispatch: any) => {
    const results = await fetchContestList();

    if (results && results.success) {
      // Transform the data to workable data.
      const data = transformContestData(results.list);
      
      dispatch(addContests(data));
    }
  }
}