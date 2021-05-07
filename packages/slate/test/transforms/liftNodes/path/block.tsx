/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate';
import { jsx } from '../../..';

export const run = (editor) => {
  Transforms.liftNodes(editor, { at: [0, 0] });
};
export const input = (
  <editor>
    <block>
      <block>word</block>
    </block>
  </editor>
);
export const output = (
  <editor>
    <block>word</block>
  </editor>
);
