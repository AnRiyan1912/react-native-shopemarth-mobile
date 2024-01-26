import { StyleSheet, Text, View } from "react-native";

export const NotificationScreen = () => {
  return (
    <View style={styles.mainBody}>
      <Text>Ini keranjang</Text>
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
});
