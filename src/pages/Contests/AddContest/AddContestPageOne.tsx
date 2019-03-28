import React from 'react';
import { reduxForm, InjectedFormProps } from 'redux-form';

// Custom styles and components
import { Button } from '../../../components/buttons';
import { Form, FormBody, FormSubmit, RadioButtonGroup } from '../../../components/forms';

// Interfaces and types
interface IAddContestProps extends InjectedFormProps {}

/**
 * Custom validation for this page specifically
 */
const validate = (values: any) => {
  let errors = { jira: '' };

  if (!values.jira) {
    errors.jira = 'Required';
  }

  return errors;
}

/**
 * 
 */
const AddContestPageOne = (props: IAddContestProps) => {
  const { handleSubmit, invalid, submitting, pristine } = props;
  
  return (
    <Form onSubmit={handleSubmit}>
      <FormBody>
        <RadioButtonGroup name='jira' values={['Yes', 'No']} label='Is there a JIRA issue number?' />
      </FormBody>

      <FormSubmit>
        <Button disabled={invalid || submitting || pristine} type='submit' config={['fal', 'long-arrow-right']}>Next</Button>
      </FormSubmit>
    </Form>
  );
}

export default reduxForm({
  form: 'addContest',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate
})(AddContestPageOne);