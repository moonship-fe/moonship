/** @jsx jsx */
import { Editor } from '@moonship-fe/slate';
import { jsx } from '../../..';

export const input = (
  <editor>
    <block>one</block>
  </editor>
);
export const test = (editor) => {
  return Editor.node(editor, [0]);
};
export const output = [<block>one</block>, [0]];
