import {
  Button,
  Flex,
} from "@chakra-ui/react";
import { Form, Formik } from "formik"
import ChavesInput from "./ChavesInput";

const ChavesForm = () => {
  return (
    <Formik
      initialValues={{
        pro_codigo: '',
        cod_gold: '',
        cod_land: '',
        cod_jas: ''
      }}

      // validationSchema={subscribeSchema}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}

    >
      {({ isSubmitting, errors, handleChange }) => (
        <Flex
          flexDirection='column'
          as={Form}
        >
          <ChavesInput
            label='Cód. Dovale: '
            name='pro_codigo'
            type='number'
            onChange={handleChange}
            errors={errors.pro_codigo}
          />

          <ChavesInput
            label='Cód. Gold: '
            name='cod_gold'
            type='number'
            onChange={handleChange}
            errors={errors.cod_gold}
          />

          <ChavesInput
            label='Cód. Land: '
            name='cod_land'
            type='number'
            onChange={handleChange}
            errors={errors.cod_land}
          />

          <ChavesInput
            label='Cód. Jas: '
            name='cod_jas'
            type='number'
            onChange={handleChange}
            errors={errors.cod_jas}
          />

          <Flex w='full' gap={2} mt={4}>
            <Button
              flex={1}
              type="reset"
              letterSpacing='wider'
              colorScheme="blue"
              borderRadius='none'
              variant='outline'
              textTransform='uppercase'
            >
              Limpar
            </Button>

            <Button
              flex={1}
              type='submit'
              letterSpacing='wider'
              colorScheme='blue'
              borderRadius='none'
              textTransform='uppercase'
              isLoading={isSubmitting}
              loadingText='Pesquisando'
            >
              Pesquisar chave
            </Button>
          </Flex>
        </Flex>
      )}
    </Formik>
  )
}

export default ChavesForm