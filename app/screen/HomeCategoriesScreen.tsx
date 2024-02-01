import { View, Text, TouchableOpacity } from "react-native";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import IconAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconMaterialComonity from "react-native-vector-icons/MaterialCommunityIcons";
import IconMaterialIcons from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import { Header } from "./Header";
import * as SecureStorage from "expo-secure-store";
import categories from "../dataDumy/category.json";

export const HomeCategoriesScreen = ({ navigation }) => {
  const token = SecureStorage.getItem("auth");
  console.log(token);
  return (
    <View style={styles.mainBody}>
      <Header navigation={navigation} />
      <View style={styles.containerCategory}>
        <View>
          <Text style={{ fontSize: 23, fontWeight: "800", color: "#ffffff" }}>
            Categories
          </Text>
        </View>
        {categories.categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.sectionCategory}
            onPress={() =>
              category.name == "All categories"
                ? navigation.navigate("AllCategoryDataScreen")
                : ""
            }
          >
            {category.name === "Clothes" && (
              <IconAwesome name="cart-arrow-down" style={{ fontSize: 25 }} />
            )}
            {category.name === "Bags" && (
              <IconAwesome5 name="shopping-bag" style={{ fontSize: 25 }} />
            )}

            {category.name === "T-shirt" && (
              <IconAwesome5 name="tshirt" style={{ fontSize: 23 }} />
            )}
            {category.name === "Shoes" && (
              <IconMaterialComonity
                name="shoe-sneaker"
                style={{ fontSize: 25 }}
              />
            )}
            {category.name === "Electronics" && (
              <IconMaterialIcons
                name="electric-bolt"
                style={{ fontSize: 25 }}
              />
            )}
            {category.name === "All categories" && (
              <IconMaterialIcons
                name="density-small"
                style={{ fontSize: 25 }}
              />
            )}
            <Text style={{ fontSize: 17 }}>{category.name}</Text>
          </TouchableOpacity>
        ))}
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
