import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{ alignItems: "center" }}>
              <Image
                style={{
                  width: "100%",
                  height: 200,
                  resizeMode: "contain",
                  padding: 30,
                  marginTop: 5,
                }}
                source={require("../../assets/bg-login.png")}
              ></Image>
              <Text
                style={{
                  position: "absolute",
                  color: "white",
                  marginTop: 10,
                  fontWeight: "700",
                  fontSize: 17,
                }}
              >
                Shopemarth
              </Text>
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Username or email"
                placeholderTextColor={"white"}
              />
            </View>
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                placeholderTextColor={"white"}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <View>
                <TouchableOpacity
                  style={styles.buttonLoginStyle}
                  onPress={() => navigation.navigate("TabsNavigation")}
                >
                  <Text style={{ fontWeight: "600" }}>Login</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Text>Dont'n have account?</Text>
                  <TouchableOpacity
                    style={{
                      borderBottomColor: "#c9e5f2",
                      borderBottomWidth: 1,
                    }}
                    onPress={() => navigation.navigate("RegisterScreen")}
                  >
                    <Text style={{ color: "white", marginLeft: 4 }}>
                      Register
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ marginTop: 20 }}>
              <Icon.Button
                name="google"
                solid
                style={styles.iconGoogle}
                backgroundColor="#ffffff"
                color="black"
              >
                <Text style={{ fontWeight: "700" }}>Continue with google</Text>
              </Icon.Button>
            </View>

            <View style={{ marginTop: 20 }}>
              <Icon.Button name="facebook" solid style={styles.iconFacebook}>
                <Text style={{ fontWeight: "700", color: "white" }}>
                  Continue with facebook
                </Text>
              </Icon.Button>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#42a1c9",
    alignItems: "center",
    width: "100%",
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    height: 40,
    marginTop: 20,
    width: 340,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    width: "100%",
    borderColor: "white",
  },
  buttonLoginStyle: {
    backgroundColor: "#fcfcfc",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 20,
    padding: 10,
    width: "100%",
  },
  textButtonRegister: {
    color: "#fffff",
  },
  iconGoogle: {
    fontSize: 40,
    borderRadius: 10,
    padding: 9,
    flexDirection: "row",
    justifyContent: "center",
  },
  iconFacebook: {
    fontSize: 40,
    borderRadius: 10,
    padding: 9,
    flexDirection: "row",
    justifyContent: "center",
  },
});
