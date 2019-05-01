import { fetchContestList } from 'lib/contests';

/**
 * This converts the API data to working attributes.
 */
const transformContestData = (contests) => {
  if (contests.length > 0) {
    return contests.map((contest) => {
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

const addContests = (contests) => ({
  type: 'ADD_CONTESTS',
  contests
});

export const getContests = () => {
  return async (dispatch) => {
    const results = await fetchContestList();

    if (results && results.success) {
      // Transform the data to workable data.
      const data = transformContestData(results.list);
      
      dispatch(addContests(data));
    }
  }
}