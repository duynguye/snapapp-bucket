import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Spinner from 'react-spinkit';
import { withRouter } from 'react-router';

// Custom imports and styles.
import { fetchContest } from '../../../lib/contests';
import { Breadcrumbs, SectionHeader } from '../../../components/modules';
import styles from './ContestView.module.scss';

interface IContestViewState {
  codePosition: number;
  data: any;
  loading: boolean;
}

class ContestView extends Component<any, IContestViewState> {
  public readonly state: Readonly<IContestViewState> = {
    codePosition: 0,
    data: {},
    loading: true
  };

  componentDidMount = () => {
    const { match: { params: { id } } } = this.props;

    if (!isNaN(id)) {
      this.getContest();
    }
  }

  getContest = () => {
    const { match: { params: { id } } } = this.props;

    fetchContest(id).then(response => {
      console.log(response);

      this.setState({ loading: false, data: response });
    });
  }

  render() {
    const { match }: any = this.props;
    const { data: { contest }, loading } = this.state;

    if (!isNaN(match.params.id)) {
      if (loading) {
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>         
            <Spinner color='#5c7aff' style={{ marginBottom: 50 }} name='pacman' />   
            <p>Loading</p>
          </div>
        );
      } else {
        return (
          <DocumentTitle title={`${contest.contest_name} - Orca - Compulse Integrated Marketing`}>
            <div>
              <Breadcrumbs />
              <SectionHeader title={contest.contest_name} className={styles.sectionHeader} />
            </div>
          </DocumentTitle>
        )
      }
    }
  
    return null;
  }
}

export default withRouter(ContestView);