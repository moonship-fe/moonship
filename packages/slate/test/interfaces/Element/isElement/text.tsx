import { Element } from '@moonship-fe/slate'

export const input = {
  text: '',
}
export const test = value => {
  return Element.isElement(value)
}
export const output = false
