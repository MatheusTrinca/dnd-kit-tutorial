'use client';
import { cn } from '@/lib/utils';
import { UniqueIdentifier, useDraggable } from '@dnd-kit/core';
import { CSSProperties } from 'react';
import MyCard from './my-card';

interface MyCardProps {
  children?: React.ReactNode;
  className?: string;
  id: UniqueIdentifier;
}
export default function MyDraggableCard({
  children,
  className,
  id,
}: MyCardProps) {
  const { setNodeRef, listeners, transform, attributes } = useDraggable({ id });

  const style: CSSProperties | undefined = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <MyCard
      style={style}
      ref={setNodeRef}
      className={cn('w-32', className)}
      listeners={listeners}
      attributes={attributes}
    >
      {children}
    </MyCard>
  );
}
