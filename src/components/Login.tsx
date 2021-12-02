import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { TextControl, Button } from './Atoms';
import { capitalize } from '../utils';
import { FormFields } from '../types';
import { useLoginMutation } from '../services/auth.service';
export interface LoginFormFields {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [login, data] = useLoginMutation();
  console.log(
    '%c Rendering...',
    'background: red; color: white; font-size: 15px'
  );
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
        await login(values);
        console.log(data);
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
          {data.isError && <pre>{JSON.stringify(data.error, null, 2)}</pre>}
        </Form>
      )}
    </Formik>
  );
};

export { Login };
