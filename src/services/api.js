import axios from 'axios';

// Create an axios instance with base configuration
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// API service functions
export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const fetchPosts = async () => {
  try {
    const response = await api.get('/posts?_limit=10');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const fetchComments = async () => {
  try {
    const response = await api.get('/comments?_limit=10');
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export default api;
