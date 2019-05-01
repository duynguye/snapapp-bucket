import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';
import moment from 'moment';

// Custom imports and styles
import { SectionHeader } from 'components/modules';
import { Cell, TableRow } from 'components/collections';
import { getContests } from 'store/contests/contests.actions';

// Mock data
import { filters } from 'lib/mocks/filters';

const ContestTableHeader = () => (
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
)

class Contests extends Component {
  componentDidMount = () => {
    this.props.getContests();
  }

  generateContests = () => {
    const { contests } = this.props;
    
    return contests.map(contest => (
      <TableRow key={contest.id}>
        <Cell><Link to={`/contests/${contest.id}`}>ORCA-{contest.id}</Link></Cell>
        <Cell><Link to={`/contests/${contest.id}`}>{contest.title}</Link></Cell>
        <Cell>{contest.station}</Cell>
        <Cell>{moment(new Date(contest.endDate)).format('MM-DD-YYYY')}</Cell>
        <Cell>{contest.type}</Cell>
        <Cell>{contest.creator}</Cell>
        <Cell>{contest.entries}</Cell>
      </TableRow>
    ));
  }

  generateTabs = () => {
    return [{
      active: true,
      title: 'All',
      count: this.props.contests.length,
      callback: () => {}
    }];
  }

  render () {
    const tabs = this.generateTabs();

    return (
      <DocumentTitle title={'Contestr Dashboard - Orca - Compulse Integrated Marketing'}>
        <div style={{ overflowY: 'scroll', paddingBottom: 50 }}>
          <SectionHeader
            filters={filters}
            title={'Contests'}
            tabs={tabs}
          />

          <div style={{ display: 'grid', width: '100%' }}>
            <ContestTableHeader />

            <div>
              { this.generateContests() }
            </div>
          </div>

          { this.props.contests.length <= 0 &&
            <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0', width: '100%' }}>
              <Spinner color='#5c7aff' style={{ height: 45, width: 45 }} name='folding-cube' fadeIn='half' />
            </div>
          }
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = ({ contests }) => ({
  contests
});

export default connect(mapStateToProps, { getContests })(Contests);