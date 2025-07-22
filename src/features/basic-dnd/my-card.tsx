'use client';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useDraggable } from '@dnd-kit/core';
import { CSSProperties, Ref } from 'react';

type DraggableProps = Pick<
  ReturnType<typeof useDraggable>,
  'listeners' | 'attributes'
>;

interface MyCardProps extends Partial<DraggableProps> {
  children?: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  ref?: Ref<HTMLDivElement>;
}
export default function MyCard({
  children,
  className,
  ref,
  style,
  listeners,
  attributes,
}: MyCardProps) {
  return (
    <Card
      style={style}
      ref={ref}
      className={cn('w-32', className)}
      {...listeners}
      {...attributes}
    >
      <CardHeader>Drag: {children}</CardHeader>
    </Card>
  );
}
