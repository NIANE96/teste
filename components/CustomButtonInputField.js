// CustomButton.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import commonStyles from '../styles/common/common.style';

const CustomButtonInputField = ({ title, options, onSelect, style, textStyle }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePress = () => {
    setIsModalVisible(true);
  };

  const handleSelect = (option) => {
    setIsModalVisible(false);
    onSelect(option);
  };

  return (
    <View>
      <TouchableOpacity style={[commonStyles.button, style]} onPress={handlePress}>
        <Text style={[commonStyles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
  },
});

export default CustomButtonInputField;
