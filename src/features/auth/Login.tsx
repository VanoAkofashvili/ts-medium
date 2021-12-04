import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { TextControl, Button } from '../../common/components';
import { capitalize, randomString } from '../../common/utils';
import { FormFields } from '../../app/types';

import { useGetPostQuery, useAddNewPostMutation, Post } from '../api';

export interface LoginFormFields {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const responseResult = useGetPostQuery('61a9d182256c1e45cb95036e');
  const [addNewPost, { isLoading }] = useAddNewPostMutation();
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
    // await login(values);
    console.log(values);
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
            <Button type="submit" isLoading={isSubmitting}>
              Login
            </Button>
            {/* {data.isError && <pre>{JSON.stringify(data.error, null, 2)}</pre>} */}
          </Form>
        )}
      </Formik>
      <Button
        mt={5}
        onClick={async () => {
          const fakePost: Post = {
            desc: 'fake descripition',
            img: 'https://example.com/image.jpg',
            likes: [],
            userId: randomString(),
            _id: randomString(),
          };
          const response = await addNewPost(fakePost);
          console.log('response: ', response);
        }}
      >
        Add new Post
      </Button>
    </>
  );
};

export { Login };
