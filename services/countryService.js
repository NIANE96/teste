// import axios from 'axios';

// Définition ABASE_URL avec la valeur importée
const BASE_URL = `${process.env.EXPO_PUBLIC_API_URL}/countries`;

// Fonction qui récupère la liste des pays
export const getAllCountries = async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Erreur lors de la récupération des pays:', error);
      throw error;
    }
  };
  
