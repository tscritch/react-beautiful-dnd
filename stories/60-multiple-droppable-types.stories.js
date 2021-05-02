// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import MultipleDroppableTypes from './src/multiple-droppable-types/quote-app';
import { generateQuoteMap } from './src/data';

const data = {
  medium: generateQuoteMap(100),
  large: generateQuoteMap(500),
};

storiesOf(
  'Multiple droppable types',
  module,
).add('with multiple droppable types', () => (
  <MultipleDroppableTypes initial={data.medium} />
));
