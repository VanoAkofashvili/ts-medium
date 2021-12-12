import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { TextControl, capitalize } from '../../common';
import { Button } from '@chakra-ui/button';
import { FormFields } from '../../app/types';
import { withNoAuth } from '../../common/hocs';

interface RegisterFormFields {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = withNoAuth(() => {
  const formValues: FormFields<RegisterFormFields> = {
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

  const registerValidationSchema: Yup.SchemaOf<typeof formValues.initialValues> = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <Formik
      initialValues={formValues.initialValues}
      validationSchema={registerValidationSchema}
      onSubmit={(values, formikHelpers) => {
        alert(JSON.stringify(values, null, 2));
        formikHelpers.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          {Object.keys(formValues.initialValues).map(input => {
            return (
              <TextControl
                key={input}
                label={capitalize(input)}
                name={input}
                type={formValues.types[input as keyof RegisterFormFields]}
              />
            );
          })}
          <Button type="submit" isLoading={isSubmitting}>
            Sign Up
          </Button>
        </Form>
      )}
    </Formik>
  );
});

export { Register };
