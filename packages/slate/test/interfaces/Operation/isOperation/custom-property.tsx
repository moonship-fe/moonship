import { Operation } from '@moonship-fe/slate';

export const input = {
  type: 'set_node',
  path: [0],
  properties: {},
  newProperties: {},
  custom: true,
};
export const test = (value) => {
  return Operation.isOperation(value);
};
export const output = true;
