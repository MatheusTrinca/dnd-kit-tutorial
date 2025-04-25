import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MyCardProps {
  children?: React.ReactNode;
  className?: string;
}
export default function MyCard({ children, className }: MyCardProps) {
  return (
    <Card className={cn("w-32", className)}>
      <CardHeader>Drag: {children}</CardHeader>
    </Card>
  );
}
