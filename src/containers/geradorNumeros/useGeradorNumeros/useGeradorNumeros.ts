import { useCallback, useState } from 'react'

import type { IGeradorNumerosFormValues } from '../types'
import { generateNumbers } from './generateNumbers'

export function useGeradorNumeros() {
  const [loading, setLoading] = useState(false)
  const [numbers, setNumbers] = useState<number[]>([])

  const handleGenerate = useCallback(
    (values: IGeradorNumerosFormValues) => {
      setLoading(true)

      const newNumbers = generateNumbers(values)

      setTimeout(() => {
        setNumbers(newNumbers)
        setLoading(false)
      }, 200)
    },
    [generateNumbers],
  )

  return { loading, numbers, handleGenerate, setNumbers }
}
