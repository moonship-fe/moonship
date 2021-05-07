import { Path } from '@moonship-fe/slate';

export const input = [0, 1, 2];
export const test = (path) => {
  return Path.ancestors(path, { reverse: true });
};
export const output = [[0, 1], [0], []];
