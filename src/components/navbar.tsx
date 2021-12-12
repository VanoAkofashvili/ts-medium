import { Flex, Spacer, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Logo } from '../common/components';
import { Button } from '@chakra-ui/button';

const Navbar = () => {
  return (
    <Flex direction="row" justify="space-between" alignItems="center" pr={4} bg="gray.100">
      <Link to="/auth">
        <Logo boxSize={20} objectFit="contain" />
      </Link>
      <Spacer />
      <Box>
        <Link to="/auth/login">
          <Button mr={4}>Sign In</Button>
        </Link>
        <Link to="/auth/register">
          <Button mr={4}>Sign Up</Button>
        </Link>
        <Link to="/settings">
          <Button>Settings</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export { Navbar };
