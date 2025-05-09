import { useSuspenseQuery, queryOptions } from '@tanstack/react-query';

interface GrandmastersResponse {
  players: string[];
}

const fetchGrandmasters = async (): Promise<GrandmastersResponse> => {
  const response = await fetch('https://api.chess.com/pub/titled/GM');
  
  if (!response.ok) {
    throw new Error(`Error fetching grandmasters: ${response.status}`);
  }
  
  return response.json();
};

export const grandmastersQueryOptions = () => 
  queryOptions({
    queryKey: ['grandmasters'],
    queryFn: fetchGrandmasters,
  });

export const useGrandmastersQuery = () => {
  return useSuspenseQuery(grandmastersQueryOptions());
}; 