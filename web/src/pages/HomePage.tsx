import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="px-20 py-16 min-h-[calc(100vh-4rem)] flex flex-col gap-10 items-center justify-center h-full">
      <h1 className="text-4xl font-bold">Welcome to The Website!</h1>
      <div className="flex gap-5">
        <Link
          className="p-5 border-2 rounded-xl border-blue-950 font-semibold hover:bg-blue-950 hover:text-white"
          to="/f1"
        >
          F1 Simulator
        </Link>
        <Link
          className="p-5 border-2 rounded-xl border-blue-950 font-semibold hover:bg-blue-950 hover:text-white"
          to="/drag-drop"
        >
          Drag & Drop
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
