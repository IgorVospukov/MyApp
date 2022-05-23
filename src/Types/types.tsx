import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackScreenProps<T extends keyof StackParamList> =
  NativeStackScreenProps<StackParamList, T>;

export type StackParamList = {
  ProfileScreen: undefined;
  Page1: undefined;
  Page2: undefined;
};
export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof StackParamList>
  >;
export type HomeTabParamList = {
  Home: undefined;
  Foto: undefined;
  Other: NavigatorScreenParams<StackParamList>;
};
export interface IData {
  id: string;
  title: string;
  url: string;
}
declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
