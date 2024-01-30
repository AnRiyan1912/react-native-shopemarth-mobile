import { useAuth, useUser } from "@clerk/clerk-expo";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = ({ navigation }) => {
  const { isLoaded, isSignedIn, user } = useUser();

  const { signOut } = useAuth();
  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("auth");
    navigation.navigate("LoginScreen");
  };
  return (
    <View style={styles.mainBody}>
      <View>
        <View>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.sectionIconUploadPhoto}>
          <IconAwesome name="pencil" style={styles.iconUploadPhoto} />
        </View>
      </View>
      <View style={styles.sectionTextUpload}>
        <Text style={styles.textUploadImage}>
          {user?.firstName
            ? user.firstName + " " + user.lastName
            : "Upload image"}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonLogout}
          onPress={() => {
            handleLogout(), signOut();
          }}
        >
          <Text style={styles.textLogout}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#42a1c9",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  sectionIconUploadPhoto: {
    position: "absolute",
    bottom: -8,
    right: -8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
  },
  iconUploadPhoto: {
    fontSize: 20,
  },
  sectionTextUpload: {
    marginTop: 20,
  },
  textUploadImage: {
    color: "white",
  },
  textLogout: {
    color: "black",
  },
  buttonLogout: {
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
  },
});
