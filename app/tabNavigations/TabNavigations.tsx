import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeCategoriesScreen } from "../screen/HomeCategoriesScreen";
import { TouchableOpacity } from "react-native";
import { CartScreen } from "../screen/CartScreen";
import { NotificationScreen } from "../screen/NotificationScreen";
import { ProfileScreen } from "../screen/ProfileScreen";
const Tab = createBottomTabNavigator();
import Icon from "react-native-vector-icons/Ionicons";

export const TabsNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name="HomeCategoriesScreen"
        component={HomeCategoriesScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={25} color={color} />
          ),
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
        }}
      />
    </Tab.Navigator>
  );
};
