import axios from 'axios';
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const login = async (data: { email: string; password: string }) => {
  console.log(data);
  const response = await axios.post(`${API_URL}/auth/signin`, data, {
    withCredentials: true,
  });
  return response.data;
};

export const logout = async () => {
  await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
};
