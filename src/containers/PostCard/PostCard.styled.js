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

    .reactions {
        margin-top: 1em;
    }
`;