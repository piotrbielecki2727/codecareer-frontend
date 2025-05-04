import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const registerCandidate = async (data: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/candidate/signup`, data);
  return response.data;
};
