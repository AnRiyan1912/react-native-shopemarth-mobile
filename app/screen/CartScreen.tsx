import { StyleSheet, Text, View } from "react-native";
import { CarouselComponent } from "../component/Carousel";

export const CartScreen = () => {
  return (
    <View style={styles.mainBody}>
      <Text>Init Keranjang</Text>
      <CarouselComponent />
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
