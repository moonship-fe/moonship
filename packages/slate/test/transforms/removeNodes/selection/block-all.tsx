/** @jsx jsx */
import { Transforms } from '@moonship-fe/slate';
import { jsx } from '../../..';

export const input = (
  <editor>
    <block>
      on
      <anchor />e
    </block>
    <block>
      t<focus />
      wo
    </block>
  </editor>
);
export const run = (editor) => {
  Transforms.removeNodes(editor);
};
export const output = <editor />;
