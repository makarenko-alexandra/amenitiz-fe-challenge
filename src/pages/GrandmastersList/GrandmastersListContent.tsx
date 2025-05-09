import { useGrandmastersQuery } from '@/queries';
import { Title, GrandmasterLink } from './GrandmastersList.styles';
import { Virtuoso } from 'react-virtuoso';

const GrandmastersListContent = () => {
  const { data } = useGrandmastersQuery();
  
  return (
    <>
      <Title>Chess Grandmasters</Title>
      <p>Here's a list of all Grandmasters according to Chess.com:</p>
      
      <Virtuoso
        useWindowScroll
        totalCount={data?.players?.length || 0}
        itemContent={(index) => {
          const player = data?.players[index];
          return <GrandmasterLink key={player} to={`/grandmaster/${player}`}>
            {player}
          </GrandmasterLink>
        }}
      />
    </>
  );
};

export default GrandmastersListContent; 