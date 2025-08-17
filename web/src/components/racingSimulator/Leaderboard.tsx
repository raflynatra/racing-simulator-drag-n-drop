import type { Driver } from "../../types/RacingSimulator";

const Leaderboard = ({ drivers }: { drivers: Driver[] }) => {
  const parseTotalTime = (totalTime: number) => {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="mt-5 w-1/2">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Race Finished!</h2>
        <p className="text-lg">Here are the final results:</p>
      </div>

      <div className="mt-10">
        {drivers
          .sort((a, b) => a.totalTime - b.totalTime)
          .map(({ driver_number, full_name, totalTime }, index) => (
            <div
              key={driver_number}
              className={`flex justify-between mt-2 p-5 rounded-lg ${
                index === 0
                  ? "bg-[gold]"
                  : index === 1
                  ? "bg-[silver]"
                  : index === 2
                  ? "bg-[#cd7f32]"
                  : "bg-gray-100"
              }`}
            >
              <div>
                <p className="font-bold">{full_name}</p>
                <p className="font-bold">{`#${driver_number}`}</p>
              </div>
              <span className="ml-2">{`Total Elapsed Time: ${parseTotalTime(
                totalTime
              )}`}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Leaderboard;
