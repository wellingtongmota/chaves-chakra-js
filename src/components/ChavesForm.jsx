import { Button, Flex, Text } from "@chakra-ui/react";
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

      onSubmit={async (values, { setValues }) => {
        const response = await fetch(`http://localhost:3002/chaves?pro_codigo=${values.pro_codigo}`)

        const data = await response.json()

        setValues({
          "pro_codigo": data[0].pro_codigo === null ? '' : data[0].pro_codigo,
          "cod_gold": data[0].cod_gold === null ? '' : data[0].cod_gold,
          "cod_land": data[0].cod_land === null ? '' : data[0].cod_land,
          "cod_jas": data[0].cod_jas === null ? '' : data[0].cod_jas
        })
      }}
    >
      {({ isSubmitting, errors, values, handleChange }) => (
        <Flex
          flexDirection='column'
          as={Form}
        >
          <ChavesInput
            label='Cód. Dovale: '
            name='pro_codigo'
            onChange={handleChange}
            value={values.pro_codigo}
            errors={errors.pro_codigo}
          />

          <ChavesInput
            label='Cód. Gold: '
            name='cod_gold'
            onChange={handleChange}
            value={values.cod_gold}
            errors={errors.cod_gold}
          />

          <ChavesInput
            label='Cód. Land: '
            name='cod_land'
            onChange={handleChange}
            value={values.cod_land}
            errors={errors.cod_land}
          />

          <ChavesInput
            label='Cód. Jas: '
            name='cod_jas'
            onChange={handleChange}
            value={values.cod_jas}
            errors={errors.cod_jas}
          />

          <Text><span>Marca: </span></Text>
          <Text><span>Subgrupo: </span></Text>

          <Flex w='full' gap={2} mt={4}>
            <Button
              flex={1}
              type="reset"
              letterSpacing='wider'
              colorScheme="blue"
              variant='outline'
            >
              Limpar
            </Button>

            <Button
              flex={1}
              type='submit'
              letterSpacing='wider'
              colorScheme='blue'
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