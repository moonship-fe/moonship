import { Path } from '@moonship-fe/slate'

export const input = {
  path: [0, 1, 2],
  another: [],
}
export const test = ({ path, another }) => {
  return Path.compare(path, another)
}
export const output = 0
