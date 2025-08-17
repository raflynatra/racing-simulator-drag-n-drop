import { useContext } from "react";
import type { RaceContextType } from "../../types/RacingSimulator";
import { RaceContext } from "../../context/RaceContext";
import Table from "./Table";
import Leaderboard from "./Leaderboard";

const RacingSimulator = () => {
  const { drivers, isRacing, isFinished, startRace, resetRace } =
    useContext<RaceContextType>(RaceContext);

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl font-bold">F1 Racing Simulator</h1>

      <div className="flex flex-col gap-2">
        <p className="text-lg">Experience the thrill of F1 racing!</p>
        <button
          className={`mt-4 px-2 py-2 border-2 rounded-lg ${
            isRacing && isFinished
              ? "bg-blue-950 text-white border-blue-950 hover:bg-white hover:text-blue-950"
              : "bg-white text-blue-950 border-blue-950 hover:bg-blue-950 hover:text-white"
          } cursor-pointer`}
          onClick={!isRacing && !isFinished ? startRace : resetRace}
        >
          {!isRacing && !isFinished ? "Start Simulation" : "Reset Simulation"}
        </button>
      </div>

      {isRacing ? (
        <Table drivers={drivers} />
      ) : isFinished ? (
        <Leaderboard drivers={drivers} />
      ) : null}
    </div>
  );
};

export default RacingSimulator;
