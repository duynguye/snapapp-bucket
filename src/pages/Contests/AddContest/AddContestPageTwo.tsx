import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field, formValueSelector, SubmitHandler } from 'redux-form';
import { connect } from 'react-redux';

// Custom styles and components
import { Button, TextButton } from '../../../components/buttons';
import { 
  Form, 
  FormBody, 
  FormSubmit,
  WrappedInput
} from '../../../components/forms';

// Interfaces and types
interface IAddContestProps {
  jira?: boolean;
  previousPage?: any;
  submit?: any;
}

/**
 * 
 */
class AddContestPageTwo extends Component<IAddContestProps & InjectedFormProps<{}, IAddContestProps>> {
  private form = React.createRef<HTMLDivElement>();

  componentDidMount() {
    if (this.props.jira === false) {
      const form = this.form.current;

      if (form) {
        this.props.submit();
      }
    }
  }

  render() {
    const { handleSubmit, invalid, submitting, pristine, previousPage } = this.props;

    return (
      <Form onSubmit={handleSubmit} ref={this.form}>
        <FormBody>
          <Field type='text' name='ticket_number' component={WrappedInput} label='JIRA Issue Number (Do not include SRP)' required maxWidth={300} />
        </FormBody>
  
        <FormSubmit>
          <TextButton style={{ marginRight: 15 }} onClick={previousPage}>Back</TextButton>
          <Button disabled={invalid || submitting || pristine} type='submit' config={['fal', 'long-arrow-right']}>Next</Button>
        </FormSubmit>
      </Form>
    );
  }
}

const ContestPageWithForm = reduxForm<{}, IAddContestProps>({
  form: 'addContest',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(AddContestPageTwo);

const selector = formValueSelector('addContest');
const ContestPageWithState = connect(state => {
  const jira = selector(state, 'jira') === 'Yes';

  return {
    jira
  };
})(ContestPageWithForm);

export default ContestPageWithState;