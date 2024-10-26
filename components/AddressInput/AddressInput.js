// AddressInput.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CityPicker from './CityPicker';
const AddressInput = ({ address, setAddress, addressError, setAddressError, city, setCity }) => {
  const [showCityPicker, setShowCityPicker] = useState(false);

  const handleSelectCity = (selectedCity) => {
    setCity(selectedCity);
    setShowCityPicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={commonStylesAuth.label}>Adresse de domicile</Text>
      <View
        style={[
          commonStylesAuth.inputContainer,
          addressError && commonStylesAuth.errorInput,
        ]}
      >
        <TextInput
          style={commonStylesAuth.inputText}
          placeholder="Adresse complète"
          value={address}
          onChangeText={(text) => {
            setAddress(text);
            if (addressError) {
              setAddressError(false);
            }
          }}
        />
      </View>
      {addressError && (
        <Text style={commonStylesAuth.errorText}>{addressError}</Text>
      )}
      <TouchableOpacity
        onPress={() => setShowCityPicker(true)}
        style={[
          commonStylesAuth.inputContainer,
          { marginTop: 8 },
          city && commonStylesAuth.inputText, // Style si une ville est sélectionnée
        ]}
      >
        <Text style={commonStylesAuth.inputText}>
          {city ? city : "Sélectionner une ville"}
        </Text>
      </TouchableOpacity>

      <CityPicker
        visible={showCityPicker}
        onClose={() => setShowCityPicker(false)}
        onSelect={handleSelectCity}
        selectedCity={city}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default AddressInput;
