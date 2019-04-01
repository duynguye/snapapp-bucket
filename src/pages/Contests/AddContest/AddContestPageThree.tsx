import React, { Component } from 'react';
import { reduxForm, InjectedFormProps, Field, FieldArray } from 'redux-form';

// Custom styles and components
import { Button, TextButton } from '../../../components/buttons';
import {
  Dropdown,
  Form,
  FormAside,
  FormBody,
  FormGroup,
  FormSize,
  FormSubmit,
  RadioButtonGroup,
  WrappedInput,
  WrappedDatePicker,
  WrappedTextArea,
  EmailArray
} from '../../../components/forms';
import { AsideTitle } from '../../../components/text';
import { HorizontalDivider } from '../../../components/layout';

// Mock data
import { 
  platform as platformProps,
  station,
  contestType,
  drawType
} from '../../../lib/mocks/addNewDropdowns';

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
            <Field type='text' name='title' component={WrappedInput} label='Contest Name' size={FormSize.Half} required />
            <Field type='text' name='issue' component={WrappedInput} label='Issue Number' size={FormSize.Quarter} />
            <Field name='platform' component={Dropdown} label='Contest Platform' size={FormSize.Quarter} dataProps={platformProps} placeholder='Pick a platform...' required />
          </FormGroup>

          <FormGroup>
            <Field name='type' component={Dropdown} label='Contest Type' size={FormSize.Half} dataProps={contestType} placeholder='Choose a contest type...' required />
            <Field name='station' component={Dropdown} label='Station' size={FormSize.Half} dataProps={station} placeholder='Choose a station...' required />
          </FormGroup>

          <FormGroup>
            <Field type='text' name='start' component={WrappedDatePicker} label='Start Date' size={FormSize.Third} />
            <Field type='text' name='end' component={WrappedDatePicker} label='End Date' size={FormSize.Third} />
            <Field name='draw' component={Dropdown} label='Draw Type' size={FormSize.Third} dataProps={drawType} placeholder='Choose a draw type...' />
          </FormGroup>

          <FormGroup>
            <RadioButtonGroup 
              label='Remove winner from future draws?' 
              name='jira' 
              values={['Yes', 'No', 'Maybe', 'So', 'Who Knows']} 
              size={FormSize.Full} 
              horizontal 
            />
          </FormGroup>

          <FormGroup>
            <Field type='text' name='notes' component={WrappedTextArea} label='Notes' size={FormSize.Full} />
          </FormGroup>
        </FormBody>

        <FormAside>
          <AsideTitle>Emails</AsideTitle>
          <HorizontalDivider />
          <FieldArray name="emails" component={EmailArray} />
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