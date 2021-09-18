import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamListLogout = {
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  InitialSetup: undefined;
};

type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamListLogout>;
