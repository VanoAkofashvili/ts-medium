import { Image, Box, ImageProps } from '@chakra-ui/react';
import logo from '../../static/images/logo.svg';

const Logo: React.FC<ImageProps> = imageProps => (
  <Box>
    <Image src={logo} alt="website logo" {...imageProps} />
  </Box>
);

export { Logo };
