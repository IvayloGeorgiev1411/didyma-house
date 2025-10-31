import { Flex, Title } from '@mantine/core';

const Gallery = () => {
  return (
    <Flex
      px='lg'
      py='xl'
      mb='xl'
      direction='column'
      justify='center'
      align='center'>
      <Title
        c='ocean.5'
        component='h2'
        fw={700}>
        Gallery
      </Title>
    </Flex>
  );
};
//Test
export default Gallery;
