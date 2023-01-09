import { StackNavigationProp } from "@react-navigation/stack";
import { Filter } from "../screens/SearchFiltersScreen";

export type GlobalParamList = {
  Detail: {};
  Onboarding: {};
  Home: {};
  Section: {
    title?: string;
  };
  Search: {
    activeFilters?: Filter[];
  };
  SearchFilters: {
    activeFilters?: Filter[];
  };
  SignIn: {};
  SignUp: {};
  VerifyAccount: {};
  More: {};
  Favorites: {};
  Checkout: {};
  AddPaymentMethod: {};
  AddDeliveryAddress: {};
};

export type ScreenNavigationProp = StackNavigationProp<GlobalParamList>;
