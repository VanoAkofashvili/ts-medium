import { useField } from 'formik';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputProps,
} from '@chakra-ui/react';

interface TextControlProps extends InputProps {
  label: string;
  name: string;
}

export type FixMeLater = any;

/**
 *
 * @param param0 You must pass name and label props to correctly wire up formik validator and labels
 * @returns Formik controller input
 */
export const TextControl: React.FC<TextControlProps> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props as FixMeLater);
  return (
    <FormControl id={label} isInvalid={!!(meta.touched && meta.error)} mb={5}>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Input {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
