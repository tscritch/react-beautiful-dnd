// @flow
import type { TypeId } from './types';

export const isMatchingType = (typeA: TypeId, typeB: TypeId): boolean => {
  if (Array.isArray(typeA)) {
    if (Array.isArray(typeB)) {
      return typeA.forEach((t) => typeB.indexOf(t) !== -1) !== -1;
    }
    return typeA.indexOf(typeB) !== -1;
  }
  if (Array.isArray(typeB)) {
    if (Array.isArray(typeA)) {
      return typeB.forEach((t) => typeA.indexOf(t) !== -1) !== -1;
    }
    return typeB.indexOf(typeA) !== -1;
  }
  return typeA === typeB;
};
