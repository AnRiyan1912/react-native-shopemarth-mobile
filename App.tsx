import React, { useEffect, useState } from "react";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import { Provider } from "react-redux";
import { store } from "./app/redux/store/Store";
import { constans } from "./app/utils/Constants";
import { TabsNavigation } from "./app/tabNavigations/TabNavigations";
import { AuthStack } from "./app/stackNavigation/StackNavogation";

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
    <Provider store={store}>
      <ClerkProvider
        publishableKey={constans.publishKeyClerk}
        tokenCache={tokenCache}
      >
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
      </ClerkProvider>
    </Provider>
  );
}
