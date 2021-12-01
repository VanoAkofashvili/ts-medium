import { TextControl } from './Atoms';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const initialValues: FormValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = <T extends FormValues>(values: T) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        username: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
      })}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        <Form></Form>;
      }}
    </Formik>
  );
};

export { Register };
