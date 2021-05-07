/** @jsx jsx  */
import { Node } from '@moonship-fe/slate';
import { jsx } from '@moonship-fe/slate-hyperscript';

export const input = (
  <editor>
    <element>
      <text />
    </element>
  </editor>
);
export const test = (value) => {
  return Node.descendant(value, [0]);
};
export const output = input.children[0];
