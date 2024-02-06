import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function ModalComponent() {
  let modalState = useSelector((state) => state.modal.isOpen);
  return (
    <View>
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
}

const styles = StyleSheet.create({});
