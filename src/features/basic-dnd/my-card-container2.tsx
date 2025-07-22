import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useDroppable } from '@dnd-kit/core';

interface MyCardContainerProps {
  children?: React.ReactNode;
  className?: string;
}
export default function MyCardContainer2({
  children,
  className,
}: MyCardContainerProps) {
  const { setNodeRef, isOver } = useDroppable({ id: 'droppable-2' });

  return (
    <Card
      ref={setNodeRef}
      className={cn(
        'border-t w-48 h-48',
        { 'border-amber-500': isOver },
        className
      )}
    >
      <CardHeader>Drop here!</CardHeader>
      <CardContent className="border-t py-2">{children}</CardContent>
    </Card>
  );
}
