import { Path } from '@moonship-fe/slate'

export const input = {
  path: [0, 1, 2],
  another: [1],
}
export const test = ({ path, another }) => {
  return Path.isDescendant(path, another)
}
export const output = false
