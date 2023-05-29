import { useNavigate } from 'react-router-dom';
import {
  Image,
  Avatar,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'

import { HeaderContainer, HeaderSettings, HeaderSettingsAvatar } from './styled-components/Header.styled.component';
import ButtonComponent from './Button.component';

import logo from '../assets/Logo.svg'

const HeaderComponent = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate('/');

  return (
    <HeaderContainer>
      <Image
        src={logo}
        alt="logo"
        cursor="pointer"
        onClick={goToHome}
      />

      <HeaderSettings>
        <InputGroup as="form">
          <Input
            width={["20rem", "20rem", "20rem", "25rem"]}
            placeholder="keywords..."
            shadow="md"
          />
          <InputRightElement width="5rem">
            <ButtonComponent>
              Search
            </ButtonComponent>
          </InputRightElement>
        </InputGroup>

        <HeaderSettingsAvatar>
          <Avatar
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            width="2.5rem"
            height="2.5rem"
          />
          <Menu>
            <MenuButton as={Button} variant="ghost" rightIcon={<ChevronDownIcon />}>
              Dan Abrahmov
            </MenuButton>
            <MenuList zIndex="10000">
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
            </MenuList>
          </Menu>
        </HeaderSettingsAvatar>
      </HeaderSettings>
    </HeaderContainer>
  )
}

export default HeaderComponent;
