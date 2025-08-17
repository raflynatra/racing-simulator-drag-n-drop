import { useContext } from "react";
import ContainerCar from "./ContainerCar";
import Item from "./Item";
import { DragDropContext } from "../../context/DragDropContext";

const DragDrop = () => {
  const { dragItems } = useContext(DragDropContext);
  return (
    <div className="flex flex-col gap-10 items-center justify-center">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold text-center">Drag & Drop</h1>
        <p className="text-center">
          Drag and drop your items onto the container car!
        </p>
      </div>

      <div>
        <div className="overflow-hidden clear-both">
          <ContainerCar />
        </div>

        <div className="flex justify-between mt-5">
          {dragItems.map((item) =>
            !item.inside ? (
              <Item
                key={item.id}
                id={item.id}
                name={`Item ${item.id.split("-")[1]}`}
              />
            ) : (
              <div key={item.id} className="w-[100px] h-[100px]" />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
