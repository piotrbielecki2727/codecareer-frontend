import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const registerEmployer = async (data: {
  name: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}) => {
  const response = await axios.post(`${API_URL}/auth/employer/signup`, data);
  return response.data;
};
