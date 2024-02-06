import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../redux/transaction";

const NewBill = () => {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();

  const expenseSubmit = () => {
    let newExpense = {
      description,
      amount,
    };
    dispatch(
      addExpense({
        description: description,
        amount: amount,
      })
    );

    setDescription();
    setAmount();
  };

  return (
    <View style={styles.container}>
      <View style={styles.transactionTop}>
        <Text style={styles.transactionTopFont}>ADD TRANSACTION</Text>
      </View>
      <View>
        <TextInput
          style={styles.transactionTextInput}
          placeholder="Description"
          onChangeText={setDescription}
          value={description}
        ></TextInput>
        <TextInput
          style={styles.transactionTextInput}
          placeholder="Amount"
          onChangeText={setAmount}
          value={amount}
          keyboardType="numeric"
        ></TextInput>
      </View>
      <Button
        style={styles.transactionBtnColor}
        title="SUBMIT"
        onPress={expenseSubmit}
      ></Button>
    </View>
  );
};

export default NewBill;

const styles = StyleSheet.create({
  container: {
    marginTop:
      Platform.OS === "android" ? StatusBar.currentHeight : SafeAreaView,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },

  transactionTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  transactionTopFont: {
    fontSize: 20,
    fontWeight: "bold",
  },

  transactionTextInput: {
    borderRadius: 5,
    padding: 8,
    height: 50,
    borderBottomColor: "black",
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },

  transactionBtnColor: {
    height: 60,
  },
});
