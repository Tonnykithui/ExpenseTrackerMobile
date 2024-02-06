import {
  View,
  Text,
  StyleSheet,
  Modal,
  Button,
  TouchableOpacity,
  TextInput,
  Platform,
  SafeAreaView,
} from "react-native";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { modalOpen } from "../redux/modal";

export const CreateNew = () => {
  const dispatch = useDispatch();

  let openModal = () => {
    dispatch(
      modalOpen({
        modal: true,
      })
    );
  };

  return (
    <View style={styles.buttonBackground}>
      <TouchableOpacity onPress={openModal}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CreateNew;

const styles = StyleSheet.create({
  buttonBackground: {
    height: 50,
    marginTop: 5,
    backgroundColor: "white",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 5,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  transactionModalText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

{
  /* <View
        style={{flex: 1}}
        >
          <Text>THIS IS A MODAL!!</Text>
          <Button
          title='CLOSE'
          onPress={() => setModalState(false)}
          ></Button>
        </View> */
}
{
  /* <Modal visible={modalState} transparent={true} animationType="slide">
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
      </Modal> */
}
