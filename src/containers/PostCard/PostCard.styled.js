import { Avatar } from 'components';
import Caption from 'components/Caption';
import styled from 'styled-components';

export const PostCard = styled.div`
  padding: 1em 0;
`;

export const SAvatar = styled(Avatar)`
  
`;

export const SCaption = styled(Caption)`
  margin-top: .5em;
`;

export const Header = styled.div`
    display: flex;
    place-items: center;
    gap: 5px;  
`;

export const Body = styled.div`
  
`;

export const ContentContainer = styled.div`
  margin: 10px 0;
`;

export const ReactionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;