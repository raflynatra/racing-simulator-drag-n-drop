import { BrowserRouter, Routes, Route } from "react-router-dom";
import RacingSimulatorPage from "./pages/RacingSimulatorPage";
import HomePage from "./pages/HomePage";
import DragAndDropPage from "./pages/DragAndDropPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/f1" element={<RacingSimulatorPage />} />
        <Route path="/drag-drop" element={<DragAndDropPage />} />
      </Routes>
    </BrowserRouter>
  );
}
