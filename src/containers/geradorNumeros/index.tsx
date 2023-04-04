import { useMemo } from 'react'
import { createFormContext } from '@mantine/form'

import type { IGeradorNumerosFormValues } from './types'
import { useGeradorNumeros } from './useGeradorNumeros/useGeradorNumeros'

import { Gerador } from './gerador'
import { Resultado } from './resultado'

const [FormProvider, useFormContext, useForm] =
  createFormContext<IGeradorNumerosFormValues>()

export function useGeradorNumerosFormContext() {
  const form = useFormContext()

  return form
}

export function GeradorNumeros() {
  const { loading, numbers, setNumbers, handleGenerate } = useGeradorNumeros()

  const initialValues = useMemo(
    () => ({ min: 0, max: 10, amount: 1, duplicates: false }),
    [],
  )

  const form = useForm({
    initialValues: initialValues,

    // functions will be used to validate values at corresponding key
    validate: {
      amount: (value) => {
        if (Number(value) < 1) {
          return 'A quantidade de números deve ser maior que 0'
        }

        if (Number(value) > form.values.max) {
          return 'A quantidade de números deve ser menor ou igual ao valor máximo'
        }
      },
      min: (value) => {
        if (Number(value) < 0) {
          return 'O valor mínimo deve ser maior ou igual a 0'
        }
      },
      max: (value) => {
        if (Number(value) < 0) {
          return 'O valor máximo deve ser maior ou igual a 0'
        }

        if (Number(value) < form.values.min) {
          return 'O valor máximo deve ser maior ou igual ao valor mínimo'
        }

        if (Number(value) > 1000) {
          return 'O valor máximo deve ser menor ou igual a 1000'
        }
      },
    },
  })

  return (
    <FormProvider form={form}>
      <form onSubmit={form.onSubmit(handleGenerate)} style={{ height: '100%' }}>
        {numbers.length > 0 ? (
          <Resultado numbers={numbers} setNumbers={setNumbers} />
        ) : (
          <Gerador loading={loading} />
        )}
      </form>
    </FormProvider>
  )
}
