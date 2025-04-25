import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MyCardContainerProps {
  children?: React.ReactNode;
  className?: string;
}
export default function MyCardContainer({
  children,
  className,
}: MyCardContainerProps) {
  return (
    <Card className={cn("border-t w-48 h-48", className)}>
      <CardHeader>Drop here!</CardHeader>
      <CardContent className="border-t py-2">{children}</CardContent>
    </Card>
  );
}
