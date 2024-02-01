import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
const Imagebg = require("../../assets/bg-login.png");

export const SuccessRegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.mainBody}>
      <View style={styles.section}>
        <Image source={Imagebg} style={styles.bgImage} />
        <View style={styles.sectionText}>
          <Text style={styles.textShope}>Shopemarth</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textRegistered}>Success registered</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textGo}>Go to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#42a1c9",
  },
  section: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionText: {
    position: "absolute",
    top: 2,
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  bgImage: {
    width: 200,
    height: 200,
    objectFit: "cover",
  },
  textShope: {
    color: "white",
    fontWeight: "700",
    fontSize: 17,
  },
  textRegistered: {
    color: "white",
    fontWeight: "700",
    fontSize: 28,
    marginTop: 80,
  },
  button: {
    marginTop: 20,
    backgroundColor: "white",
    padding: 18,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  textGo: {
    fontWeight: "600",
    fontSize: 17,
  },
});
