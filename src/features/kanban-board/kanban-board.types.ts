import { UniqueIdentifier } from "@dnd-kit/core";

export type Item<T> = {
  id: UniqueIdentifier;
  data: T;
};

export type Column<T, E> = {
  data: T;
  children: Item<E>[];
};

export type Data<T, E> = {
  [key: UniqueIdentifier]: Column<T, E>;
};
