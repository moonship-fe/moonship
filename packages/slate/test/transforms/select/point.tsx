/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate';
import { jsx } from '../..';

export const run = (editor) => {
  Transforms.select(editor, {
    path: [0, 0],
    offset: 1,
  });
};
export const input = (
  <editor>
    <block>
      <cursor />
      one
    </block>
  </editor>
);
export const output = (
  <editor>
    <block>
      o<cursor />
      ne
    </block>
  </editor>
);
