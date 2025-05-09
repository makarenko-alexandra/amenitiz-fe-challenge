import { useSuspenseQuery, queryOptions } from '@tanstack/react-query';

interface PlayerResponse {
  avatar?: string;
  player_id?: number;
  url?: string;
  name?: string;
  username: string;
  followers?: number;
  country?: string;
  last_online?: number;
  joined?: number;
  status?: string;
  is_streamer?: boolean;
  verified?: boolean;
  league?: string;
  title?: string;
}

const fetchPlayer = async (username: string): Promise<PlayerResponse> => {
  const response = await fetch(`https://api.chess.com/pub/player/${username}`);
  
  if (!response.ok) {
    throw new Error(`Error fetching player: ${response.status}`);
  }
  
  return response.json();
};

export const playerQueryOptions = (username: string) => 
  queryOptions({
    queryKey: ['player', username],
    queryFn: () => fetchPlayer(username),
  });

export const usePlayerQuery = (username: string) => {
  return useSuspenseQuery(playerQueryOptions(username));
}; 