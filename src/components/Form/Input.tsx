import { Input as ChakraInput, FormLabel, FormControl, InputProps as ChakraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChakraInputProps {
  label?: string;
  error?: FieldError | null;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, error = null, ...rest }: InputProps, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={rest.name}>{label}</FormLabel>}

      <ChakraInput
        id={rest.name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )
      }
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)