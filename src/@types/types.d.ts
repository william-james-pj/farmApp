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
  Guide: undefined;
  Profile: undefined;
  Sensor: undefined;
  Setting: undefined;
  Weather: undefined;
  QRCodeRead: undefined;
};

type SensorItemType = {
  id: string;
  name: string;
  color: string;
  values?: {
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
  location?: {
    country: string;
    state: string;
    city: string;
  };
  geometry?: {
    longitude?: string;
    latitude?: string;
  };
  sensors?: Array<SensorItemType>;
};

type setInitialSetupProps = {
  farmName: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
};

type setUpdateProfileProps = {
  name: string;
  farmName: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
};

type CurrentWeatherType = {
  dt?: string;
  dtMill?: number;
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
  dtMill?: number;
  maxValue?: string;
  minValue?: string;
  icon?: string;
};

type GuideBoxType = {
  id: string;
  title: string;
  description: string;
};

type tempUnitType = "celsius" | "fahrenheit";
