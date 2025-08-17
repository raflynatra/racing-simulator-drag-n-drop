import { useContext, useRef } from "react";
import { useDrop } from "react-dnd";
import { DragDropContext } from "../../context/DragDropContext";
import Item from "./Item";

const ContainerCar = () => {
  const { dragItems, setDragItemPosition } = useContext(DragDropContext);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "item",
    drop: (item: { id: string }, monitor) => {
      const clientOffset = monitor.getSourceClientOffset();
      const containerRect = containerRef.current?.getBoundingClientRect();

      if (clientOffset && containerRect) {
        const newPosition = {
          x: clientOffset.x - Math.round(containerRect.left),
          y: clientOffset.y - Math.round(containerRect.top),
        };

        const isInvalid =
          newPosition.x < 0 ||
          newPosition.y < 0 ||
          newPosition.x + 100 > containerRect.width ||
          newPosition.y + 100 > containerRect.height;

        const isCollide = dragItems.some((dragItem) => {
          if (dragItem.id === item.id || !dragItem.inside) return false;

          return (
            dragItem.position.x < newPosition.x + 100 &&
            dragItem.position.x + 100 > newPosition.x &&
            dragItem.position.y < newPosition.y + 100 &&
            dragItem.position.y + 100 > newPosition.y
          );
        });

        if (!isInvalid && !isCollide) {
          setDragItemPosition({
            id: item.id,
            position: newPosition,
            inside: true,
          });
        }
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return drop(
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center border-2 border-dashed border-gray-300 w-[600px] h-[300px] ${
        isActive ? "bg-gray-100" : ""
      }`}
    >
      {dragItems
        .filter((item) => item.inside)
        .map((item) => (
          <div
            key={item.id}
            className="absolute"
            style={{
              left: item.position.x,
              top: item.position.y,
            }}
          >
            <Item
              key={item.id}
              id={item.id}
              name={`Item ${item.id.split("-")[1]}`}
            />
          </div>
        ))}
      <p className="font-semibold text-gray-300">Container Car</p>
    </div>
  );
};

export default ContainerCar;
