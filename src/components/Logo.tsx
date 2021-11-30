import { Image, Box, ImageProps } from '@chakra-ui/react';
import logo from '../static/images/logo.png';

const Logo: React.FC<ImageProps> = (imageProps) => (
  <Box>
    <Image src={logo} alt="Website logo" {...imageProps} />
  </Box>
);

export { Logo };
