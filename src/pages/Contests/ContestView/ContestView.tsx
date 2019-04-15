import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Spinner from 'react-spinkit';
import { RouteComponentProps, withRouter } from 'react-router';
import moment from 'moment';
import ReactQuill from 'react-quill';

// Custom imports and styles.
import { fetchContest } from '../../../lib/contests';
import { Breadcrumbs, ContestEntries, SectionHeader } from '../../../components/modules';
import { Aside, Body, CollapsableContainer, Content } from '../../../components/layout';
import { ProjectDetailsList } from '../../../components/collections';
import styles from './ContestView.module.scss';

interface IContestViewState {
  data: any;
  loading: boolean;
  text: string;
}

interface IContestProps {
  id: string;
}

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
class ContestView extends Component<RouteComponentProps<IContestProps>, IContestViewState> {
  public readonly state: Readonly<IContestViewState> = {
    data: {},
    loading: true,
    text: ''
  };

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

  componentDidMount = () => {
    const { match: { params: { id } } } = this.props;

    if (!isNaN(+id)) {
      this.getContest();
    }
  }

  getContest = () => {
    const { match: { params: { id } } } = this.props;

    fetchContest(+id).then(response => {
      this.setState({ loading: false, data: response }, () => this.extractContestData());
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

  handleTextUpdates = (text: string) => {
    console.log(text);
    this.setState({ text });
  }

  render() {
    const { match }: any = this.props;
    const { data: { contest }, loading } = this.state;

    if (!isNaN(match.params.id)) {
      if (loading) {
        return (
          <div className={styles.loader}>         
            <Spinner color='#5c7aff' style={{ marginBottom: 50 }} name='pacman' />   
            <p>Loading</p>
          </div>
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
                      <ReactQuill 
                        modules={this.modules}
                        formats={this.formats}
                        theme='snow' 
                        value={this.state.text} 
                        onChange={this.handleTextUpdates} 
                        style={{ flex: 1, paddingLeft: 30 }} 
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
                    <p>Sidebar Items</p>
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