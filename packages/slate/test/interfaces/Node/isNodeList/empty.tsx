import { Node } from '@moonship-fe/slate'

export const input = []
export const test = value => {
  return Node.isNodeList(value)
}
export const output = true
