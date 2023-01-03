import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import MoreScreen from "../screens/MoreScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import SearchFiltersScreen from "../screens/SearchFiltersScreen";
import SearchScreen from "../screens/SearchScreen";
import SectionScreen from "../screens/SectionScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import VerifyAccount from "../screens/VerifyAccount";
import { GlobalParamList } from "./GlobalParamList";
import NavBar from "./NavBar";

const GlobalNavigation = () => {
  const Stack = createStackNavigator<GlobalParamList>();
  return (
    <Stack.Navigator initialRouteName="More">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={OnboardingScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignInScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUpScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="VerifyAccount"
        component={VerifyAccount}
      ></Stack.Screen>
      <Stack.Screen
        options={{ header: () => <NavBar></NavBar> }}
        name="Home"
        component={HomeScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ header: () => <NavBar></NavBar> }}
        name="Section"
        component={SectionScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ header: () => <NavBar></NavBar> }}
        name="Search"
        component={SearchScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ header: () => <NavBar></NavBar> }}
        name="SearchFilters"
        component={SearchFiltersScreen}
      ></Stack.Screen>
      <Stack.Screen
        options={{ header: () => <NavBar></NavBar> }}
        name="More"
        component={MoreScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default GlobalNavigation;
