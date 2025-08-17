import { useContext } from "react";
import type { RaceContextType } from "../../types/RacingSimulator";
import { RaceContext } from "../../context/RaceContext";
import Table from "./Table";
import Leaderboard from "./Leaderboard";

const RacingSimulator = () => {
  const { drivers, isRacing, startRace, resetRace } =
    useContext<RaceContextType>(RaceContext);

  const isFinished = true;

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-3xl font-bold">F1 Racing Simulator</h1>

      {!isFinished ? (
        <>
          <div className="flex flex-col gap-2">
            <p className="text-lg">Experience the thrill of F1 racing!</p>
            <div className="mt-4 flex gap-4">
              <button
                className="px-2 py-2 rounded-lg bg-blue-950 text-white  hover:bg-blue-950/80 cursor-pointer disabled:bg-blue-950/50 disabled:border-blue-950/50 disabled:cursor-not-allowed"
                onClick={startRace}
                disabled={isRacing}
              >
                Start Simulation
              </button>
              <button
                className="px-2 py-2 border-2 rounded-lg bg-white text-blue-950 border-blue-950 hover:bg-gray-100 cursor-pointer"
                onClick={resetRace}
              >
                Reset Simulation
              </button>
            </div>
          </div>

          {isRacing ? <Table drivers={drivers} /> : null}
        </>
      ) : (
        <Leaderboard drivers={drivers} />
      )}
    </div>
  );
};

export default RacingSimulator;
