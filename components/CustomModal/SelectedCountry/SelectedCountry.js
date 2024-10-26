import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "@/store/constants";
import { countries } from "@/data/countries"; // Chemin vers votre fichier data.js

const SelectedCountry = ({ onSelectCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState("SN"); // Sénégal par défaut

  const handleSelectCountry = (code) => {
    setSelectedCountry(code);
    onSelectCountry(code);
  };

  const renderItem = ({ item }) => {
    const isSelected = item.code === selectedCountry;
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleSelectCountry(item.code)}
      >
        <Text style={styles.countryName}>{item.name}</Text>
        {isSelected ? (
          <MaterialIcons name="check-circle" size={24} color={COLORS.primary} />
        ) : (
          <MaterialIcons name="radio-button-unchecked" size={24} color={COLORS.black} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        extraData={selectedCountry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
    justifyContent: 'space-between',
  },
  countryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectedCountry;
