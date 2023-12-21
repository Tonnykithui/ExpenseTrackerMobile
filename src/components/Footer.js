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
  StatusBar
} from "react-native";
import { useState, useEffect } from "react";

export const CreateNew = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <View style={styles.buttonBackground}>
      <TouchableOpacity onPress={() => setModalState(true)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : SafeAreaView
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
