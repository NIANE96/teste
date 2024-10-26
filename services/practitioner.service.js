import axios from 'axios';

const BASE_URL = 'http://your-backend-url.com/api';

export const searchPractitioners = async (latitude, longitude, query) => {
  try {
    const response = await axios.get(`${BASE_URL}/practitioners`, {
      params: {
        latitude,
        longitude,
        query,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Failed to search practitioners', error);
    throw error;
  }
};
