import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Transactions = () => {
  const [modalState, setModalState] = useState(false);

  let dispatch = useDispatch();
  let transactions = useSelector((state) => state.expense);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.TransactionItem}>
        <View>
          {item.income ? (
            <MaterialCommunityIcons
              name="cash-multiple"
              size={24}
              color="#000080"
            />
          ) : (
            <MaterialCommunityIcons
              name="cash-plus"
              size={24}
              color="#ff4500"
            />
          )}
        </View>
        <View style={styles.TransactionsItemValues}>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.TransactionsItemValues}>
          <Text>{item.amount}</Text>
        </View>
        <View>
          <MaterialCommunityIcons name="delete" size={24} color="red" />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.Transactions}>
      <View>
        <Text style={styles.TransactionTopText}>Transactions</Text>
      </View>
      <View style={{ height: "auto" }}>
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <Modal visible={modalState} transparent={true} animationType="slide">
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.transactionModalText}>Add Transaction</Text>
              <View>
                <TextInput placeholder="Transaction name"></TextInput>
                <TextInput placeholder="Amount"></TextInput>
              </View>
              <TouchableOpacity onPress={() => setModalState(false)}>
                <Text>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Transactions;

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  Transactions: {
    height: height - (height / 4 + 80),
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    backgroundColor: "white",
    width: "100%",
  },
  TransactionTopText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  TransactionItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    backgroundColor: "#b0e0e6",
    marginTop: 5,
    paddingBottom: 10,
    padding: 4,
    borderRadius: 5,
  },
  TransactionsItemValues: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 40,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : SafeAreaView,
    // marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 5,
    width: "80%",
  },
});
