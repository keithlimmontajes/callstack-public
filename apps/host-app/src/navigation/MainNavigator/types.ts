import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamList = {
  Host: undefined;
  Home: undefined;
  Rewards: undefined;
  Account: undefined;
  Accounts: undefined;
  Activities: undefined;
  Notifications: undefined;
  Payment: undefined;
  Landers: undefined;
  UnderConstruction: undefined;
  Onboarding: undefined;
  HomeStack: undefined;
  HomeDetails: undefined;
  NotificationPromo: undefined;
  Notification: undefined;
  NotificationFeedback: undefined;
  NotificationStock: undefined;
  NotificationOrder: undefined;
  NotificationHelp: undefined;
  Membership: undefined;
  MembershipMainScreen: undefined;
  ActivityHome: undefined;
  ActivityDetails: undefined;
  MembershipApplication: undefined;
  AddressBook: undefined;
  ChatWithUs: undefined;
  MyReviews: undefined;
  EditProfile: undefined;
  MembershipRenewal: undefined;
  CardExtension: undefined;
};

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;
