import React, { useState } from 'react';
import { Descendant } from '@moonship-fe/slate';
import { Editable, Slate } from '@moonship-fe/slate-react';
import { createEditor } from '@moonship-fe/core';

export interface Props {
  onChange?: (value: Descendant[]) => {};
  value?: Descendant[];
}

const MoonShip: React.FC<Props> = (props) => {
  const [value, setValue] = useState<Descendant[]>([]);
  const editor = createEditor();

  return (
    <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
      <Editable
        // renderElement={renderElement}
        placeholder="Write some markdown..."
        spellCheck
        autoFocus
      />
    </Slate>
  );
};

export default MoonShip;
