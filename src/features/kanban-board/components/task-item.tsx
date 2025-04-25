import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Item } from "@/features/kanban-board/kanban-board.types";
import { CSSProperties, Ref } from "react";

interface CardItemProps {
  style?: CSSProperties;
  className?: string;
  item: Item<string>;
  ref?: Ref<HTMLDivElement>;
}
export default function TaskItem({
  className,
  style,
  item,
  ref,
}: CardItemProps) {
  return (
    <Card style={style} className={className} ref={ref}>
      <CardHeader>
        <CardTitle>{item.data}</CardTitle>
        <CardDescription>ID: {item.id}</CardDescription>
      </CardHeader>
    </Card>
  );
}
