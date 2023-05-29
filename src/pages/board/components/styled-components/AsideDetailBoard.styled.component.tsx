import { FC, ReactNode } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface AsideDetail extends TextProps {
  children: ReactNode;
}
export const AsideTitleSection: FC<AsideDetail> = ({ children, ...props }) => {
  return (
    <Text
      fontSize="sm"
      display="flex"
      gap="5px"
      alignItems="center"
      color="gray.500"
      fontWeight="semibold"
      {...props}
    >
      {children}
    </Text>
  )
}
