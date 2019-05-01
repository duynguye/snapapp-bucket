import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';

// Custom styles and components
import { Button, TextButton } from 'components/buttons';
import {
  Dropdown,
  Form,
  FormAside,
  FormBody,
  FormGroup,
  FormSubmit,
  RadioButtonGroup,
  WrappedInput,
  WrappedDatePicker,
  WrappedTextArea,
  WrappedTimePicker,
  EmailArray,
  FORMSIZE_HALF,
  FORMSIZE_QUARTER,
  FORMSIZE_FULL,
  FORMSIZE_THIRD
} from 'components/forms';
import { AsideTitle } from 'components/text';
import { HorizontalDivider } from 'components/layout';

// Mock data
import { 
  platform as platformProps,
  contestType,
  drawType as drawTypes,
  timezones
} from 'lib/mocks/addNewDropdowns';
import { stations } from 'lib/mocks/stations';

class AddContestPageThree extends Component {
  state = {
    drawType: ''
  };

  handleChange = (drawType) => {
    this.setState({ drawType });
  }

  render() {
    const { handleSubmit, invalid, submitting, pristine, previousPage } = this.props;
    const { drawType } = this.state;

    return (
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <FormGroup>
            <Field type='text' name='ticket_name' component={WrappedInput} label='Contest Name' size={FORMSIZE_HALF} required />
            <Field type='text' name='ticket_number' component={WrappedInput} label='Issue Number' size={FORMSIZE_QUARTER} />
            <Field name='contest_platform' component={Dropdown} label='Contest Platform' size={FORMSIZE_QUARTER} dataProps={platformProps} placeholder='Pick a platform...' required />
          </FormGroup>

          <FormGroup>
            <Field name='contest_type' component={Dropdown} label='Contest Type' size={FORMSIZE_HALF} dataProps={contestType} placeholder='Choose a contest type...' required />
            <Field name='ticket_station' component={Dropdown} label='Station' size={FORMSIZE_HALF} dataProps={stations} placeholder='Choose a station...' required />
          </FormGroup>

          <FormGroup>
            <Field type='text' name='contest_start_date' component={WrappedDatePicker} label='Start Date' size={FORMSIZE_THIRD} />
            <Field type='text' name='contest_end_date' component={WrappedDatePicker} label='End Date' size={FORMSIZE_THIRD} />
            <Field name='contest_draw_type' component={Dropdown} label='Draw Type' size={FORMSIZE_THIRD} dataProps={drawTypes} placeholder='Choose a draw type...' handleUpdate={this.handleChange} />
          </FormGroup>

          {
            drawType === 'One Time Draw' &&
            <FormGroup>
              <Field type='text' name='contest_draw_date_time' component={WrappedDatePicker} label='Draw Date & Time' size={FORMSIZE_THIRD} />
              <Field name='contest_draw_timezone' component={Dropdown} label='Timezone' size={FORMSIZE_THIRD} dataProps={timezones} placeholder='Choose a timezone...' />
            </FormGroup>
          }

          {
            drawType === 'Daily' &&
            <FormGroup>
              <Field type='text' name='contest_draw_time' component={WrappedTimePicker} label='Draw Time' size={FORMSIZE_QUARTER} />
              <Field name='contest_draw_timezone' component={Dropdown} label='Timezone' size={FORMSIZE_QUARTER} dataProps={timezones} placeholder='Choose a timezone...' />
              <RadioButtonGroup 
                label='Ignore weekends?' 
                name='contest_draw_ignore_weekends' 
                values={['Yes', 'No']} 
                size={FORMSIZE_QUARTER}  
              />
              <RadioButtonGroup 
                label='Remove winner from future draws?' 
                name='contest_draw_remove_winner' 
                values={['Yes', 'No']} 
                size={FORMSIZE_QUARTER}  
              />
            </FormGroup>
          }

          {
            drawType === 'Custom' &&
            <FormGroup>
              <Field type='text' name='contest_draw_time' component={WrappedTimePicker} label='Draw Time' size={FORMSIZE_QUARTER} />
              <Field name='contest_draw_timezone' component={Dropdown} label='Timezone' size={FORMSIZE_QUARTER} dataProps={timezones} placeholder='Choose a timezone...' />
              <RadioButtonGroup 
                label='Draw Frequency' 
                name='contest_draw_frequency' 
                values={['Weekly', 'Bi-Weekly', 'Monthly', 'Quarterly', 'Annually']} 
                size={FORMSIZE_HALF}  
                horizontal
              />
            </FormGroup>
          }

          <FormGroup>
            <Field type='text' name='ticket_notes' component={WrappedTextArea} label='Notes' size={FORMSIZE_FULL} />
          </FormGroup>
        </FormBody>

        <FormAside>
          <AsideTitle>Emails</AsideTitle>
          <HorizontalDivider />
          <FieldArray name="ticket_assignees" component={EmailArray} />
        </FormAside>
  
        <FormSubmit>
          <TextButton style={{ marginRight: 15 }} onClick={previousPage}>Back</TextButton>
          <Button disabled={invalid || submitting || pristine} type='submit' config={['fal', 'long-arrow-right']}>Create Contest</Button>
        </FormSubmit>
      </Form>
    );
  }
}

const ContestPageWithForm = reduxForm({
  form: 'addContest',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true
})(AddContestPageThree);

export default ContestPageWithForm;