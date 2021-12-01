import { Container } from '@chakra-ui/layout';
import { Button } from './Button';
import { Form, Formik } from 'formik';
import { TextControl } from './Atoms';
import { capitalize } from '../utils';
import * as Yup from 'yup';

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
    username: '',
    password: '',
  };

  const handleSubmit = <T extends FormValues>(values: T) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Container p={5}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          username: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          password: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
        })}
        onSubmit={handleSubmit}
      >
        <Form>
          {Object.keys(initialValues).map((input) => (
            <TextControl key={input} label={capitalize(input)} name={input} />
          ))}
          <Button type="submit">Sign Up</Button>
        </Form>
      </Formik>
    </Container>
  );
};

export { Register };
