import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box } from '@chakra-ui/react';

import { AppLayout } from '../../layouts';
import { AsideDetailBoardComponent, BoardMainComponent, CardModalComponent, MemberListComponent } from './components';

const Board = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [cardId] = useState(searchParams.get('cardId'));

  useEffect(() => {
    // setIsOpen();
    console.log(cardId);
  }, [searchParams]);

  const handleClose = () => {
    setIsOpen(false);
    navigate('?');
  };

  return (
    <AppLayout>
      <Box
        margin="0 auto"
        width="95%"
        padding="1rem 0"
        display="grid"
        gap="2rem"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={["flex-end", "flex-end", "space-between"]}
        >
          <MemberListComponent />
          <AsideDetailBoardComponent />
        </Box>

        <BoardMainComponent />
      </Box>
      <CardModalComponent
        isOpen={isOpen}
        onClose={handleClose}
      />
    </AppLayout>
  )
}

export default Board;
