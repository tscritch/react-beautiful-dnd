// @flow
export type Section = {|
  __typename: 'Section',
  name: string,
  layout: string[],
|};

export type Line = {|
  __typename: 'Line',
  text: string,
|};

export type State = {|
  sections: Section[],
  lines: Line[],
  layout: string[],
|};

export const initialState: State = {
  sections: {
    section1: {
      __typename: 'Section',
      id: 'section1',
      name: 'Section A',
      layout: ['line1', 'line2', 'line3'],
    },
    section2: {
      __typename: 'Section',
      id: 'section2',
      name: 'Section B',
      layout: ['line4', 'line5', 'line6'],
    },
  },
  lines: {
    line1: {
      __typename: 'Line',
      id: 'line1',
      text: 'Line A',
    },
    line2: {
      __typename: 'Line',
      id: 'line2',
      text: 'Line B',
    },
    line3: {
      __typename: 'Line',
      id: 'line3',
      text: 'Line C',
    },
    line4: {
      __typename: 'Line',
      id: 'line4',
      text: 'Line D',
    },
    line5: {
      __typename: 'Line',
      id: 'line5',
      text: 'Line E',
    },
    line6: {
      __typename: 'Line',
      id: 'line6',
      text: 'Line F',
    },
    line7: {
      __typename: 'Line',
      id: 'line7',
      text: 'Line G',
    },
    line8: {
      __typename: 'Line',
      id: 'line8',
      text: 'Line H',
    },
  },
  layout: ['line8', 'line7', 'section1', 'section2'],
};
