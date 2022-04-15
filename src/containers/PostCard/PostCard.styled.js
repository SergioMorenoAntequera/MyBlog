import { Avatar } from 'components';
import Caption from 'components/Caption';
import styled from 'styled-components';

export const PostCard = styled.div`
    padding: 1em;
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
    padding: 10px;
    padding-left: 35px;
`;

export const ReactionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
  margin: 15px 0;
`;