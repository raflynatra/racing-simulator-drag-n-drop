import RacingSimulator from "../components/racingSimulator";
import { RaceProvider } from "../context/RaceContext";
import Layout from "../layout";

const RacingSimulatorPage = () => {
  return (
    <RaceProvider>
      <Layout>
        <RacingSimulator />
      </Layout>
    </RaceProvider>
  );
};

export default RacingSimulatorPage;
