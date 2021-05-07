import { Operation } from '@moonship-fe/slate';

export const input = [];
export const test = (value) => {
  return Operation.isOperationList(value);
};
export const output = true;
