import React, { useState } from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ marginTop: 22}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{marginTop: 50, backgroundColor: 'white', padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5}}>
          <Text>Hello World!</Text>

          <TouchableHighlight
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

export default App;
