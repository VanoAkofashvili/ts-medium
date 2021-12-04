let inputTypes = ['text', 'password', 'email'] as const;
type InputTypes = typeof inputTypes[number];

// Form field types
type FormInputTypes<T> = {
  readonly [key in keyof T]: InputTypes;
};

// Formik, for form generation
export interface FormFields<T> {
  initialValues: T;
  types: FormInputTypes<T>;
}
