import { AddIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';

import { AppLayout } from '../../layouts';
import { ButtonComponent } from '../../components';

import { CardsListComponent, AddBoardModalComponent } from './components';

const Main = () => {
  return (
    <AppLayout>
      <Box
        margin="0 auto"
        width="95%"
        maxWidth="container.xl"
        padding="2rem 0"
        display="grid"
        gap="2rem"
      >
        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Text
            as="h2"
            fontSize="xl"
            letterSpacing="-0.02rem"
          >
            All Boards
          </Text>

          <AddBoardModalComponent />
        </Box>

        <CardsListComponent />
      </Box>
    </AppLayout>
  )
}

export default Main;
