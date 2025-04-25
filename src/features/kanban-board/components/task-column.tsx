import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Column } from "@/features/kanban-board/kanban-board.types";
import { cn } from "@/lib/utils";
import { UniqueIdentifier } from "@dnd-kit/core";
import { Grip, Trash2 } from "lucide-react";
import { CSSProperties, Ref } from "react";

interface ColumnContainerProps {
  style?: CSSProperties;
  className?: string;
  column: Column<string, string>;
  columnId: UniqueIdentifier;
  children?: React.ReactNode;
  ref?: Ref<HTMLDivElement>;
  onClickDelete?: (columnId: UniqueIdentifier) => void;
}
export default function TaskColumn({
  style,
  className,
  column,
  columnId,
  children,
  ref,
  onClickDelete,
}: ColumnContainerProps) {
  return (
    <Card
      style={style}
      className={cn("h-full shrink-0 basis-[300px] gap-2", className)}
      ref={ref}
    >
      <CardHeader className="sticky top-0 border-b [.border-b]:pb-1">
        <CardTitle>{column.data}</CardTitle>
        <CardDescription>ID: {columnId}</CardDescription>
        <div className="flex items-center gap-1 pb-2">
          <Button
            size="icon"
            variant="outline"
            className="cursor-grab group-hover:cursor-grabbing"
          >
            <Grip />
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => onClickDelete?.(columnId)}
          >
            <Trash2 /> Delete
          </Button>
        </div>
      </CardHeader>

      <CardContent className="overflow-hidden p-0">{children}</CardContent>
    </Card>
  );
}
