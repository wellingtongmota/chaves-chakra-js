import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik"
import * as Yup from 'yup'
import ChavesInput from "./ChavesInput";

const ChavesForm = () => {

  const [lastValue, setLastValue] = useState({
    field: '',
    value: ''
  });

  const chavesSchema = Yup.object().shape({
    pro_codigo: Yup.string()
      .matches(/^[0-9]+$/, 'Número inválido', { excludeEmptyString: true }),
    cod_gold: Yup.string()
      .matches(/^[0-9]+$/, 'Número inválido', { excludeEmptyString: true }),
    cod_land: Yup.string()
      .matches(/^[0-9]+$/, 'Número inválido', { excludeEmptyString: true }),
    cod_jas: Yup.string()
      .matches(/^[0-9]+$/, 'Número inválido', { excludeEmptyString: true }),
  });

  return (
    <Formik
      initialValues={{
        pro_codigo: '',
        cod_gold: '',
        cod_land: '',
        cod_jas: '',
        marca: '',
        subgrupo: ''
      }}

      validationSchema={chavesSchema}

      onSubmit={async (values, { setValues }) => {

        const response = await fetch(`http://192.168.10.8:3002/chaves?${lastValue.field}=${lastValue.value}`)

        const data = await response.json()

        setValues({
          "pro_codigo": data[0].pro_codigo === null ? '' : data[0].pro_codigo,
          "cod_gold": data[0].cod_gold === null ? '' : data[0].cod_gold,
          "cod_land": data[0].cod_land === null ? '' : data[0].cod_land,
          "cod_jas": data[0].cod_jas === null ? '' : data[0].cod_jas,
          "marca": data[0].marca === null ? '' : data[0].marca,
          "subgrupo": data[0].pro_subgrupo === null ? '' : data[0].pro_subgrupo
        })
      }}
    >
      {({ isSubmitting, errors, isValid, dirty, values, handleChange }) => (
        <Flex
          flexDirection='column'
          gap={4}
          as={Form}
        >
          <ChavesInput
            label='Cód. Dovale: '
            name='pro_codigo'
            onChange={handleChange}
            onBlur={e => setLastValue({
              field: e.target.name,
              value: e.target.value,
            })}
            value={values.pro_codigo}
            errors={errors.pro_codigo}
          />

          <ChavesInput
            label='Cód. Gold: '
            name='cod_gold'
            onChange={handleChange}
            onBlur={e => setLastValue({
              field: e.target.name,
              value: e.target.value,
            })}
            value={values.cod_gold}
            errors={errors.cod_gold}
          />

          <ChavesInput
            label='Cód. Land: '
            name='cod_land'
            onChange={handleChange}
            onBlur={e => setLastValue({
              field: e.target.name,
              value: e.target.value,
            })}
            value={values.cod_land}
            errors={errors.cod_land}
          />

          <ChavesInput
            label='Cód. Jas: '
            name='cod_jas'
            onChange={handleChange}
            onBlur={e => setLastValue({
              field: e.target.name,
              value: e.target.value,
            })}
            value={values.cod_jas}
            errors={errors.cod_jas}
          />

          <Flex flexDirection='column'>
            <Text><span>Marca: </span>{values.marca}</Text>
            <Text><span>Subgrupo: </span>{values.subgrupo}</Text>
          </Flex>

          <Flex w='full' gap={2} mt={2} flexWrap='wrap'>
            <Button
              flex={1}
              flexBasis={180}
              type="reset"
              letterSpacing='wider'
              colorScheme="blue"
              variant='outline'
            >
              Limpar
            </Button>

            <Button
              flex={1}
              flexBasis={180}
              type='submit'
              letterSpacing='wider'
              colorScheme='blue'
              isLoading={isSubmitting}
              loadingText='Pesquisando'
              isDisabled={!(isValid && dirty)}
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