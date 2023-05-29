import { FC, useRef, useState } from 'react';
import {
  Avatar,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  GridItem,
  Text,
  Textarea,
  useDisclosure
} from '@chakra-ui/react';
import { ChatIcon, HamburgerIcon, InfoIcon, QuestionIcon } from '@chakra-ui/icons';

import { AsideTitleSection } from './styled-components';

const AsideDetailBoardComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef: any = useRef()

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<HamburgerIcon />}
      >
        Show Menu
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <Divider />
          <AsideContainer />
        </DrawerContent>
      </Drawer>
    </>
  )
}

const AsideContainer = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const valueText = `
Simple board to start on a project.

Each list can hold items (cards) that represent ideas or tasks.

There 4 lists here:

* Backlog 🤔 : Ideas are created here. Here people can describe the idea following three simple questions: Why you wish to do it, What it is, how can you do it.

*  In Progress📚: Once the ideas is clearly defined, the task can move to #todo stage. Here the owner of the idea can move to #doing once s/he is ready. He can also wait a bit for other members to join.
* In Review ⚙️: On-going
* Completed 🙌🏽**: Finished
  `

  const activeEdit = () => setIsEditing(true);
  const disableEdit = () => setIsEditing(false);

  return (
    <DrawerBody display="flex" flexDirection="column" gap="1rem">
      <Grid gap="8px">
        <AsideTitleSection>
          <InfoIcon />
          Made By
        </AsideTitleSection>
        <Flex alignItems="center" gap="1rem">
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
          <Text fontWeight="bold" fontSize="lg">Daniel Jensen</Text>
        </Flex>
      </Grid>

      <Grid gap="8px">
        <AsideTitleSection>
          <QuestionIcon />
          Description
        </AsideTitleSection>
        <Textarea
          height="30rem"
          colorScheme="gray"
          focusBorderColor="#BDBDBD"
          resize="none"
          variant={isEditing ? 'outline' : 'unstyled'}
          onFocus={activeEdit}
          value={valueText}
        />
        {isEditing && <Flex gap="8px">
          <Button
            size="sm"
            colorScheme="green"
          >
            Save
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={disableEdit}
          >
            Cancel
          </Button>
        </Flex>}
      </Grid>

      <Grid gap="8px">
        <AsideTitleSection>
          <ChatIcon />
          Team
        </AsideTitleSection>
        <Grid gap="8px">
          <Member isAdmin={true} />
          <Member isAdmin={false} />
        </Grid>
      </Grid>
    </DrawerBody>
  )
}

interface MemberProps {
  isAdmin: boolean;
}
const Member: FC<MemberProps> = ({ isAdmin }) => {
  return (
    <GridItem display="flex" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center" gap="8px">
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          size="sm"
        />
        <Text fontSize="sm" fontWeight="semibold">Daniel Jensen</Text>
      </Flex>

      {isAdmin
        ? <Text fontSize="sm">Admin</Text>
        : <Button size="xs" variant="outline" colorScheme="red">
          Remove
        </Button>}
    </GridItem>
  )
}

export default AsideDetailBoardComponent;
