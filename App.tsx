import React from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import { Provider } from "react-redux";
import { constans } from "./app/utils/Constants";
import { TabsNavigation } from "./app/navigation/tabNavigations/TabNavigations";
import { AuthStack } from "./app/navigation/stackNavigation/StackNavigation";
import { store } from "./app/redux/store/store";

const tokenCache = {
  getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return null;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider
      publishableKey={constans.publishKeyClerk}
      tokenCache={tokenCache}
    >
      <Provider store={store}>
        <NavigationContainer>
          <SignedIn>
            <TabsNavigation />
          </SignedIn>
        </NavigationContainer>

        <NavigationContainer>
          <SignedOut>
            <AuthStack />
          </SignedOut>
        </NavigationContainer>
      </Provider>
    </ClerkProvider>
  );
}
