// @flow
import type { TypeId } from './types';

export const isMatchingType = (
  droppableType: TypeId,
  draggableType: TypeId,
): boolean => {
  if (droppableType === draggableType) {
    return true;
  }

  const a = droppableType.split(':');
  const b = draggableType.split(':');
  console.log({ a, b });

  return b.some((t) => a.indexOf(t) !== -1);
};
