import axios from 'axios';
import { Results } from '../../interfaces/results';

export const loadData = async (url: string) => {
  const { data } = await axios.get<Results>(url);
  return data;
};