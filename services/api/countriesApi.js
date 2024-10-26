import axios from 'axios';

// URL de l'API des pays
const API_URL = 'https://restcountries.com/v3.1/all';

// Fonction pour obtenir la liste des pays
export const fetchCountries = async () => {
  try {
    const response = await axios.get(API_URL);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des pays", error);
    throw error; // Vous pouvez personnaliser la gestion des erreurs ici
  }
};

// Vous pouvez ajouter d'autres fonctions pour d'autres appels API
