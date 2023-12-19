import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement
} from '@chakra-ui/react'
import { Field } from 'formik'

const ChavesInput = ({ label, name, type = 'text', icon, placeholder, errors, onChange }) => {

  // função handle
  const handleChange = e => onChange(e)

  return (
    <FormControl>
      {label !== undefined &&
        <FormLabel letterSpacing='wider' fontFamily={`'Anton', sans-serif`}>{label}</FormLabel>
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
          placeholder={placeholder}
          focusBorderColor='blue.400'
          borderColor='gray.500'
          borderRadius='none'
          onChange={handleChange}
        />
      </InputGroup>
      {errors ?
        <FormHelperText>{errors}</FormHelperText>
        :
        <FormHelperText><br /></FormHelperText>
      }
    </FormControl>
  )
}

export default ChavesInput