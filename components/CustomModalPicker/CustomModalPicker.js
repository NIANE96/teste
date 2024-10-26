// CustomDatePickerModal.js
import React from 'react';
import { Modal, View, Pressable, Text, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const CustomDatePickerModal = ({ isVisible, onClose, date, onChange, maximumDate, confirmText, cancelText, styles }) => {
  const handleChange = (event, selectedDate) => {
    if (selectedDate) {
      onChange(event, selectedDate);
    }
  };

  // Format date to French
  const formattedDate = date ? format(date, 'dd MMMM yyyy', { locale: fr }) : '';

  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={[defaultStyles.modalContainer, styles?.modalContainer]}>
        <View style={[defaultStyles.datePickerContainer, styles?.datePickerContainer]}>
          <DateTimePicker
            value={date || new Date()}
            mode="date"
            display="spinner"
            onChange={handleChange}
            maximumDate={maximumDate || new Date()}
          />
          <View style={defaultStyles.buttonContainer}>
            <Pressable
              onPress={onClose}
              style={[defaultStyles.button, styles?.button]}
            >
              <Text style={[defaultStyles.buttonText, styles?.buttonText]}>{cancelText || 'Annuler'}</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                onChange(null, date);
                onClose();
              }}
              style={[defaultStyles.button, styles?.button]}
            >
              <Text style={[defaultStyles.buttonText, styles?.buttonText]}>{confirmText || 'Valider'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const defaultStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  datePickerContainer: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CustomDatePickerModal;
