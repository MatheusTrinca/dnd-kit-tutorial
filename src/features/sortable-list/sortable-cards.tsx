"use client";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import CardItem from "./card-item";
import { CardList } from "./sortable-list.types";

export default function SortableCards() {
  const [cards, setCards] = useState<CardList>([
    { id: 1, name: "Card A" },
    { id: 2, name: "Card B" },
    { id: 3, name: "Card C" },
  ]);

  return (
    <Card className="w-60 p-2 relative left-1/2 top-10 -translate-x-1/2">
      {cards.map((card) => (
        <CardItem key={card.id} card={card} />
      ))}
    </Card>
  );
}
