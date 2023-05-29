import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import { AddIcon, LockIcon, UnlockIcon } from '@chakra-ui/icons';

import { ButtonComponent } from '../../../components';

const MemberListComponent = () => {
  return (
    <Box
      display={["none", "none", "flex"]}
      gap="1rem"
      alignItems="center"
    >
      <Menu>
        <MenuButton as={Button} leftIcon={<LockIcon />}>
          Private
        </MenuButton>
        <MenuList>
          <MenuItem display="flex" gap="1rem">
            <LockIcon />
            Private
          </MenuItem>
          <MenuItem display="flex" gap="1rem">
            <UnlockIcon />
            Public
          </MenuItem>
        </MenuList>
      </Menu>
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
      <ButtonComponent centerIcon={<AddIcon />} />
      <Text fontSize="sm" color="#BDBDBD">+5 others</Text>
    </Box>
  )
}

export default MemberListComponent;
