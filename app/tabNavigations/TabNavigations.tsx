import { ProfileScreen } from "../screen/ProfileScreen";
import { HomeCategoriesScreen } from "../screen/HomeCategoriesScreen";
import { CartScreen } from "../screen/CartScreen";
import { NotificationScreen } from "../screen/NotificationScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
export const TabsNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeCategoriesScreen"
        component={HomeCategoriesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={25} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="cart" size={25} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" size={25} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="person-circle" size={25} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
};
