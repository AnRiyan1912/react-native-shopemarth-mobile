import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginScreen from "./app/screen/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterScreen } from "./app/screen/RegisterScreen";
import { TabsNavigation } from "./app/tabNavigations/TabNavigations";
import { constans } from "./app/utils/Constants";
import * as SecureStore from "expo-secure-store";
import { ClothesScreen } from "./app/screen/clothes/ChothesScree";
import { Provider } from "react-redux";
import { store } from "./app/redux/store/Store";
import { HomeCategoriesScreen } from "./app/screen/HomeCategoriesScreen";

const Stack = createNativeStackNavigator();

const tokenChace = {
  getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ClothesScreen" component={ClothesScreen} />
      <Stack.Screen name="TabNavigations" component={TabsNavigation} />
      <Stack.Screen name="Home" component={HomeCategoriesScreen} />
    </Stack.Navigator>
  );
};

// const Root = () => {
//   return (
//     <Stack.Navigator initialRouteName="Root">
//       {/* <Stack.Screen name="TabNavigations" component={TabsNavigation} /> */}

//     </Stack.Navigator>
//   );
// };

export default function App() {
  return (
    <Provider store={store}>
      <ClerkProvider
        publishableKey={constans.publishKeyClerk}
        tokenCache={tokenChace}
      >
        <NavigationContainer>
          <Auth />
        </NavigationContainer>
      </ClerkProvider>
    </Provider>

    // <Provider store={store}>
    //   <ClerkProvider
    //     publishableKey={constans.publishKeyClerk}
    //     tokenCache={tokenChace}
    //   >
    //     <NavigationContainer>
    //       <SignedOut>
    //         <Stack.Screen name="Auth" component={Auth}></Stack.Screen>
    //       </SignedOut>
    //       <SignedIn>
    //         <Stack.Screen name="Root" component={Root}></Stack.Screen>
    //         <TabsNavigation />
    //       </SignedIn>
    //     </NavigationContainer>
    //   </ClerkProvider>
    // </Provider>
  );
}
