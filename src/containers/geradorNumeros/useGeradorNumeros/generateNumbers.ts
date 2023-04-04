import { Random } from 'random-js'
import { IGeradorNumerosFormValues } from '../types'

export const generateNumbers = ({
  min, // O número mínimo que pode ser gerado
  max, // O número máximo que pode ser gerado
  amount, // A quantidade de números que serão gerados
  duplicates, // Números podem se repetir
}: IGeradorNumerosFormValues) => {
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

  return newNumbers
}
