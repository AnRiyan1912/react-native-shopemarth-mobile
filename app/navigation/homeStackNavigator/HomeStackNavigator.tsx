import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeCategoriesScreen } from "../../screen/HomeCategoriesScreen";
import { CategoryListDataScreen } from "../../screen/components/list/CategoryListDataScreen";

const HomeStack = createNativeStackNavigator();

export const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeCategories">
      <HomeStack.Screen
        name="HomeCategories"
        component={HomeCategoriesScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="AllCategoriesData"
        component={CategoryListDataScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};
