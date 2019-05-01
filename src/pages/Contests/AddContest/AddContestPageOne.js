import React from 'react';
import { reduxForm } from 'redux-form';

// Custom styles and components
import { Button } from 'components/buttons';
import { Form, FormBody, FormSubmit, RadioButtonGroup } from 'components/forms';

/**
 * Custom validation for this page specifically
 */
const validate = (values) => {
  let errors = { jira: '' };

  if (!values.jira) {
    errors.jira = 'Required';
  }

  return errors;
}

/**
 * 
 */
const AddContestPageOne = (props) => {
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