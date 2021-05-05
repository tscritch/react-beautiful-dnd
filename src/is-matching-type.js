// @flow
import type { TypeId } from './types';

export const isMatchingType = (typeA: TypeId, typeB: TypeId): boolean => {
  if (typeA === typeB) {
    return true;
  }

  const a = typeA.split(':');
  const b = typeB.split(':');

  return a.some((t) => b.indexOf(t) !== -1);
};
