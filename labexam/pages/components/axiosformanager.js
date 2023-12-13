import axios from 'axios';
 
const backendAPI = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your actual backend base URL
});
 
export const getManagerID = async (id) => {
  try {
    const response = await backendAPI.get(`/admin/findmanagersbyadmin/${id}`);
    return response.data; // Assuming the response contains the user data
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};