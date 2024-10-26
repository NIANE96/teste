import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { fetchCountries } from '@/services/api/countriesApi';
import { COLORS } from "@/store/constants";
import countryTranslations from "@/assets/countryTranslations.json";
import PickerStyles from '@/styles/common/picker.styles';

const CountryPicker = ({ 
  visible, 
  onClose, 
  onSelect, 
  selectedCountry 
}) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countryError, setCountryError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [flagErrors, setFlagErrors] = useState({}); // Gestion des erreurs de drapeau

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountries();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        setCountryError("Erreur lors du chargement des pays.");
        setLoading(false);
      }
    };

    loadCountries();
  }, []);

  const handleSelectCountry = (country) => {
    onSelect(country);
    onClose();
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCountryNameInFrench = (nameInEnglish) => {
    return countryTranslations[nameInEnglish] || nameInEnglish;
  };

  const handleImageError = (cca3) => {
    setFlagErrors(prev => ({ ...prev, [cca3]: true }));
  };

  const getFlagUrl = (flagUrl) => {
    return flagUrl && flagUrl.startsWith('http') ? flagUrl : 'https://example.com/placeholder.png';
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={PickerStyles.modalContainer}>
        <View style={PickerStyles.countryPickerContainer}>
          <TextInput
            style={PickerStyles.searchInput}
            placeholder="Rechercher un pays..."
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : countryError ? (
            <Text>{countryError}</Text>
          ) : (
            <FlatList
              data={filteredCountries}
              keyExtractor={(item) => item.cca3}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={PickerStyles.countryItem}
                  onPress={() => handleSelectCountry(item)}
                >
                  <Image
                    source={{ uri: getFlagUrl(item.flags.png) }} // Utilisation du format PNG pour les drapeaux
                    style={PickerStyles.flagImage}
                    onError={() => handleImageError(item.cca3)}
                    //defaultSource={flagErrors[item.cca3] ? require('../../assets/placeholder.png') : null} // Optionnel
                  />
                  <Text style={PickerStyles.countryText}>
                    {getCountryNameInFrench(item.name.common)}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}
          <Pressable onPress={onClose} style={PickerStyles.button}>
            <Text style={PickerStyles.buttonText}>Fermer</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
export default CountryPicker;
