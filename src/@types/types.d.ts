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
};

type WeatherItemType = {
  id: string;
  day: string;
  maxValue: string;
  minValue: string;
};

type WeatherSliderItemType = {
  id: string;
  clock: string;
  value: string;
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
};
