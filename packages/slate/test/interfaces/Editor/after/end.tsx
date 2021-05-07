/** @jsx jsx */

import { Editor } from '@moonship-fe/slate';
import { jsx } from '../../..';

export const input = (
  <editor>
    <block>one</block>
    <block>two</block>
  </editor>
);

export const test = (editor) => {
  return Editor.after(editor, [1, 0]);
};

export const output = undefined;
