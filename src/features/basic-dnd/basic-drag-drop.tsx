'use client';
import { DndContext, DragOverlay, UniqueIdentifier } from '@dnd-kit/core';
import MyCard from './my-card';
import { useState } from 'react';
import MyDraggableCard from './my-draggable-card';
import MyDroppableCardContainer from './my-droppable-card-container';
import { restrictToWindowEdges } from '@dnd-kit/modifiers';

export default function BasicDragDrop() {
  const [overId, setOverId] = useState<UniqueIdentifier>();

  return (
    <div className="w-full h-full overflow-hidden relative">
      <DndContext
        id="my-basic-dnd"
        onDragEnd={e => setOverId(e.over?.id)}
        modifiers={[restrictToWindowEdges]}
      >
        {!overId && (
          <MyDraggableCard
            id="drag-1"
            className="absolute top-5 left-5 cursor-grab"
          >
            ID 1
          </MyDraggableCard>
        )}
        <MyDroppableCardContainer
          id="droppable-1"
          className="absolute top-20 right-1/4"
        >
          {overId === 'droppable-1' && (
            <MyDraggableCard id="drag-1" className="cursor-grab">
              ID 1
            </MyDraggableCard>
          )}
        </MyDroppableCardContainer>
        <MyDroppableCardContainer
          id="droppable-2"
          className="absolute top-20 right-1/2"
        >
          {overId === 'droppable-2' && (
            <MyDraggableCard id="drag-1" className="cursor-grab">
              ID 1
            </MyDraggableCard>
          )}
        </MyDroppableCardContainer>

        <DragOverlay>
          <MyCard className="border border-amber-500 cursor-grabbing">
            ID 1
          </MyCard>
        </DragOverlay>
      </DndContext>
    </div>
  );
}
