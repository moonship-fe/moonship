import { Text } from '@moonship-fe/slate'

export const input = {
  text: { text: '', bold: true, italic: true },
  props: { bold: true },
}
export const test = ({ text, props }) => {
  return Text.matches(text, props)
}
export const output = true
