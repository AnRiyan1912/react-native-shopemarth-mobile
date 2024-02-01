import React, { useState } from "react";
import {
  FlatList,
  SectionList,
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import dataPerCategory from "../../../dataDumy/dataPerCategory.json";
import { Header } from "../../Header";
import { Product } from "../../../models/ProductModels";
import { formatToRupiah } from "../../../utils/formatTorupiah";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { addToChart } from "../../../redux/slices/feaeture/cartSlice";

interface CardProps {
  title: string;
  content: string;
  image: string;
  price: number;
}

const renderSectionHeader = ({ section: { title } }) => {
  return <Text style={styles.sectionHeader}>{title}</Text>;
};

const Card = ({
  title,
  content,
  image,
  price,
  onPress,
}: CardProps & { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.sectionCard}>
        <Image style={styles.cardImage} source={{ uri: image }} />
        <Text style={{ marginTop: 5, fontWeight: "600" }}>{title}</Text>
        <Text>{content}</Text>
        <Text>{formatToRupiah(price)}</Text>
      </View>
    </TouchableOpacity>
  );
};

interface RenderItemProps {
  item: Product;
  openModal: (item: Product) => void;
}
const renderItem = ({ item, openModal }: RenderItemProps) => (
  <Card
    title={item.title}
    content={item.content}
    image={item?.image}
    price={item.price}
    onPress={() => {
      openModal(item);
    }}
  />
);

export const CategoryListDataScreen = ({ navigation }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToChart(selectedItem));
    ToastAndroid.showWithGravity(
      "Success add to cart",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <View style={styles.mainBody}>
      <Modal
        animationType="none"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.modalContent}>
          <Image
            style={styles.imageDetail}
            source={{ uri: selectedItem?.image }}
          />
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: "700", fontSize: 18 }}>
              {selectedItem?.title}
            </Text>
            <Text style={{ fontWeight: "normal", fontSize: 15, marginTop: 14 }}>
              {selectedItem?.content}
            </Text>
            <Text style={{ fontWeight: "600", fontSize: 15 }}>
              {formatToRupiah(selectedItem?.price)}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 30,
              marginTop: 50,
            }}
          >
            <TouchableOpacity
              onPress={() => setShowModal(false)}
              style={styles.clossButton}
            >
              <Text style={styles.textBack}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleAddToCart()}
              style={styles.addToChart}
            >
              <IconFontAwesome
                name="shopping-cart"
                style={{ color: "white", fontSize: 20 }}
              />
              <Text style={styles.textBack}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.sectionForNavbar}>
        <Header navigation={navigation} />
      </View>

      <SectionList
        sections={dataPerCategory.data}
        keyExtractor={(item) => item.id}
        renderSectionHeader={renderSectionHeader}
        renderItem={({ section }) => (
          <FlatList
            data={section.data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => renderItem({ item, openModal })}
            numColumns={2}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    backgroundColor: "#42a1c9",
    flex: 1,
    width: "100%",
  },
  sectionCard: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 196,
    height: 250,
  },
  cardImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    borderRadius: 8,
  },
  sectionHeader: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    marginTop: 20,
    marginLeft: 10,
  },
  sectionForNavbar: {
    marginTop: 10,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  imageDetail: {
    width: "100%",
    height: 300,
    objectFit: "cover",
    borderRadius: 20,
  },
  clossButton: {
    backgroundColor: "#42a1c9",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    paddingTop: 10,
  },
  textBack: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  addToChart: {
    flexDirection: "row",
    backgroundColor: "#42a1c9",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 10,
    paddingTop: 10,
    gap: 10,
  },
});
