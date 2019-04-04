import DatePicker from './DatePicker/DatePicker';
import Dropdown from './Dropdown/Dropdown';
import EmailArray from './EmailArray/EmailArray';
import Form from './Form/Form';
import FormAside from './FormAside/FormAside';
import FormGroup from './FormGroup/FormGroup';
import FormBody from './FormBody/FormBody';
import FormSubmit from './FormSubmit/FormSubmit';
import Input from './Input/Input';
import Label from './Label/Label';
import PassInput from './PassInput/PassInput';
import RadioButton from './RadioButton/RadioButton';
import RadioButtonGroup from './RadioButtonGroup/RadioButtonGroup';
import SmallInput from './SmallInput/SmallInput';
import TextArea from './TextArea/TextArea';
import TimePicker from './TimePicker/TimePicker';
import UserInput from './UserInput/UserInput';
import { withLabel } from './withLabel';

export enum FormSize {
  Full,
  Half,
  Quarter,
  ThreeQuarters,
  Third,
  TwoThirds
}

const WrappedDatePicker = withLabel(DatePicker);
const WrappedTimePicker = withLabel(TimePicker);
const WrappedInput = withLabel(Input);
const WrappedTextArea = withLabel(TextArea);

export {
  Dropdown,
  Form,
  FormAside,
  FormGroup,
  FormBody,
  FormSubmit,
  EmailArray,
  Input,
  Label,
  PassInput,
  RadioButton,
  RadioButtonGroup,
  SmallInput,
  UserInput,
  WrappedDatePicker,
  WrappedInput,
  WrappedTextArea,
  WrappedTimePicker
};
