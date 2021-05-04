import { Path } from '@moonship-fe/slate'

export const input = {
  path: [0],
  another: [0, 1],
}
export const test = ({ path, another }) => {
  return Path.compare(path, another)
}
export const output = 0
