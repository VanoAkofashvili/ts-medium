import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { TextControl, Button } from './Atoms';
import { capitalize } from '../utils';
import { FormFields } from '../types';

interface LoginFormFields {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formValues: FormFields<LoginFormFields> = {
    initialValues: {
      email: '',
      password: '',
    },
    types: {
      email: 'email',
      password: 'password',
    },
  };

  const loginValidationSchema: Yup.SchemaOf<typeof formValues.initialValues> =
    Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    });
  console.log(formValues.types['email']);
  return (
    <Formik
      initialValues={formValues.initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={async (values) => {
        console.log(values);
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
                type={formValues.types[input as keyof LoginFormFields]}
              />
            );
          })}
          <Button type="submit" isLoading={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export { Login };
