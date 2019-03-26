import Form from './Form/Form';
import FormGroup from './FormGroup/FormGroup';
import FormBody from './FormBody/FormBody';
import FormSubmit from './FormSubmit/FormSubmit';
import Input from './Input/Input';
import Label from './Label/Label';
import PassInput from './PassInput/PassInput';
import RadioButton from './RadioButton/RadioButton';
import RadioButtonGroup from './RadioButtonGroup/RadioButtonGroup';
import UserInput from './UserInput/UserInput';
import withLabel from './withLabel';

const WrappedInput = withLabel(Input);

export {
  Form,
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
