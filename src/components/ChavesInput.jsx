import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { Field } from 'formik'

const ChavesInput = ({ label, name, value, type = 'text', icon, placeholder, errors, onChange, onBlur }) => {

  // função handle
  const handleChange = e => onChange(e)
  const handleBlur = e => onBlur(e)

  return (
    <FormControl>
      {label !== undefined &&
        <FormLabel mb={0} letterSpacing='wider' fontFamily={`'Anton', sans-serif`}>{label}</FormLabel>
      }

      <InputGroup>
        {icon !== undefined &&
          <InputLeftElement pointerEvents='none' color='gray.600'>
            {icon}
          </InputLeftElement>
        }
        <Input
          as={Field}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          focusBorderColor='blue.400'
          borderColor='gray.500'
          borderRadius='none'
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </InputGroup>
      {errors &&
        <FormHelperText>{errors}</FormHelperText>
      }
    </FormControl>
  )
}

export default ChavesInput