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
import { authStateRegister } from "../state/AuthState";
import { AuthModelRegister } from "../models/AuthModels";
import { authRegisterCustomer } from "../services/AuthServices";
import IconIonio from "react-native-vector-icons/Ionicons";

export const RegisterScreen = ({ navigation }) => {
  const {
    errors,
    handleAuthInput,
    showErorMessage,
    setShowErrorMessage,
    authInput,
    setAuthInput,
    handleShowPassword,
    showPassword,
  } = authStateRegister();

  const handleRegister = async (errors: AuthModelRegister) => {
    const hashError = Object.values(errors).some;
    (error) => error.length > 0;

    if (hashError) {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      setAuthInput({
        customerName: "",
        username: "",
        password: "",
        email: "",
        mobilePhone: "",
        address: "",
      });
    }
    const response = await authRegisterCustomer(authInput);
  };

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
                placeholder="Username"
                placeholderTextColor={"white"}
                onChangeText={(text) => {
                  handleAuthInput("username", text);
                }}
                value={authInput.username}
              />
            </View>
            {showErorMessage && (
              <Text style={styles.messageErrorInput}>{errors.username}</Text>
            )}
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Email"
                placeholderTextColor={"white"}
                onChangeText={(text) => {
                  handleAuthInput("email", text);
                }}
                value={authInput.email}
              />
            </View>
            {showErorMessage && (
              <Text style={styles.messageErrorInput}>{errors.email}</Text>
            )}
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Password"
                placeholderTextColor={"white"}
                secureTextEntry={showPassword}
                onChangeText={(text) => handleAuthInput("password", text)}
              />
              <TouchableOpacity
                onPress={() => handleShowPassword()}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "white",
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  padding: 8,
                }}
              >
                {showPassword ? (
                  <IconIonio name="eye-off" style={{ fontSize: 17 }} />
                ) : (
                  <IconIonio name="eye" style={{ fontSize: 17 }} />
                )}
              </TouchableOpacity>
            </View>
            {showErorMessage && (
              <Text style={styles.messageErrorInput}>{errors.password}</Text>
            )}
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Your Name"
                placeholderTextColor={"white"}
                onChangeText={(text) => {
                  handleAuthInput("customerName", text);
                }}
                value={authInput.customerName}
              />
            </View>
            {showErorMessage && (
              <Text style={styles.messageErrorInput}>
                {errors.customerName}
              </Text>
            )}
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Addrees"
                placeholderTextColor={"white"}
                onChangeText={(text) => {
                  handleAuthInput("address", text);
                }}
                value={authInput.address}
              />
            </View>
            {showErorMessage && (
              <Text style={styles.messageErrorInput}>{errors.address}</Text>
            )}
            <View style={styles.sectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Phone Number"
                placeholderTextColor={"white"}
                onChangeText={(text) => {
                  handleAuthInput("mobilePhone", text);
                }}
                value={authInput.mobilePhone}
              />
            </View>
            {showErorMessage && (
              <Text style={styles.messageErrorInput}>{errors.mobilePhone}</Text>
            )}
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
                  onPress={() => handleRegister(errors)}
                >
                  <Text style={{ fontWeight: "600" }}>Register</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 5,
                    justifyContent: "center",
                  }}
                >
                  <Text>Have account?</Text>
                  <TouchableOpacity
                    style={{
                      borderBottomColor: "#c9e5f2",
                      borderBottomWidth: 1,
                    }}
                    onPress={() => navigation.navigate("LoginScreen")}
                  >
                    <Text style={{ color: "white", marginLeft: 4 }}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};

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
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    width: "100%",
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
  messageErrorInput: {
    color: "#c71a1a",
  },
});
