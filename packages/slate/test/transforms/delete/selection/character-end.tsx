/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate';
import { jsx } from '../../..';

export const run = (editor) => {
  Transforms.delete(editor);
};
export const input = (
  <editor>
    <block>
      wor
      <anchor />d<focus />
    </block>
  </editor>
);
export const output = (
  <editor>
    <block>
      wor
      <cursor />
    </block>
  </editor>
);
