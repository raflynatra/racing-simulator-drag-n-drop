import type { Driver } from "../../types/RacingSimulator";

const Table = ({ drivers }: { drivers: Driver[] }) => {
  return (
    <table className="w-3/4 border-collapse mt-5">
      <thead>
        <tr className="border-b border-black">
          <th>Position</th>
          <th className="text-left">Driver</th>
          <th>Speed (km/h)</th>
          <th>Distance (m)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {drivers
          .sort((a, b) => b.distance - a.distance)
          .map(
            ({ distance, driver_number, full_name, speed, status }, index) => (
              <tr key={driver_number} className="border-b border-gray-300">
                <td className="text-center">{index + 1}</td>
                <td>{full_name}</td>
                <td className="text-center">{speed}</td>
                <td className="text-center">{distance}</td>
                <td className="text-center">{status}</td>
              </tr>
            )
          )}
      </tbody>
    </table>
  );
};

export default Table;
