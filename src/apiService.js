import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

let apiService = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  },
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN'
});

async function fetchData(url, data) {
  try {
    const response = await apiService.post(url, data);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('API request failed');
    }
  } catch (error) {
    console.error('Error in fetchData:', error);
    throw error;
  }
}
export default fetchData;