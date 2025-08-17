import {
  createContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export interface DriverResponse {
  meeting_key: number;
  session_key: number;
  driver_number: number;
  broadcast_name: string;
  full_name: string;
  name_acronym: string;
  team_name: string;
  team_colour: string;
  first_name: string;
  last_name: string;
  headshot_url: string;
  country_code: string | null;
}

export type RaceStatus = "Ready" | "Racing" | "Pit Stop" | "Finished";

export interface Driver {
  driver_number: number;
  full_name: string;
  speed: number;
  distance: number;
  totalTime: number;
  status: RaceStatus;
}

export interface CarResponse {
  date: string;
  session_key: number;
  meeting_key: number;
  driver_number: number;
  speed: number;
  n_gear: number;
  drs: number;
  throttle: number;
  brake: number;
  rpm: number;
}

export interface RaceContextType {
  drivers: Driver[];
  isRacing: boolean;
  isFinished: boolean;
  startRace: () => void;
  resetRace: () => void;
}

export const RaceContext = createContext<RaceContextType>({
  drivers: [],
  isRacing: false,
  isFinished: false,
  startRace: () => {},
  resetRace: () => {},
});

export const RaceProvider = ({ children }: { children: ReactNode }) => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [isRacing, setIsRacing] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const raceIntervalRef = useRef<number | null>(null);
  const driversRef = useRef<Driver[]>(drivers);
  const tickPendingRef = useRef(false);

  const fetchDrivers = async (): Promise<Driver[]> => {
    try {
      const data: DriverResponse[] = await fetch(
        "https://api.openf1.org/v1/drivers?session_key=latest"
      ).then((res) => res.json());

      const selectedDrivers = data.sort(() => 0.5 - Math.random()).slice(0, 3);
      return selectedDrivers.map((driver) => ({
        driver_number: driver.driver_number,
        full_name: driver.full_name,
        speed: 0,
        distance: 0,
        totalTime: 0,
        status: "Ready",
      }));
    } catch (error) {
      console.error("Error fetching drivers:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchDrivers().then((fetchedDrivers) => {
      setDrivers(fetchedDrivers);
      driversRef.current = fetchedDrivers;
    });
  }, []);

  const fetchCarSpeed = async (driver_number: number) => {
    return fetch(
      `https://api.openf1.org/v1/car_data?session_key=latest&driver_number=${driver_number}`
    )
      .then((res) => res.json())
      .then(
        (data: CarResponse[]) =>
          data[0]?.speed ?? Math.floor(Math.random() * (350 - 150 + 1) + 150)
      )
      .catch(() => Math.floor(Math.random() * (350 - 150 + 1) + 150));
  };

  const startRace = async () => {
    if (isFinished) resetRace();

    setIsRacing(true);

    raceIntervalRef.current = setInterval(() => {
      if (tickPendingRef.current) return; // Skip if previous tick still running
      tickPendingRef.current = true;

      const driverPromises: Promise<Driver>[] = driversRef.current.map(
        (driver) =>
          fetchCarSpeed(driver.driver_number).then((speed) => {
            if (driver.distance >= 5000)
              return { ...driver, status: "Finished" };

            const distance =
              driver.distance + Math.round((speed * 1000) / 3600);
            const totalTime = driver.totalTime + 1;

            return {
              ...driver,
              speed,
              distance,
              totalTime,
              status: distance >= 5000 ? "Finished" : "Racing",
            };
          })
      );

      Promise.all(driverPromises).then((updatedDrivers) => {
        setDrivers(updatedDrivers);
        driversRef.current = updatedDrivers;
        tickPendingRef.current = false;

        if (updatedDrivers.every(({ distance }) => distance >= 5000)) {
          if (raceIntervalRef.current !== null)
            clearInterval(raceIntervalRef.current);
          setIsRacing(false);
          setIsFinished(true);
        }
      });
    }, 1000);
  };

  const resetRace = () => {
    clearInterval(raceIntervalRef.current!);
    setIsRacing(false);
    setIsFinished(false);
    setDrivers([]);

    fetchDrivers().then((drivers) => {
      setDrivers(drivers);
      driversRef.current = drivers;
    });
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (raceIntervalRef.current !== null) {
        clearInterval(raceIntervalRef.current);
      }
    };
  }, []);

  return (
    <RaceContext.Provider
      value={{ drivers, isRacing, isFinished, startRace, resetRace }}
    >
      {children}
    </RaceContext.Provider>
  );
};
