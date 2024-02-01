import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ToastAndroid,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { authLogin } from "../services/AuthServices";
import { authStateLogin } from "../state/AuthState";
import IconIonio from "react-native-vector-icons/Ionicons";
import Spinner from "react-native-loading-spinner-overlay";
import React, { useEffect, useState } from "react";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarnUpBrowser";
import * as WebBrowser from "expo-web-browser";
import * as SecureStore from "expo-secure-store";

WebBrowser.maybeCompleteAuthSession();
const LoginScreen = ({ navigation }) => {
  useWarmUpBrowser();

  const [tokenCheck, setTokenCheck] = useState<string>("");
  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("auth");

      setTokenCheck(token);
    } catch (err) {
      console.log(err);
    }
  };

  const saveToken = (key: string, token: string) => {
    try {
      SecureStore.setItem(key, token);
    } catch (err) {
      console.log(err);
    }
  };
  // tokenCheck ? navigation.navigate("Home") : navigation.navigate("LoginScreen");
  useEffect(() => {
    getToken();
  }, []);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    authInput,
    handleAuthInput,
    showPassword,
    handleShowPassword,
    setAuthInput,
  } = authStateLogin();

  const handlePressLogin = async () => {
    try {
      setLoading(true);

      setTimeout(async () => {
        const response = await authLogin(authInput);

        if (response == undefined) {
          setLoading(false);
          ToastAndroid.showWithGravity(
            "Wrong username or password!",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }

        if (response?.status == 200 && authInput.password.length > 0) {
          saveToken("auth", response.data.data.token);
          navigation.navigate("Home");
          setAuthInput({
            username: "",
            password: "",
          });
          ToastAndroid.showWithGravity(
            "Success login",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          setLoading(false);
        }
      }, 1200);
    } catch (err) {
      console.log(err);
    }
  };

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

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
        <Spinner
          textContent="loading...."
          visible={loading}
          textStyle={{ color: "#ffffff" }}
          animation="fade"
        />
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
                onChangeText={(text) => handleAuthInput("username", text)}
              />
            </View>
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
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <View>
                {authInput.username.length < 0 &&
                authInput.password.length < 0 ? (
                  <TouchableOpacity
                    style={styles.buttonLoginStyle}
                    onPress={() => handlePressLogin()}
                    disabled
                  >
                    <Text style={{ fontWeight: "600" }}>Login</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.buttonLoginStyle}
                    onPress={() => handlePressLogin()}
                  >
                    <Text style={{ fontWeight: "600" }}>Login</Text>
                  </TouchableOpacity>
                )}

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
                onPress={onPress}
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
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  inputStyle: {
    flex: 1,
    color: "white",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
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
});
