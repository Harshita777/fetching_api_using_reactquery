import * as HttpServices from '../utils/HttpServices';
import { API_ENDPOINTS } from '../config/apiEndpoints';

export interface UserData {
  id: number;
  name: string;
}

export const apiServices = {
  getUserData: () => HttpServices.get<UserData[]>(API_ENDPOINTS.USER_DATA)
};