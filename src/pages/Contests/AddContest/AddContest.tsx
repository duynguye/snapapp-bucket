import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import { SectionHeader } from '../../../components/modules';
import AddContestPageOne from './AddContestPageOne';
import AddContestPageTwo from './AddContestPageTwo';
import AddContestPageThree from './AddContestPageThree';

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
        <React.Fragment>
          <SectionHeader title='Add New Contest' />
          { page === 1 && <AddContestPageOne onSubmit={this.nextPage} /> }
          { page === 2 && <AddContestPageTwo onSubmit={this.nextPage} previousPage={this.prevPage} /> }
          { page === 3 && <AddContestPageThree onSubmit={this.nextPage} previousPage={this.prevPage} /> }
        </React.Fragment>
      </DocumentTitle>
    );
  }
}

export default AddContest;