import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  LandersHome: undefined;
  LandersDetails: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;
