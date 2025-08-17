import type { Driver } from "../../types/RacingSimulator";

const Leaderboard = ({ drivers }: { drivers: Driver[] }) => {
  const parseTotalTime = (totalTime: number) => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold">Race Finished!</h2>
      <p className="text-lg">Here are the final results:</p>

      {drivers
        .sort((a, b) => a.totalTime - b.totalTime)
        .map(({ driver_number, full_name, totalTime }, index) => (
          <div key={driver_number} className="mt-2">
            <span className="font-bold">{`${index + 1}. ${full_name}`}</span>
            <span className="ml-2">{`Total Elapsed Time: ${parseTotalTime(
              totalTime
            )}`}</span>
          </div>
        ))}
    </div>
  );
};

export default Leaderboard;
