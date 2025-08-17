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
