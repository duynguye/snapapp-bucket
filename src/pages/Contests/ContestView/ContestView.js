import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Spinner from 'react-spinkit';
import { withRouter } from 'react-router';
import { Storage } from 'aws-amplify';
import moment from 'moment';

// Custom imports and styles.
import { fetchContest } from 'lib/contests';
import { DropdownInput, RichTextEditor } from 'components/forms';
import { Breadcrumbs, ContestEntries, SectionHeader, UserCard } from 'components/modules';
import { Aside, Body, CollapsableContainer, Content } from 'components/layout';
import { ProjectDetailsList } from 'components/collections';
import styles from './ContestView.module.scss';

/**
 * Tabs in the section header specific to the contest view page.
 */
export const filters = [{
  prefix: 'fal',
  icon: 'comment-alt-lines',
  callback: () => {},
  tooltip: 'Add new comment'
}, {
  prefix: 'fal',
  icon: 'mail-bulk',
  callback: () => {},
  tooltip: 'Get submission URL'
}, {
  prefix: 'fal',
  icon: 'users',
  callback: () => {},
  tooltip: 'Assign users'
}, {
  prefix: 'fal',
  icon: 'user-plus',
  callback: () => {},
  tooltip: 'Add new user'
}, {
  prefix: 'fal',
  icon: 'ellipsis-h',
  callback: () => {},
  tooltip: 'More options'
}];


/**
 * Main view of the contest.
 */
class ContestView extends Component {
  state = {
    data: {},
    loading: true,
    text: '',
    reload: false
  };

  static getDerivedStateFromProps(props, state) {
    const { match: { params: { id }}} = props;

    if (!isNaN(ParseInt(id)) && state && state.data && state.data.contest) {
      const { data: { contest: { ticket_id }}} = state;

      if (ticket_id && parseInt(id) !== parseInt(ticket_id)) {
        return {
          data: {},
          loading: true,
          text: '',
          reload: true
        }
      }
    }

    return null;
  }

  componentDidMount = () => {
    const { match: { params: { id }}} = this.props;

    Storage.list('test/').then(result => console.log(result)).catch(err => console.log(err));

    if (!isNaN(+id)) {
      this.getContest();
    }
  }

  componentDidUpdate = () => {
    const { match: { params: { id }}} = this.props;

    if (!isNaN(+id)) {
      if (this.state.reload) {
        setTimeout(() => {
          this.getContest();
        }, 3000);
      }
    }
  }

  getContest = () => {
    const { match: { params: { id }}} = this.props;

    fetchContest(+id).then(response => {
      this.setState({ loading: false, data: response, reload: false }, () => this.extractContestData());
    });
  }

  extractContestData = () => {
    const { data: { contest } } = this.state;

    const details = [
      { label: 'Contest Type', text: contest.contest_type }, 
      { label: 'Station', text: contest.ticket_station },
      { label: 'Submission URL', text: contest.contest_submission_url },
      { label: 'Start Date', text: moment(contest.contest_start_date).format('MM/DD/YYYY h:mm A') },
      { label: 'End Date', text: moment(contest.contest_end_date).format('MM/DD/YYYY h:mm A') }
    ];

    details.push({ label: 'Contest Time Zone', text: contest.contest_draw_timezone });
    details.push({ label: 'Ticket Created Date', text: moment(contest.ticket_created_date).format('MM/DD/YYYY h:mm A') });
    details.push({ label: 'Last Updated', text: moment(contest.latest_entry_time).format('MM/DD/YYYY h:mm A') });
    details.push({ label: 'Created By', text: `${contest.creator_first_name} ${contest.creator_last_name}` });

    return details;
  }

  handleButtonClick = () => {
    const { history } = this.props;

    history.push('/contests/add');
  }

  handleTextUpdates = (text) => {
    console.log(text);
    this.setState({ text });
  }

  render() {
    const { match } = this.props;
    const { data: { contest }, loading } = this.state;

    if (!isNaN(match.params.id)) {
      if (loading) {
        return (
          <DocumentTitle title={'Loading Contest... - Orca - Compulse Integrated Marketing'}>
            <div className={styles.loader}>         
              <Spinner color='#5c7aff' style={{ marginBottom: 50 }} name='pacman' />   
              <p>Loading</p>
            </div>
          </DocumentTitle>
        );
      } else {
        return (
          <DocumentTitle title={`${contest.ticket_name} - Orca - Compulse Integrated Marketing`}>
            <div style={{ overflow: 'scroll' }}>
              <Breadcrumbs id={match.params.id} />
              <SectionHeader 
                title={contest.ticket_name}
                className={styles.sectionHeader} 
                action={this.handleButtonClick}
                filters={filters}
              />

              <Body>
                <Content>
                  <CollapsableContainer title='Contest Details'>
                    <div style={{ display: 'flex' }}>
                      <ProjectDetailsList details={this.extractContestData()} />
                      <RichTextEditor
                        value={this.state.text}
                        onChange={this.handleTextUpdates}
                      />
                    </div>
                  </CollapsableContainer>

                  <CollapsableContainer title='Media Library'>
                  
                  </CollapsableContainer>
                </Content>

                <Aside>
                  <CollapsableContainer title='Total Entries'>
                    <ContestEntries count={contest.total_entries} lastUpdated={contest.latest_entry_time} />
                  </CollapsableContainer>

                  <CollapsableContainer title='Assignees'>
                    <DropdownInput />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                    <UserCard />
                  </CollapsableContainer>
                </Aside>
              </Body>

            </div>
          </DocumentTitle>
        )
      }
    }
  
    return null;
  }
}

export default withRouter(ContestView);