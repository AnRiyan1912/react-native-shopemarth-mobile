import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screen/LoginScreen";
import { RegisterScreen } from "../../screen/RegisterScreen";
import { TabsNavigation } from "../tabNavigations/TabNavigations";
import { CategoryListDataScreen } from "../../screen/components/list/CategoryListDataScreen";
import { SuccessRegisterScreen } from "../../screen/SuccesRegisterScreen";

const Stack = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        name="SuccessRegisterScreen"
        component={SuccessRegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={TabsNavigation}
      />
      <Stack.Screen
        name="AllCategoryDataScreen"
        options={{ headerShown: false }}
        component={CategoryListDataScreen}
      />
    </Stack.Navigator>
  );
};
