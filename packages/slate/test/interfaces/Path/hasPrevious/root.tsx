import { Path } from '@moonship-fe/slate';

export const input = [0, 0];
export const test = (path) => {
  return Path.hasPrevious(path);
};
export const output = false;
