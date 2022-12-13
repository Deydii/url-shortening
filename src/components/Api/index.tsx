import axios from 'axios';

export const loadData = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};