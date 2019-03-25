import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

// Custom styles and components
import { Button } from '../../../components/buttons';
import { Form, FormBody, FormSubmit, Label, RadioButton } from '../../../components/forms';

// Interfaces and types
interface IAddContestProps extends InjectedFormProps {}

const renderInput = (field: any) => 
  <div>
    <Label dark required>Is there an existing JIRA ticket?</Label>
    <input {...field.input} type={field.type}/>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>;

const AddContestPageOne = (props: IAddContestProps) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={handleSubmit}>
      <FormBody>
        <Field name='jiraTicketExists' component={renderInput} />
        <RadioButton name={'jira'} />
      </FormBody>

      <FormSubmit>
        <Button type='submit' config={['fal', 'long-arrow-right']}>Next</Button>
      </FormSubmit>
    </Form>
  );
}

export default reduxForm({
  form: 'addContest',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(AddContestPageOne);