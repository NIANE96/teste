import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Modal, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getAllCountries } from '../../services/countryService'; // Assurez-vous que ce service renvoie les données correctement

const normalizeString = (str) => {
  return str
    .normalize('NFD') // Décompose les caractères accentués en caractères de base et accents
    .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
    .toLowerCase(); // Convertit en minuscules
};

const CountryPicker = ({ visible, onClose, onSelect }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getAllCountries();
        setCountries(data);
        setError(''); // Réinitialiser l'erreur si la requête est réussie
      } catch (error) {
        console.error('Echec de la recherche des pays :', error);
        setError('Une erreur est survenue. Veuillez réessayer plus tard.');
        Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const normalizedSearch = normalizeString(search);
    setFilteredCountries(
      countries.filter(country =>
        normalizeString(country.name).includes(normalizedSearch)
      )
    );
  }, [search, countries]);

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {error ? (
            <Text style={styles.errorText}>{error}</Text> // Affiche un message d'erreur
          ) : (
            <>
              <TextInput
                style={styles.searchInput}
                placeholder="Rechercher un pays..."
                value={search}
                onChangeText={setSearch}
              />
              <FlatList
                data={filteredCountries}
                keyExtractor={(item) => item.name} // chaque doit être unique `item.name`
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                      onSelect(item);
                      onClose();
                    }}
                  >
                    <Text style={styles.itemText}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </>
          )}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Fermer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    height: "50%",
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default CountryPicker;
