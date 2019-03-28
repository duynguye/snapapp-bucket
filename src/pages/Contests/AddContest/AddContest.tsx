import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { SectionHeader } from '../../../components/modules';
import AddContestPageOne from './AddContestPageOne';
import AddContestPageTwo from './AddContestPageTwo';
import AddContestPageThree from './AddContestPageThree';
import styles from './AddContest.module.scss';

interface IAddContestState {
  page: number;
}

class AddContest extends Component<null, IAddContestState> {
  state = {
    page: 1
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  prevPage = () => {
    this.setState({ page: this.state.page - 1 });
  }

  render () {
    const { page } = this.state;

    return (
      <DocumentTitle title={'Create Contest - Orca - Compulse Integrated Marketing'}>
        <div className={styles.wrapper}>
          <SectionHeader title='Add New Contest' />
          { page === 3 && <AddContestPageOne onSubmit={this.nextPage} /> }
          { page === 2 && <AddContestPageTwo onSubmit={this.nextPage} previousPage={this.prevPage} /> }
          { page === 1 && <AddContestPageThree onSubmit={this.nextPage} previousPage={this.prevPage} /> }
        </div>
      </DocumentTitle>
    );
  }
}

export default AddContest;