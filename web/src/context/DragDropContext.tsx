import { createContext, useState, type ReactNode } from "react";
import type { DragDropContextType, DragItem } from "../types/DragDrop";

export const DragDropContext = createContext<DragDropContextType>({
  dragItems: [],
  setDragItemPosition: () => {},
});

export const DragDropProvider = ({ children }: { children: ReactNode }) => {
  const [dragItems, setDragItems] = useState<DragItem[]>(
    Array.from({ length: 5 }, (_, index) => ({
      id: `item-${index + 1}`,
      position: { x: 0, y: 0, lastX: 0, lastY: 0 },
      inside: false,
    }))
  );

  const setDragItemPosition = (dragItem: DragItem) => {
    setDragItems((prevItems) =>
      prevItems.map((item) =>
        item.id === dragItem.id ? { ...item, ...dragItem } : item
      )
    );
  };

  return (
    <DragDropContext.Provider value={{ dragItems, setDragItemPosition }}>
      {children}
    </DragDropContext.Provider>
  );
};
