import { useParams } from 'react-router-dom';
import { usePlayerQuery } from '../../queries/usePlayerQuery';
import { 
  ProfileContainer, 
  Avatar, 
  ProfileDetails, 
  InfoItem, 
  Label, 
  Value 
} from './GrandmasterProfile.styles';

const formatDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

const GrandmasterProfileContent = () => {
  const { username } = useParams<{ username: string }>();
  const { data: player } = usePlayerQuery(username || '');

  const placeholderAvatar = 'https://www.chess.com/bundles/web/images/user-image.007dad08.svg';

  return (
    <ProfileContainer>
      <div>
        <Avatar 
          src={player.avatar || placeholderAvatar} 
          alt={player.username} 
        />
      </div>
      <ProfileDetails>
        <h2>{player.name || player.username}</h2>
        
        {player.title && (
          <InfoItem>
            <Label>Title:</Label>
            <Value>{player.title}</Value>
          </InfoItem>
        )}
        
        <InfoItem>
          <Label>Username:</Label>
          <Value>{player.username}</Value>
        </InfoItem>
        
        {player.country && (
          <InfoItem>
            <Label>Country:</Label>
            <Value>{player.country.split('/').pop()}</Value>
          </InfoItem>
        )}
        
        {player.joined && (
          <InfoItem>
            <Label>Joined:</Label>
            <Value>{formatDate(player.joined)}</Value>
          </InfoItem>
        )}
        
        {player.last_online && (
          <InfoItem>
            <Label>Last Online:</Label>
            <Value>{formatDate(player.last_online)}</Value>
          </InfoItem>
        )}
        
        {player.followers !== undefined && (
          <InfoItem>
            <Label>Followers:</Label>
            <Value>{player.followers}</Value>
          </InfoItem>
        )}
        
        {player.status && (
          <InfoItem>
            <Label>Status:</Label>
            <Value>{player.status}</Value>
          </InfoItem>
        )}
        
        {player.league && (
          <InfoItem>
            <Label>League:</Label>
            <Value>{player.league}</Value>
          </InfoItem>
        )}
        
        {player.is_streamer && (
          <InfoItem>
            <Label>Streamer:</Label>
            <Value>Yes</Value>
          </InfoItem>
        )}
        
        {player.verified && (
          <InfoItem>
            <Label>Verified:</Label>
            <Value>Yes</Value>
          </InfoItem>
        )}
      </ProfileDetails>
    </ProfileContainer>
  );
};

export default GrandmasterProfileContent; 