import { DndProvider } from "react-dnd";
import DragDrop from "../components/dragDrop";
import Layout from "../layout";
import { DragDropProvider } from "../context/DragDropContext";
import { HTML5Backend } from "react-dnd-html5-backend";

const DragDropPage = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <DragDropProvider>
        <Layout>
          <DragDrop />
        </Layout>
      </DragDropProvider>
    </DndProvider>
  );
};

export default DragDropPage;
