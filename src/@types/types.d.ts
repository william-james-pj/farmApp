import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamListLogout = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
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
