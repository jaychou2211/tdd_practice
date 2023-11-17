import { expect, test, describe } from 'vitest'
import fizzBuzz from '../fizzBuzz'

describe('FizzBuzz', () => {
  test('return4_whenInput4', () => {
    expect(fizzBuzz(4)).toBe(4)
  }),

  test('returnFizz_whenInput3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })

  test('returnBuzz_whenInput5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  })

  test('returnFizzBuzz_whenInput15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })
})


