/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate';
import { jsx } from '../../..';

export const run = (editor) => {
  Transforms.delete(editor);
};
export const input = (
  <editor>
    <block>
      wo
      <anchor />
      rd
    </block>
    <block void>
      an
      <focus />
      other
    </block>
  </editor>
);
export const output = (
  <editor>
    <block>
      wo
      <cursor />
    </block>
  </editor>
);
