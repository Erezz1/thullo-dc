import { FC, ReactNode } from 'react'
import { Box, BoxProps, Grid, GridItem, GridItemProps, GridProps, Image, ImageProps } from '@chakra-ui/react'

interface CardList extends GridProps {
  children: ReactNode;
}
export const CardListStyled: FC<CardList> = ({ children, ...props }) => {
  return (
    <Grid
      width="100%"
      gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
      gap="1.5rem"
      {...props}
    >
      {children}
    </Grid>
  )
}

interface CardItem extends GridItemProps {
  children: ReactNode;
}
export const CardItemStyled: FC<CardItem> = ({ children, ...props }) => {
  return (
    <GridItem
      width="100%"
      backgroundColor="#FFFFFF"
      shadow="md"
      rounded="md"
      padding="8px"
      display="grid"
      gap="10px"
      cursor="pointer"
      {...props}
    >
      {children}
    </GridItem>
  )
}

export const CardCoverStyled: FC<ImageProps> = (props) => {
  return (
    <Image
      objectFit="cover"
      height="10rem"
      width="100%"
      rounded="md"
      alt="board's cover"
      {...props}
    />
  )
}

interface AvatarContainer extends BoxProps {
  children: ReactNode;
}
export const AvatarContainerStyled: FC<AvatarContainer> = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      gap="8px"
      alignItems="center"
      {...props}
    >
      {children}
    </Box>
  )
}
