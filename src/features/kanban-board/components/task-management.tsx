"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Data } from "@/features/kanban-board/kanban-board.types";
import { UniqueIdentifier } from "@dnd-kit/core";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskColumn from "./task-column";
import TaskItem from "./task-item";

const initialData: Data<string, string> = {
  ["todo-id"]: {
    data: "Todo",
    children: [
      { id: "todo-item-1", data: "Todo 1" },
      { id: "todo-item-2", data: "Todo 2" },
      { id: "todo-item-3", data: "Todo 3" },
      { id: "todo-item-4", data: "Todo 4" },
    ],
  },

  ["inprogress-id"]: {
    data: "In Progress",
    children: [
      { id: "in-progress-item-1", data: "In progress 1" },
      { id: "in-progress-item-2", data: "In progress 2" },
      { id: "in-progress-item-3", data: "In progress 3" },
    ],
  },

  ["done-id"]: {
    data: "Done",
    children: [],
  },
};

export default function TaskManagement() {
  const [data, setData] = useState<Data<string, string>>(initialData);
  const [columnIds, setColumnIds] = useState<UniqueIdentifier[]>(
    Object.keys(data)
  );

  function handleClickAddColumn() {
    const newData = {
      ...data,
      [uuidv4()]: { data: "New column", children: [] },
    };
    setData(newData);
    setColumnIds(Object.keys(newData));
  }

  function handleClickDeleteColumn(columnId: UniqueIdentifier) {
    const newData = { ...data };
    delete newData[columnId];
    setData(newData);
    setColumnIds(Object.keys(newData));
  }

  return (
    <div className="h-full w-full">
      <div className="text-center text-4xl pt-3">Task management</div>

      <ScrollArea className="w-full mt-6">
        <div className="flex gap-4 py-2 px-4 h-[500px] w-full">
          {columnIds.map((columnId) => (
            <TaskColumn
              key={columnId}
              columnId={columnId}
              column={data[columnId]}
              onClickDelete={handleClickDeleteColumn}
            >
              <ScrollArea className="w-full h-full px-2">
                {data[columnId].children.map((item) => (
                  <TaskItem
                    key={item.id}
                    item={item}
                    className="mt-3 first:mt-0"
                  />
                ))}
              </ScrollArea>
            </TaskColumn>
          ))}

          <div className="pr-4">
            <Button onClick={handleClickAddColumn}>
              <CirclePlus /> Add column
            </Button>
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
