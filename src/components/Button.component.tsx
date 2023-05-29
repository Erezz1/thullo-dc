import { FC, ReactNode } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {
  children?: ReactNode;
  centerIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
const ButtonComponent: FC<Props> = ({ children, centerIcon, colorScheme = 'blue', ...props }) => {
  return (
    <Button
      colorScheme={colorScheme}
      size="sm"
      {...props}
    >
      {centerIcon ? centerIcon : children}
    </Button>
  )
}

export default ButtonComponent;
