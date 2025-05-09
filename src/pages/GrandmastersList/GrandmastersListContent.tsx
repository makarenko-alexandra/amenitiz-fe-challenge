import { useGrandmastersQuery } from '../../queries';
import { Title, GrandmasterLink } from './GrandmastersList.styles';

const GrandmastersListContent = () => {
  const { data } = useGrandmastersQuery();
  
  return (
    <>
      <Title>Chess Grandmasters</Title>
      <p>Here's a list of all Grandmasters according to Chess.com:</p>
      
      {data.players.map((username) => (
        <GrandmasterLink key={username} to={`/grandmaster/${username}`}>
          {username}
        </GrandmasterLink>
      ))}
    </>
  );
};

export default GrandmastersListContent; 