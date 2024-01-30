import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export const Header = ({ navigation }) => {
  const nav = useNavigation();
  return (
    <View>
      <View style={styles.sectionHeader}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.navigate("Auth")}
        >
          <Icon name="arrow-back" style={{ color: "white", fontSize: 17 }} />
          <Text style={{ color: "white", fontSize: 17 }}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonBack}>
          <Icon name="search" style={{ color: "white", fontSize: 17 }} />
          <Text style={{ color: "white", fontSize: 17 }}>Search</Text>
        </TouchableOpacity>
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
