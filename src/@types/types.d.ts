import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamListLogout = {
  Welcome: undefined;
  Login: undefined;
  SingUp: undefined;
};

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamListLogout>;
