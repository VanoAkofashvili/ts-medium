import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Button,
  useColorMode,
} from '@chakra-ui/react';

const Details = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <VStack w="full" h="full" spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your details</Heading>
        <Text>If you already have an account, click here to log in</Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={6}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Adress</FormLabel>
            <Input placeholder="Blvd. Broken Dreams" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="geo">Georgia</option>
              <option value="de">Germany </option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing adress</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button size="lg" width="full" onClick={toggleColorMode}>
            Change Theme
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

const Cart = () => {
  return (
    <VStack w="full" h="full" spacing={10} alignItems="flex-start" bg="gray.50">
      <VStack>
        <Heading>Your Cart</Heading>
        <Text>
          if the price is too hard on your eyes,{' '}
          <strong>try changing the theme</strong>
        </Text>
      </VStack>
    </VStack>
  );
};

const Register: React.FC = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Details />
        <Cart />
      </Flex>
    </Container>
  );
};

export { Register };
