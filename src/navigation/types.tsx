import type { RouteProp as NRouteProp } from '@react-navigation/native';

import type { HomeStackParamList } from './home-navigator';

export type RootStackParamList = HomeStackParamList; //  & FooStackParamList & BarStackParamList
// very important to type check useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackParamList {}
  }
}

export type RouteProp<T extends keyof HomeStackParamList> = NRouteProp<
  HomeStackParamList,
  T
>;
