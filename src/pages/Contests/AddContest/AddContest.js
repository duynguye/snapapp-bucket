import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { withRouter } from 'react-router-dom';

// Custom imports and styles.
import { SectionHeader } from 'components/modules';
import AddContestPageOne from './AddContestPageOne';
import AddContestPageTwo from './AddContestPageTwo';
import AddContestPageThree from './AddContestPageThree';
import AddContestPageFour from './AddContestPageFour';
import { createNewContest } from 'lib/contests';
import styles from './AddContest.module.scss';

class AddContest extends Component {
  state = {
    page: 1
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  }

  prevPage = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleSubmit = (values) => {
    const { history } = this.props;

    this.setState({ page: this.state.page + 1 });

    let emails = [];
    let contest_draw_ignore_weekends = false;
    let contest_draw_remove_winner = false;

    if (values.ticket_assignees && values.ticket_assignees.length > 0) {
      emails = values.ticket_assignees.map((assignee) => { return { email: assignee } });
    }

    if (values.contest_draw_ignore_weekends === 'Yes') {
      contest_draw_ignore_weekends = true;
    }

    if (values.contest_draw_remove_winner === 'Yes') {
      contest_draw_remove_winner = true;
    }

    const formData = { ...values, ticket_assignees: emails, contest_draw_ignore_weekends, contest_draw_remove_winner };

    createNewContest(formData)
      .then(results => {
        const { data: { contest: { ticket_id }}} = results;

        history.push(`/contests/${ticket_id}`);
      })
      .catch(error => console.log(error));
  }

  render () {
    const { page } = this.state;

    return (
      <DocumentTitle title={'Create Contest - Orca - Compulse Integrated Marketing'}>
        <div className={styles.wrapper}>
          <SectionHeader title='Add New Contest' />
          { page === 1 && <AddContestPageOne onSubmit={this.nextPage} /> }
          { page === 2 && <AddContestPageTwo onSubmit={this.nextPage} previousPage={this.prevPage} /> }
          { page === 3 && <AddContestPageThree onSubmit={this.handleSubmit} previousPage={this.prevPage} /> }
          { page === 4 && <AddContestPageFour /> }
        </div>
      </DocumentTitle>
    );
  }
}

export default withRouter(AddContest);