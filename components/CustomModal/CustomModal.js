import React from "react";
import { View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import useOrientation from "@/hooks/useOrientation";
import Button from "@/components/Button/Button";
import { COLORS } from "@/store/constants";

// Composant Modal générique
const CustomModal = ({
  visible,
  onClose,
  title,
  description,
  buttonTitle,
  buttonAction,
  children, // Ajout de children pour permettre l'insertion de contenu supplémentaire
}) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.modalContent]}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>{title}</Text>
          <TouchableOpacity onPress={onClose}>
            <MaterialIcons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.modalDescription}>
          {description}
        </Text>
        {/* Rendre l'insertion de contenu externe possible */}
        {children} 
        <Button title={buttonTitle} onPress={buttonAction} type="primary" />
      </View>
    </Modal>
  );
};

const styles = ScaledSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: wp('5%'),
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalTitle: {
    fontSize: '14@s',
    fontFamily: 'Roboto-Bold',
  },
  modalDescription: {
    marginVertical: hp('2.5%'),
  },
});

export default CustomModal;
