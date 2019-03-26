import React, { Component } from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';

// Custom styles and components
import { Button, TextButton } from '../../../components/buttons';
import { 
  Form, 
  FormBody, 
  FormSubmit
} from '../../../components/forms';

// Interfaces and types
interface IAddContestProps {
  previousPage?: () => void;
}

class AddContestPageThree extends Component<IAddContestProps & InjectedFormProps<{}, IAddContestProps>> {
  render() {
    const { handleSubmit, invalid, submitting, pristine, previousPage } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <h1>Form Fields</h1>
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
})(AddContestPageThree);

export default ContestPageWithForm;