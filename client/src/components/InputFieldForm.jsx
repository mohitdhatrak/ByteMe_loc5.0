import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { useField } from 'formik';

export function InputFieldForm(props) {
  const { label, ...restOfProps } = props;
  const [field, meta] = useField(props);

  return (
    <FormControl id={props.name} isInvalid={!!meta.error && !!meta.touched}>
      {label && (
        <FormLabel mb="1" htmlFor={props.name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <Input {...field} {...restOfProps} />
      </InputGroup>
      {meta.error && meta.touched && (
        <FormHelperText>{meta.error}</FormHelperText>
      )}
    </FormControl>
  );
}
