import { Box, Button, Flex } from '@mantine/core';

const Header = () => {
  return (
    <Flex
      justify='space-between'
      align='center'
      py='md'
      px='100px'>
      <Box>
        <Button
          variant='transparent'
          size='compact-md'>
          Logo
        </Button>
      </Box>
      <Flex>
        <Button
          variant='transparent'
          size='compact-md'>
          Home
        </Button>
        <Button
          variant='transparent'
          size='compact-md'>
          About
        </Button>
        <Button
          variant='transparent'
          size='compact-md'>
          Gallery
        </Button>
        <Button
          variant='transparent'
          size='compact-md'>
          Location
        </Button>
        <Button
          variant='transparent'
          size='compact-md'>
          Contact
        </Button>
      </Flex>
    </Flex>
  );
};
export default Header;
