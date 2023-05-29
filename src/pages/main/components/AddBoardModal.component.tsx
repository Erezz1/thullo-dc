import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@chakra-ui/react';

import { AddIcon, CloseIcon } from '@chakra-ui/icons';

import { ButtonComponent } from '../../../components';
import { CardCoverStyled } from './styled-components';
import ModalFormComponent from './ModalForm.component';

const AddBoardModalComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleCloseModal = () => {
    onClose();
    // TODO: Resetear todos los estados del componente
  }

  return (
    <>
      <ButtonComponent onClick={onOpen} leftIcon={<AddIcon />}>Add</ButtonComponent>

      <Modal size="sm" isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ButtonComponent
              centerIcon={<CloseIcon />}
              position="absolute"
              right="0.5rem"
              top="0.5rem"
              onClick={handleCloseModal}
            />
            <CardCoverStyled
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="board's cover"
            />
          </ModalHeader>

          <ModalFormComponent />

          <ModalFooter display="flex" gap="5px">
            <ButtonComponent
              colorScheme="blackAlpha"
              variant="ghost"
              onClick={handleCloseModal}
            >
              Cancel
            </ButtonComponent>
            <ButtonComponent leftIcon={< AddIcon />}>
              Create
            </ButtonComponent>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddBoardModalComponent;
