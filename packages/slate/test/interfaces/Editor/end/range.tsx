/** @jsx jsx */
import { Editor } from '@moonship-fe/slate';
import { jsx } from '../../..';

export const input = (
  <editor>
    <block>one</block>
  </editor>
);
export const test = (editor) => {
  return Editor.end(editor, {
    anchor: { path: [0, 0], offset: 1 },
    focus: { path: [0, 0], offset: 2 },
  });
};
export const output = { path: [0, 0], offset: 2 };
