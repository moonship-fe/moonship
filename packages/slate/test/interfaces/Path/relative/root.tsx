import { Path } from '@moonship-fe/slate'

export const input = {
  path: [0, 1],
  another: [],
}
export const test = ({ path, another }) => {
  return Path.relative(path, another)
}
export const output = [0, 1]
