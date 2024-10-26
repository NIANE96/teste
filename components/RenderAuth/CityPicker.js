import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  Pressable
} from 'react-native';
import citiesData from '@/data/cities.json';
import PickerStyles from '@/styles/common/picker.styles';

const CityPicker = ({ visible, onClose, onSelect, selectedCity }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrer les villes en fonction de la recherche
  const filteredCities = citiesData.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={PickerStyles.modalContainer}>
        <View style={PickerStyles.countryPickerContainer}>
          <TextInput
            style={PickerStyles.searchInput}
            placeholder="Rechercher une ville"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <FlatList
            data={filteredCities}
            keyExtractor={item => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  PickerStyles.countryItem,
                  selectedCity === item.name && PickerStyles.selectedItem
                ]}
                onPress={() => {
                  onSelect(item.name);
                  onClose();
                }}
              >
                <Text style={PickerStyles.countryText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
          <Pressable onPress={onClose} style={PickerStyles.button}>
            <Text style={PickerStyles.buttonText}>Fermer</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
export default CityPicker;
