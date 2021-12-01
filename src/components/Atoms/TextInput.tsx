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
}

export type FixMeLater = any;

export const TextControl: React.FC<TextControlProps> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props as FixMeLater);
  return (
    <FormControl id={label} isInvalid={!!(meta.touched && meta.error)}>
      <FormLabel htmlFor={label}>{label}</FormLabel>
      <Input {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
