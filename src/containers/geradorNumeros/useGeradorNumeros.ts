import { useForm } from '@mantine/form'

import type { IGeradorNumerosFormValues } from './types'

export function useGeradorNumeros() {
  const form = useForm({
    initialValues: {
      min: 0,
      max: 10,
      amount: 1,
      duplicates: false,
    },

    // functions will be used to validate values at corresponding key
    validate: {
      amount: (value) => {
        if (value < 1) {
          return 'A quantidade de números deve ser maior que 0'
        }
      },
      min: (value) => {
        if (value < 0) {
          return 'O valor mínimo deve ser maior ou igual a 0'
        }
      },
      max: (value) => {
        if (value < 0) {
          return 'O valor máximo deve ser maior ou igual a 0'
        }

        if (value < form.values.min) {
          return 'O valor máximo deve ser maior ou igual ao valor mínimo'
        }
      },
    },
  })

  function handleGenerate(values: IGeradorNumerosFormValues) {
    console.log(values)
  }

  return { form, handleGenerate }
}
