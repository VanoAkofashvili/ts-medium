import { Box, Heading } from '@chakra-ui/layout';
import { Logo } from '../../common';

export const LoginHeader: React.FC = () => {
  return (
    <Box
      mb={{ base: '20px', xl: '0' }}
      maxW="400px"
      textAlign="center"
      d="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Logo htmlWidth="300px" />
      <Heading as="h2" fontSize="24px" fontWeight="300">
        Connect with friends and the world around you on Facebook.
      </Heading>
    </Box>
  );
};
