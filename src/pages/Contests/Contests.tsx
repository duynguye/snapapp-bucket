import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

// Custom imports and styles
import { SectionHeader } from '../../components/modules';
import { Cell, TableRow } from '../../components/collections';
import { fetchContestList } from '../../lib/contests';

// Mock data
import { filters } from '../../lib/mocks/filters';
import { tabs } from '../../lib/mocks/tabs';
import { contests } from '../../lib/mocks/contests';

class Contests extends Component {
  componentDidMount = () => {
    fetchContestList().then(results => console.log(results));
  }

  generateContests = () => {
    
  }

  render () {
    const renderedContests = contests.map(contest => (
      <TableRow key={contest._id}>
        <Cell>{contest._id}</Cell>
        <Cell><Link to={`/contests/${contest._id}`}>{contest.title}</Link></Cell>
        <Cell>{contest.station}</Cell>
        <Cell>{moment(new Date(contest.draw)).format('MM-DD-YYYY')}</Cell>
        <Cell>{contest.type}</Cell>
        <Cell>{contest.assignee}</Cell>
        <Cell>{contest.entries}</Cell>
      </TableRow>
    ));

    return (
      <DocumentTitle title={'Contestr Dashboard - Orca - Compulse Integrated Marketing'}>
        <div style={{ overflowY: 'scroll', paddingBottom: 50 }}>
          <SectionHeader
            filters={filters}
            title={'Contests'}
            tabs={tabs}
          />

          <div style={{ display: 'grid', width: '100%' }}>
            <div>
              <TableRow>
                <Cell header>Key</Cell>
                <Cell header>Title</Cell>
                <Cell header>Station</Cell>
                <Cell header>Draw Date</Cell>
                <Cell header>Request Type</Cell>
                <Cell header>Assignee</Cell>
                <Cell header>Entries</Cell>
              </TableRow>
            </div>

            <div>
              
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default Contests;