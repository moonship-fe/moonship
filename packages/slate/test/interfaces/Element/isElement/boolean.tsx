import { Element } from '@moonship-fe/slate';

export const input = true;
export const test = (value) => {
  return Element.isElement(value);
};

export const output = false;
