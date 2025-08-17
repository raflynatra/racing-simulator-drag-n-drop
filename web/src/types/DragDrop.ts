export interface DragItem {
  id: string;
  position: {
    x: number;
    y: number;
  };
  inside: boolean;
}

export interface DragDropContextType {
  dragItems: DragItem[];
  setDragItemPosition: (dragItem: DragItem) => void;
}
