import { cn } from '@/lib/utils';
import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';
import MyCardContainer from './my-card-container';

interface MyDroppableCardContainerProps {
  children?: React.ReactNode;
  className?: string;
  id: UniqueIdentifier;
}
export default function MyDroppableCardContainer({
  children,
  className,
  id,
}: MyDroppableCardContainerProps) {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <MyCardContainer
      ref={setNodeRef}
      className={cn({ 'border-amber-500': isOver }, className)}
    >
      {children}
    </MyCardContainer>
  );
}
