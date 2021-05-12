// @flow
import React from 'react';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { colors } from '@atlaskit/theme';
import { DragDropContext, Droppable, Draggable } from '../../../src';
import { initialState, State } from './initial-state';

const Container = styled.div`
  background-color: ${colors.B100};
  // min-height: 100vh;
  /* like display:flex but will allow bleeding over the window width */
  // min-width: 100vw;
  // display: inline-flex;
`;

const SectionContainer = styled.div`
  background-color: ${colors.G50};
  padding: 0.5rem 1rem;
`;
const LineContainer = styled.div`
  background-color: ${colors.N30};
  padding: 0.5rem 1rem;
`;

const LineView = ({ data, index }: any) => {
  return (
    <Draggable
      draggableId={`draggable-line-${data.id}`}
      index={index}
      type="LINE"
    >
      {(provided) => (
        <LineContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3>{data.text}</h3>
        </LineContainer>
      )}
    </Draggable>
  );
};

const SectionView = ({ section, lines, index }: any) => {
  const linage = lines.map((l: any, i: number) => (
    <LineView key={`line-${l.id}`} data={l} index={i} />
  ));
  return (
    <Draggable
      draggableId={`draggable-section-${section.id}`}
      index={index}
      type="SECTION"
    >
      {(provided) => (
        <SectionContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h3>{section.name}</h3>
          <Droppable
            droppableId={`droppable-section-${section.id}`}
            type="LINE"
          >
            {(lineProvided) => (
              <div
                className="lines-droparea"
                {...lineProvided.droppableProps}
                ref={lineProvided.innerRef}
              >
                {linage}
                {lineProvided.placeholder}
              </div>
            )}
          </Droppable>
        </SectionContainer>
      )}
    </Draggable>
  );
};

export default class ListWithSections extends React.Component {
  state: State = initialState;

  render() {
    const list = () => {
      const nodes = { ...this.state.sections, ...this.state.lines };
      const nodeViews = this.state.layout.map((l, i) => {
        const item = nodes[l];

        // eslint-disable-next-line no-underscore-dangle
        switch (item.__typename) {
          case 'Section': {
            const lines = item.layout.map((ll) => this.state.lines[ll]);
            return (
              <SectionView
                key={`section-${l}`}
                section={item}
                lines={lines}
                index={i}
              />
            );
          }
          case 'Line': {
            return <LineView key={`line-${l}`} data={item} index={i} />;
          }
          default: {
            return null;
          }
        }
      });

      return nodeViews;
    };

    return (
      <React.Fragment>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable
            droppableId="list"
            type="LINE:SECTION"
            // ignoreContainerClipping={Boolean(containerHeight)}
            // isCombineEnabled={isCombineEnabled}
          >
            {(provided: DroppableProvided) => (
              <Container ref={provided.innerRef} {...provided.droppableProps}>
                {list()}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
        <Global
          styles={css`
            body {
              background: ${colors.B200};
            }
          `}
        />
      </React.Fragment>
    );
  }
}
