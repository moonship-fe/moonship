import { Path } from '@moonship-fe/slate'

export const input = {
  path: [1, 1, 2],
  another: [0],
}
export const test = ({ path, another }) => {
  return Path.isAncestor(path, another)
}
export const output = false
