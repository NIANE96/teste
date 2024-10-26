const API_URL = 'http://localhost:5000/api/auth';

// Fonction pour s'inscrire
export const signup = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  } catch (error) {
    console.error('Erreur lors de l’inscription:', error);
    throw error;
  }
};

// Fonction pour confirmer l'utilisateur
export const confirmUser = async (phone, confirmationCode) => {
  try {
    const response = await fetch(`${API_URL}/confirm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, confirmationCode }),
    });
    return response.json();
  } catch (error) {
    console.error('Erreur lors de la confirmation:', error);
    throw error;
  }
};

// Fonction pour se connecter
export const login = async (phone, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phone, password }),
    });
    return response.json();
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    throw error;
  }
};
