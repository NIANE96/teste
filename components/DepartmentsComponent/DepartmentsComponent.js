import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getDepartmentsByCity } from '../../services/departmentsService';
import CountryPicker from "../CountryPicker/CountryPicker";

// Fonction pour nettoyer les espaces et les caractères non désirés
const cleanCityInput = (text, country) => {
  if (country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal') {
    return text.replace(/\s/g, '').replace(/[^a-zA-Z]/g, ''); // Supprime les espaces et les caractères non alphabétiques
  } else {
    return text.trim().replace(/[^a-zA-Z\s]/g, ''); // Supprime les chiffres et les caractères spéciaux
  }
};

const DepartmentsComponent = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [departments, setDepartments] = useState([]);
  const [error, setError] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [showDepartmentsList, setShowDepartmentsList] = useState(false);
  const [isDepartmentClicked, setIsDepartmentClicked] = useState(false);
  const [formError, setFormError] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // État pour suivre la soumission du formulaire

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (city.length > 0 && (country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal')) {
      const fetchDepartments = async () => {
        try {
          const data = await getDepartmentsByCity(city);
          if (data.length === 0) {
            setDepartments([]);
          } else {
            setDepartments(data);
            setError('');
          }
        } catch (err) {
          setDepartments([]);
          setError('Une erreur est survenue. Veuillez réessayer plus tard.');
          Alert.alert('Erreur', 'Une erreur est survenue. Veuillez réessayer plus tard.');
        }
      };

      fetchDepartments();
    } else {
      setDepartments([]);
      setError('');
      setShowDepartmentsList(false);
    }
  }, [city, country]);

  const handleSelectDepartment = (department) => {
    setSelectedDepartment(department);
    setShowDepartmentsList(false); // Cacher la liste après sélection
    setFormError(''); // Effacer l'erreur si un département est sélectionné
  };

  const handleDepartmentClick = () => {
    setIsDepartmentClicked(true);
    if (country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal') {
      if (!city) {
        setFormError('Tous les champs doivent être remplis');
      } else {
        setFormError('');
        if (departments.length > 0) {
          setShowDepartmentsList(!showDepartmentsList);
        } else if (city.length > 0) {
          setError('Ville incorrecte');
        }
      }
    } else {
      setFormError(''); // Pas besoin de vérifier les champs "Ville" et "Département" pour les autres pays
    }
  };

  useEffect(() => {
    if (country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal') {
      setCity('');
      setSelectedDepartment('');
    } else if (country) {
      setCity('99');
      setSelectedDepartment('99');
      setDepartments([]);
      setShowDepartmentsList(false);
    }
  }, [country]);

  const handleSubmit = () => {
    setIsFormSubmitted(true); // Indiquer que le formulaire a été soumis
    if (!country) {
      setFormError('Tous les champs doivent être remplis');
    } else if ((country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal') && (!city || !selectedDepartment)) {
      setFormError('Tous les champs doivent être remplis');
    } else {
      // Procéder à la soumission du formulaire ou à d'autres actions
      Alert.alert('Succès', 'Formulaire soumis avec succès');
      // Réinitialiser les champs après soumission si nécessaire
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setCountry(country.name);
    setFormError(''); // Effacer l'erreur lorsque le pays change
    setIsFormSubmitted(false); // Réinitialiser la soumission du formulaire lorsque le pays change
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rechercher les Départements</Text>
      <TouchableOpacity style={[styles.selectButton, isFormSubmitted && !selectedCountry ? styles.inputError : null]} onPress={() => setModalVisible(true)}>
        <Text style={styles.selectButtonText}>
          {selectedCountry ? selectedCountry.name : 'Sélectionner un pays'}
        </Text>
      </TouchableOpacity>
      <CountryPicker
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={(country) => {
          handleCountrySelect(country);
          setModalVisible(false);
        }}
      />
      <TextInput
        style={[
          styles.input,
          (isFormSubmitted && !city && (country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal')) ? styles.inputError : null,
        ]}
        value={city}
        onChangeText={(text) => {
          const cleanedText = cleanCityInput(text, country);
          setCity(cleanedText);
          setIsDepartmentClicked(false);
          setFormError('');
        }}
        placeholder="Entrez le nom de la ville"
        editable={country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal'}
      />
      <TouchableOpacity
        style={[
          styles.departmentInput,
          (isFormSubmitted && !selectedDepartment && (country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal')) ? styles.inputError : null,
        ]}
        onPress={handleDepartmentClick}
        disabled={!(country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal')}
      >
        <Text style={styles.departmentText}>{selectedDepartment || 'Sélectionnez un département'}</Text>
      </TouchableOpacity>
      {formError && (country.toLowerCase() === 'sénégal' || country.toLowerCase() === 'senegal') ? <Text style={styles.errorText}>{formError}</Text> : null}
      {showDepartmentsList && departments.length > 0 && (
        <FlatList
          data={departments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectDepartment(item)}>
              <Text style={styles.departmentItem}>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.departmentList}
        />
      )}
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Soumettre</Text>
      </TouchableOpacity>
      {isFormSubmitted && !selectedCountry ? (
        <Text style={styles.errorText}>Vous devez sélectionner un pays</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  departmentInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  departmentText: {
    fontSize: 16,
    color: '#000',
  },
  errorText: {
    color: 'red',
    marginVertical: 5,
  },
  departmentList: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderTopWidth: 0,
    maxHeight: 150,
  },
  departmentItem: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  submitButton: {
    backgroundColor: '#007bff',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  selectButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  selectButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DepartmentsComponent;
