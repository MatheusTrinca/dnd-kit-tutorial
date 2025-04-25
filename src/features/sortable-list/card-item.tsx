import { Card, CardContent } from "@/components/ui/card";
import { CSSProperties, Ref } from "react";
import { CardDataItem } from "./sortable-list.types";

interface CardItemProps {
  card: CardDataItem;
  style?: CSSProperties;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}
export default function CardItem({
  card,
  style,
  className,
  ref,
}: CardItemProps) {
  return (
    <Card ref={ref} style={style} className={className}>
      <CardContent>{card.name}</CardContent>
    </Card>
  );
}
