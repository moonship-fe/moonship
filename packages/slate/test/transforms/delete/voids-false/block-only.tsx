/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate';
import { jsx } from '../../..';

export const run = (editor) => {
  Transforms.delete(editor);
};
export const input = (
  <editor>
    <block void>
      <cursor />
    </block>
  </editor>
);
export const output = <editor />;
