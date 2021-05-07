/** @jsx jsx  */
import { Node } from '@moonship-fe/slate';
import { jsx } from '@moonship-fe/slate-hyperscript';

export const input = (
  <element>
    <text>one</text>
    <text>two</text>
  </element>
);
export const test = (value) => {
  return Node.string(value, [1]);
};
export const output = `onetwo`;
