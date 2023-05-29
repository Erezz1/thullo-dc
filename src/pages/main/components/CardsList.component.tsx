import { ReactEventHandler } from 'react'
import { useNavigate } from 'react-router-dom';
import { Avatar, Text } from '@chakra-ui/react'

import { CardListStyled, CardItemStyled, CardCoverStyled, AvatarContainerStyled } from './styled-components';
import defaultCover from '../../../assets/default-cover.jpeg';

const CardsListComponent = () => {
  return (
    <CardListStyled>
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </CardListStyled>
  )
}

const CardItem = () => {
  const navigate = useNavigate();

  const goToBoard = () => navigate('/board/1');
  const handleImageError: ReactEventHandler<HTMLImageElement> = event => event.currentTarget.src = defaultCover;

  return (
    <CardItemStyled onClick={goToBoard}>
      <CardCoverStyled
        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        onError={handleImageError}
      />
      <Text>Devchallenges Board</Text>

      <AvatarContainerStyled>
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Text fontSize="sm" color="#BDBDBD">+5 others</Text>
      </AvatarContainerStyled>
    </CardItemStyled>
  )
}

export default CardsListComponent;
