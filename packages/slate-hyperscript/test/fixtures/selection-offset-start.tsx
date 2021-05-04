/** @jsx jsx */
import { jsx } from '@moonship-fe/slate-hyperscript'

export const input = (
  <editor>
    <element>word</element>
    <selection>
      <anchor path={[0, 0]} offset={0} />
      <focus path={[0, 0]} offset={0} />
    </selection>
  </editor>
)
export const output = {
  children: [
    {
      children: [
        {
          text: 'word',
        },
      ],
    },
  ],
  selection: {
    anchor: {
      path: [0, 0],
      offset: 0,
    },
    focus: {
      path: [0, 0],
      offset: 0,
    },
  },
}
