import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Ref } from 'react';

interface MyCardContainerProps {
  children?: React.ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}
export default function MyCardContainer({
  children,
  className,
  ref,
}: MyCardContainerProps) {
  return (
    <Card ref={ref} className={cn('border-t w-48 h-48', className)}>
      <CardHeader>Drop here!</CardHeader>
      <CardContent className="border-t py-2">{children}</CardContent>
    </Card>
  );
}
