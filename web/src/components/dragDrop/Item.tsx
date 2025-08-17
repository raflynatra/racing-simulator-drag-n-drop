import { useContext } from "react";
import { useDrag } from "react-dnd";
import { DragDropContext } from "../../context/DragDropContext";

interface ItemProps {
  id: string;
  name: string;
}

const Item = ({ id, name }: ItemProps) => {
  const { setDragItemPosition } = useContext(DragDropContext);
  const [{ isDragging }, drag] = useDrag({
    type: "item",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (!monitor.didDrop())
        return setDragItemPosition({
          id: item.id,
          position: { x: 0, y: 0 },
          inside: false,
        });
    },
  });

  const getBackgroundColor = (index: number) => {
    switch (index) {
      case 1:
        return "#ffb900";
      case 2:
        return "#00bc7d";
      case 3:
        return "#2b7fff";
      case 4:
        return "#005f78";
      case 5:
        return "#e7000b";
      default:
        return "white";
    }
  };

  return drag(
    <div
      className="flex items-center justify-center w-[100px] h-[100px]"
      style={{
        backgroundColor: getBackgroundColor(Number(id.split("-")[1])),
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <p className="font-semibold text-black">{name}</p>
    </div>
  );
};

export default Item;
