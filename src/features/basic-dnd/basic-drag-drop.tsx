'use client';
import { DndContext, DragOverlay, UniqueIdentifier } from '@dnd-kit/core';
import MyCard from './my-card';
import MyCardContainer from './my-card-container';
import { useState } from 'react';
import MyCardContainer2 from './my-card-container2';
import MyDraggableCard from './my-draggable-card';

export default function BasicDragDrop() {
  const [overId, setOverId] = useState<UniqueIdentifier>();

  return (
    <div className="w-full h-full overflow-hidden relative">
      <DndContext id="my-basic-dnd" onDragEnd={e => setOverId(e.over?.id)}>
        {!overId && (
          <MyDraggableCard
            id="drag-1"
            className="absolute top-5 left-5 cursor-grab"
          >
            ID 1
          </MyDraggableCard>
        )}
        <MyCardContainer className="absolute top-20 right-1/4">
          {overId === 'droppable-1' && (
            <MyDraggableCard id="drag-1" className="cursor-grab">
              ID 1
            </MyDraggableCard>
          )}
        </MyCardContainer>
        <MyCardContainer2 className="absolute top-20 right-1/2">
          {overId === 'droppable-2' && (
            <MyDraggableCard id="drag-1" className="cursor-grab">
              ID 1
            </MyDraggableCard>
          )}
        </MyCardContainer2>

        <DragOverlay>
          <MyCard className="cursor-grab">ID 1</MyCard>
        </DragOverlay>
      </DndContext>
    </div>
  );
}
