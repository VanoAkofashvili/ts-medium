import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { TextControl, Button } from '../../common/components';
import { capitalize } from '../../common/utils';
import { FormFields } from '../../app/types';
import { useLoginMutation } from '../api';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
export interface LoginFormFields {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const toast = useToast();
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

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

  const handleSubmit = async (values: LoginFormFields) => {
    try {
      await login(values).unwrap();
      toast({
        status: 'success',
        title: 'Logged in',
        position: 'top-right',
        isClosable: true,
      });
      navigate('/', { replace: true });
    } catch (err) {
      console.log(err);

      toast({
        status: 'error',
        position: 'top-right',
        title: 'Error',
        description: 'Something went wrong',
        isClosable: true,
      });
    }
  };
  return (
    <>
      <Formik
        initialValues={formValues.initialValues}
        validationSchema={loginValidationSchema}
        onSubmit={handleSubmit}
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
            <Button type="submit" isLoading={isLoading} isFullWidth>
              Login
            </Button>
            {/* {data.isError && <pre>{JSON.stringify(data.error, null, 2)}</pre>} */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export { Login };
