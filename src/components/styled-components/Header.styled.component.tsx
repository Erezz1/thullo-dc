import { FC, ReactNode } from 'react'
import { Box, ControlBoxProps } from '@chakra-ui/react'

interface Props extends ControlBoxProps {
  children: ReactNode,
}

export const HeaderContainer: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      as="header"
      width="100%"
      backgroundColor="#FFFFFF"
      padding="1rem"
      display="flex"
      flexDirection={["column", "row"]}
      alignItems="center"
      justifyContent="space-between"
      shadow="sm"
      gap="1rem"
      {...props}
    >
      {children}
    </Box>
  )
}

export const HeaderSettings: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gap={["1rem", "1rem", "1rem", "5rem"]}
      {...props}
    >
      {children}
    </Box>
  )
}

export const HeaderSettingsAvatar: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      display={["none", "none", "flex"]}
      alignItems="center"
      gap="0.5rem"
      {...props}
    >
      {children}
    </Box>
  )
}
