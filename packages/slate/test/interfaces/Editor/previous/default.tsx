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
  return Editor.previous(editor, { at: [1] });
};
export const output = [<block>one</block>, [0]];
