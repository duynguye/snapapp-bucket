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

const WrappedInput = withLabel(Input);

export {
  Form,
  FormAside,
  FormGroup,
  FormBody,
  FormSubmit,
  Input,
  Label,
  PassInput,
  RadioButton,
  RadioButtonGroup,
  UserInput,
  WrappedInput
};
