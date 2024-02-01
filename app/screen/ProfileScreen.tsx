import { useAuth, useUser } from "@clerk/clerk-expo";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import * as SecureStore from "expo-secure-store";
import { RootStore } from "../redux/store/store";
import { getInfoCustomerLogin } from "../utils/getInfoCustomerLogin";
import { useSelector } from "react-redux";
const profileImage = require("../../assets/avatar_face.png");

export const ProfileScreen = ({ navigation }) => {
  getInfoCustomerLogin();

  const { isLoaded, isSignedIn, user } = useUser();
  const customer = useSelector((state: RootStore) => state.customer);
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("auth");
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.mainBody}>
      <Text style={styles.textProfile}>Profile</Text>
      <View>
        <View style={styles.sectionImage}>
          <Image source={profileImage} style={styles.profileImage} />
        </View>
        <View style={styles.sectionIconUploadPhoto}>
          <IconAwesome name="pencil" style={styles.iconUploadPhoto} />
        </View>
      </View>

      <View style={styles.sectionTextUpload}>
        <Text style={styles.textUploadImage}>
          {profileImage ? "" : "Upload image"}
        </Text>
      </View>
      <View>
        <Text style={styles.textProfileName}>
          Name:
          {user?.firstName
            ? " " + user.firstName + " " + user.lastName
            : "Upload image" || customer.customerName
            ? " " + customer.customerName
            : ""}
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
    fontWeight: "600",
  },
  buttonLogout: {
    marginTop: 100,
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 6,
  },
  sectionImage: {
    backgroundColor: "white",
    width: 100,
    height: 100,
    padding: 5,
    borderRadius: 10,
  },
  textProfileName: {
    color: "white",
    fontSize: 20,
  },
  textProfile: {
    color: "white",
    fontSize: 26,
    marginBottom: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
});
