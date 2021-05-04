import { Path } from '@moonship-fe/slate'

export const input = {
  path: [0],
  another: [1, 2],
}
export const test = ({ path, another }) => {
  return Path.endsBefore(path, another)
}
export const output = true
