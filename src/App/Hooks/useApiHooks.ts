import { useQuery } from '@tanstack/react-query';
import { apiServices } from '../../services/apiServices';


export const useUserData = () => {
  return useQuery({
    queryKey: ['userData'],
    queryFn: apiServices.getUserData
  });
};