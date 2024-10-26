// Définition ABASE_URL avec la valeur importée
const BASE_URL = `${process.env.EXPO_PUBLIC_API_URL}/departments`;
//console.log('API Base URL:', process.env.EXPO_PUBLIC_API_URL);

const normalizeString = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export const getDepartmentsByCity = async (city) => {
  try {
    const normalizedCity = normalizeString(city);
    const response = await fetch(`${BASE_URL}?city=${encodeURIComponent(normalizedCity)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return []; // Retourne un tableau vide si la ville n'est pas trouvée
      }
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    const data = await response.json();
    return data; // Assurez-vous que le format de la réponse est correct
  } catch (error) {
    console.error('Erreur lors de la récupération des départements:', error);
    throw error;
  }
};
