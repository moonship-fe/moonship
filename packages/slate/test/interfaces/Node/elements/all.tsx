/** @jsx jsx  */
import { Node } from '@moonship-fe/slate';
import { jsx } from '@moonship-fe/slate-hyperscript';

export const input = (
  <editor>
    <element>
      <text key="a" />
      <text key="b" />
    </element>
  </editor>
);
export const test = (value) => {
  return Array.from(Node.elements(value));
};
export const output = [
  [
    <element>
      <text key="a" />
      <text key="b" />
    </element>,
    [0],
  ],
];
