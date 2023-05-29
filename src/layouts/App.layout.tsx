import { FC, ReactNode } from 'react';
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { HeaderComponent } from '../components';

interface Props {
  children: ReactNode
}
const AppLayout: FC<Props> = ({ children }) => {

  const { board_id } = useParams();

  return (
    <Box
      width="100%"
      height="100vh"
      backgroundColor={board_id ? "#FFFFFF" : "#F8F9FD"}
    >
      <HeaderComponent />
      {children}
    </Box>
  )
}

export default AppLayout;
