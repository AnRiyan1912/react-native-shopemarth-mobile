import React, { useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store/store";
import { formatToRupiah } from "../utils/formatTorupiah";
import IconEntypo from "react-native-vector-icons/Entypo";
import { removeProduct } from "../redux/slices/feaeture/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveCartItem = () => {
    dispatch(removeProduct(item.id));
  };

  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.product.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productTitle}>{item.product.title}</Text>
        <Text style={styles.productPrice}>
          {formatToRupiah(item.product.price)}
        </Text>
        <Text style={styles.quantity}>Quantity: {item.qty}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <TouchableOpacity onPress={() => handleRemoveCartItem()}>
          <IconEntypo name="minus" style={{ fontSize: 20 }} />
        </TouchableOpacity>

        <TouchableOpacity>
          <IconEntypo name="plus" style={{ fontSize: 20 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const CartScreen = () => {
  const cart = useSelector((state: RootStore) => state.cart);

  return (
    <View style={styles.mainBody}>
      <Text
        style={{
          marginTop: 40,
          textAlign: "center",
          fontWeight: "700",
          color: "white ",
          fontSize: 25,
          marginBottom: 10,
        }}
      >
        Your cart
      </Text>
      <FlatList
        data={cart.items}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => {
          return <CartItem item={item} />;
        }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.totalPrice}>
          Total: {formatToRupiah(cart.totalPrice)}
        </Text>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 10,
            paddingRight: 23,
            paddingLeft: 23,
            paddingTop: 5,
            paddingBottom: 5,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 16 }}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#42a1c9",
    padding: 10,
  },
  cartItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: { width: 1, height: 2 },
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 5,
  },
  quantity: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});
