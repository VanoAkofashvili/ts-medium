import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { Container } from '@chakra-ui/layout';

import { Button } from './Button';
import { TextControl } from './Atoms';
import { capitalize } from '../utils';
import { InputTypes } from '../types';

// Form fields
interface InputFields {
  username: string;
  email: string;
  password: string;
}

// Form field types
type FormInputTypes = {
  readonly [key in keyof InputFields]: InputTypes;
};

// For form generation
interface Values {
  initialValues: InputFields;
  types: FormInputTypes;
}

const Register: React.FC = () => {
  const formValues: Values = {
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    types: {
      email: 'email',
      password: 'password',
      username: 'text',
    },
  };

  return (
    <Container p={5}>
      <Formik
        initialValues={formValues.initialValues}
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
        onSubmit={(values, formikHelpers) => {
          alert(JSON.stringify(values, null, 2));
          formikHelpers.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {Object.keys(formValues.initialValues).map((input) => {
              return (
                <TextControl
                  key={input}
                  label={capitalize(input)}
                  name={input}
                  // @ts-ignore
                  type={formValues.types[input]}
                />
              );
            })}
            <Button type="submit" isLoading={isSubmitting}>
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export { Register };
