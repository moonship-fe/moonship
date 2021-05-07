import { Path } from '@moonship-fe/slate';

export const input = true;
export const test = (path) => {
  return Path.isPath(path);
};
export const output = false;
