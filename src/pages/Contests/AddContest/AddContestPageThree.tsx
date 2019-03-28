import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

// Custom styles and components
import { Button, TextButton } from '../../../components/buttons';
import { 
  Form,
  FormAside,
  FormBody,
  FormGroup,
  FormSize,
  FormSubmit,
  RadioButtonGroup,
  WrappedInput
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
          <FormGroup>
            <Field type='text' name='title' component={WrappedInput} label='Contest Name' size={FormSize.ThreeQuarters} required />
            <Field type='text' name='issue' component={WrappedInput} label='Issue Number' size={FormSize.Quarter} />
          </FormGroup>

          <FormGroup>
            <Field type='text' name='platform' component={WrappedInput} label='Contest Platform' size={FormSize.Third} required />
            <Field type='text' name='type' component={WrappedInput} label='Contest Type' size={FormSize.Third} required />
            <Field type='text' name='station' component={WrappedInput} label='Station' size={FormSize.Third} required />
          </FormGroup>

          <FormGroup>
            <Field type='text' name='start' component={WrappedInput} label='Start Date' size={FormSize.Quarter} />
            <Field type='text' name='end' component={WrappedInput} label='End Date' size={FormSize.Quarter} />
            <Field type='text' name='draw' component={WrappedInput} label='Draw Type' size={FormSize.Quarter} />
            <Field type='text' name='issue' component={WrappedInput} label='[NOT SURE]' size={FormSize.Quarter} />
          </FormGroup>

          <FormGroup>
            <RadioButtonGroup label='Remove winner from future draws?' name='jira' values={['Yes', 'No', 'Maybe', 'So', 'Who Knows']} size={FormSize.Quarter} />
            <Field type='text' name='issue' component={WrappedInput} label='Notes' size={FormSize.Quarter} />
            <Field type='text' name='issue' component={WrappedInput} label='Notes' size={FormSize.Half} />
          </FormGroup>

          <FormGroup>
            <Field type='text' name='issue' component={WrappedInput} label='Notes' size={FormSize.Full} />
          </FormGroup>
        </FormBody>

        <FormAside>
          <h1>Emails</h1>
        </FormAside>
  
        <FormSubmit>
          <TextButton style={{ marginRight: 15 }} onClick={previousPage}>Back</TextButton>
          <Button disabled={invalid || submitting || pristine} type='submit' config={['fal', 'long-arrow-right']}>Create Contest</Button>
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