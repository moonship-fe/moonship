import { Node } from '@moonship-fe/slate'

export const input = {
  children: [],
  custom: true,
}
export const test = value => {
  return Node.isNode(value)
}
export const output = true
