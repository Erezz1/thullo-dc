import { FC, ReactEventHandler, ReactNode } from 'react';
import { Flex, FlexProps, Image, ImageProps } from '@chakra-ui/react';

import defaultCover from '../../../../assets/default-cover.jpeg';

interface BoardMain extends FlexProps {
  children: ReactNode
}
export const BoardMainContainer: FC<BoardMain> = ({ children, ...props }) => {
  return (
    <Flex
      width="100%"
      height="80vh"
      padding="1rem"
      backgroundColor="#F8F9FD"
      rounded="lg"
      gap="1rem"
      overflow="auto"
      {...props}
    >
      {children}
    </Flex>
  )
}

interface CardCover extends ImageProps {
  src?: string;
  title?: string;
}
export const CardCover: FC<CardCover> = ({ src, title = 'cover', ...props }) => {
  const handleErrorImage: ReactEventHandler<HTMLImageElement> = event => event.currentTarget.src = defaultCover;

  return (
    <Image
      src={src}
      alt={`${title} image`}
      onError={handleErrorImage}
      rounded="md"
      marginBottom="1rem"
      {...props}
    />
  )
}
