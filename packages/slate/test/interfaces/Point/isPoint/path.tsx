import { Point } from '@moonship-fe/slate'

export const input = [0, 1]
export const test = value => {
  return Point.isPoint(value)
}
export const output = false
