import { View, Text, TouchableOpacity } from "react-native";

import IconAwesome from "react-native-vector-icons/FontAwesome";
import IconAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconMaterialComonity from "react-native-vector-icons/MaterialCommunityIcons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import { Header } from "./Header";
import { useNavigation } from "@react-navigation/native";

export const HomeCategoriesScreen = ({ navigation }) => {
  const nav = useNavigation();
  return (
    <View style={styles.mainBody}>
      <Header navigation={navigation} />
      <View style={styles.containerCategory}>
        <View>
          <Text style={{ fontSize: 23, fontWeight: "800", color: "#ffffff" }}>
            Categories
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.sectionCategory}>
            <IconAwesome name="cart-arrow-down" style={{ fontSize: 25 }} />
            <Text style={{ fontSize: 17 }}>New Arrivals</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.sectionCategory}
            onPress={() =>
              navigation.navigate("Root", { screen: "ClothesScreen" })
            }
          >
            <IconAwesome5 name="tshirt" style={{ fontSize: 23 }} />
            <Text style={{ fontSize: 17 }}>Clothes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.sectionCategory}>
            <IconAwesome5 name="shopping-bag" style={{ fontSize: 25 }} />
            <Text style={{ fontSize: 17 }}>Bags</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.sectionCategory}>
            <IconMaterialComonity
              name="shoe-sneaker"
              style={{ fontSize: 25 }}
            />
            <Text style={{ fontSize: 17 }}>Shoes</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.sectionCategory}>
            <IconMaterialIcons name="electric-bolt" style={{ fontSize: 25 }} />
            <Text style={{ fontSize: 17 }}>Electronics</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    width: "100%",
    backgroundColor: "#42a1c9",
    padding: 25,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  buttonBack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  containerCategory: {
    marginTop: 40,
  },
  sectionCategory: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    marginTop: 20,
    padding: 22,
    borderRadius: 20,
    gap: 10,
  },
});
