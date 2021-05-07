import { Element } from '@moonship-fe/slate';

export const input = {
  children: [],
  custom: 'value',
};
export const test = (value) => {
  return Element.isElement(value);
};
export const output = true;
