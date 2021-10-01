import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamListLogout = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
};

type RootStackParamListSetup = {
  InitialSetup: undefined;
};

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamListLogout>;

type RootStackParamListLogged = {
  Home: undefined;
  Sensor: undefined;
  Profile: undefined;
  Weather: undefined;
};

type SensorItemType = {
  id: string;
  name: string;
  color: string;
  values: {
    humidity?: string;
    lighting?: string;
    soil?: string;
    temp?: string;
    wind?: string;
  };
};

type DropdownDataType = {
  id: number;
  label: string;
  value: string;
}[];

type UserType = {
  id: string;
  name?: string;
  farmName?: string;
  avatar?: string;
  config?: {
    tempUnit: string;
  };
  location?: {
    country: string;
    state: string;
    city: string;
  };
  geometry?: {
    longitude?: string;
    latitude?: string;
  };
};

type setInitialSetupProps = {
  farmName: string;
  config: {
    tempUnit: string;
  };
  location: {
    country: string;
    state: string;
    city: string;
  };
};

type setUpdateProfileProps = {
  name: string;
  farmName: string;
  config: {
    tempUnit: string;
  };
  location: {
    country: string;
    state: string;
    city: string;
  };
};

type CurrentWeatherType = {
  dt?: string;
  date?: string;
  humidity?: string;
  windSpeed?: string;
  temp?: string;
  weather?: {
    main?: string;
    icon?: string;
  };
};

type HourlyWeatherType = {
  dt?: string;
  id: string;
  icon?: string;
  temp?: string;
  time?: string;
};

type DailyWeatherType = {
  id: string;
  dt?: string;
  date?: string;
  maxValue?: string;
  minValue?: string;
  icon?: string;
};
