import { useQuery } from 'react-query';
import axios from 'axios';

const fetchData = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const useFetchWithCache = (url) => {
  return useQuery(
    url,
    ()=>fetchData(url),
    {
      staleTime: 3600000, // 1 hour
      cacheTime: 3600000, // 1 hour
      refetchInterval: 1000 * 60 * 60, // Refetch every 1 hour 
      onSuccess: (data) => {
        localStorage.setItem(url, JSON.stringify(data));
      },
      initialData: () => {
        const cachedData = localStorage.getItem(url);
        return cachedData ? JSON.parse(cachedData) : undefined;
      },
    }
  );
};

export default useFetchWithCache;