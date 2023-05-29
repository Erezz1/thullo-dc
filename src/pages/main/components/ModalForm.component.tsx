import {
  ModalBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  Input,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  useRadio,
  useRadioGroup,
  Button,
  Image,
  GridItem,
} from '@chakra-ui/react';

import { LockIcon, StarIcon, UnlockIcon } from '@chakra-ui/icons';

const ModalFormComponent = () => {
  return (
    <ModalBody display="grid" gap="1rem">
      <Input
        variant="filled"
        shadow="md"
        placeholder="Add board title"
      />
      <Grid gridTemplateColumns="repeat(2, 1fr)" gap="1rem">
        <Popover>
          <PopoverTrigger>
            <Button leftIcon={<StarIcon />}>Cover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverBody>
              <CoverOptionsList />
            </PopoverBody>
          </PopoverContent>
        </Popover>
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
      </Grid>
    </ModalBody>
  )
}

const CoverOptionItem = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <GridItem as="label" style={{ marginLeft: 0 }}>
      <input {...input} />
      <Image
        {...checkbox}
        src={props.children}
        alt="cover option"
        cursor="pointer"
        rounded="md"
        width="100%"
        height="3rem"
        objectFit="cover"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
      />
    </GridItem>
  )
}

const CoverOptionsList = () => {
  const options = [
    'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80',
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="5px"
      {...group}
    >
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <CoverOptionItem key={value} {...radio}>
            {value}
          </CoverOptionItem>
        )
      })}
    </HStack>
  )
}

export default ModalFormComponent;
