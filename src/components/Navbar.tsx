import { Flex, Spacer, Box } from '@chakra-ui/react';
import { Button } from './Button';
import { Logo } from './Logo';

const Navbar = () => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      alignItems="center"
      pr={4}
      bg="gray.100"
    >
      <Logo boxSize={20} objectFit="contain" />
      <Spacer />
      <Box>
        <Button mr={4}>Sign In</Button>
        <Button>Sign Up</Button>
      </Box>
    </Flex>
  );
};

export { Navbar };
