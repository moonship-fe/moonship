import { withReact } from '@moonship-fe/slate-react';
import { withHistory } from '@moonship-fe/slate-history';
import { createEditor } from '@moonship-fe/slate';

export default () => {
  const editor = withReact(withHistory(createEditor()));
  return editor;
};
