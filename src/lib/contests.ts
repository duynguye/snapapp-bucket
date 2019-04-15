import axios from 'axios';

// Custom Imports
import { currentSession } from './auth';

const ENDPOINT = 'https://contestr.compulse-staging.com/api';

/**
 * Contest API
 */
export type Station = string;

/**
 * This is the schema for which the contests data will be converted to.
 */
export interface IContest {
  id: string;
  title: string;
  station: Station;
  requestType: string;
  assignedUsers: {},
  entries: number;
}

/**
 * 
 */
export async function fetchContestList(): Promise<any> {
  const result = await currentSession();
  const config = {
    headers: {
      'Authorization': `Bearer ${result.session.accessToken.jwtToken}`
    }
  };

  try {
    const results = await axios.get(`${ENDPOINT}/contests/list`, config);
    
    return results.data;
  } catch (error) {
    console.log(error);
  }

  return;
}

/**
 * Fetches a single contest from the API and returns an IContest object.
 * 
 * @param id The unique identifier of the contest that needs to be fetched.
 */
export async function fetchContest(id: number): Promise<any> {
  const result = await currentSession();
  const config = {
    headers: {
      'Authorization': `Bearer ${result.session.accessToken.jwtToken}`
    }
  };

  try {
    const results = await axios.get(`${ENDPOINT}/contests/${id}`, config);

    return results.data;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Submit new contest
 */
export async function createNewContest(data: any): Promise<any> {
  const result = await currentSession();
  const config = {
    headers: {
      'Authorization': `Bearer ${result.session.accessToken.jwtToken}`
    }
  };

  try {
    const results = await axios.post(`${ENDPOINT}/contests`, data, config);

    return results;
  } catch (error) {
    console.log(error);
  }
}
