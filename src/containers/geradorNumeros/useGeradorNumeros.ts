import { useCallback, useState } from 'react'
import { Random } from 'random-js'

import type { IGeradorNumerosFormValues } from './types'

export function useGeradorNumeros() {
  const [loading, setLoading] = useState(false)
  const [numbers, setNumbers] = useState<number[]>([])

  const handleGenerate = useCallback(
    async ({
      min, // O número mínimo que pode ser gerado
      max, // O número máximo que pode ser gerado
      amount, // A quantidade de números que serão gerados
      duplicates, // Números podem se repetir
    }: IGeradorNumerosFormValues) => {
      setLoading(true)

      const random = new Random()
      const newNumbers: number[] = []

      for (let i = 0; i < amount; i++) {
        const number = random.integer(min, max)

        if (duplicates) {
          newNumbers.push(number)
        } else {
          if (!newNumbers.includes(number)) {
            newNumbers.push(number)
          } else {
            i--
          }
        }
      }

      setTimeout(() => {
        setNumbers(newNumbers)
        setLoading(false)
      }, 200)
    },
    [],
  )

  return { handleGenerate, loading, numbers, setNumbers }
}
