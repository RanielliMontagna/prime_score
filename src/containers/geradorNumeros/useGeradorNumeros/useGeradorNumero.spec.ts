import { generateNumbers } from './generateNumbers'

describe('useGeradorNumeros', () => {
  it('should be able to generate numbers', () => {
    const numbers = generateNumbers({
      amount: 10,
      max: 100,
      min: 1,
      duplicates: false,
    })

    expect(numbers).toHaveLength(10)
    expect(numbers).toEqual(expect.arrayContaining([expect.any(Number)]))
  })

  it('should be able to generate numbers with duplicates', () => {
    const numbers = generateNumbers({
      amount: 50,
      max: 100,
      min: 1,
      duplicates: true,
    })

    expect(numbers).toHaveLength(50)
    expect(numbers).toEqual(expect.arrayContaining([expect.any(Number)]))
  })

  it('should be able to generate numbers without duplicates', () => {
    const numbers = generateNumbers({
      amount: 100,
      max: 100,
      min: 1,
      duplicates: false,
    })

    expect(numbers).toHaveLength(100)
    expect(numbers).toEqual(expect.arrayContaining([expect.any(Number)]))
  })
})
