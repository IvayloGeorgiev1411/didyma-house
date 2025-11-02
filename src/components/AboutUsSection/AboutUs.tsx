import { Flex, Text, Title, Divider } from '@mantine/core';

const AboutUs = () => {
  return (
    <Flex
      p='lg'
      direction='column'
      justify='center'
      align='center'>
      <Title
        c='ocean.5'
        component='h2'
        fw={700}>
        About us
      </Title>
      <Divider
        my='md'
        size='lg'
        color='ocean.5'
        w='50%'
      />
      <Text c='ocean.5' fz='md' ta='center' maw='70%'>
        Welcome to Didyma House, your serene retreat nestled in the heart of Epanomi
        Beach. Our mission is to provide a tranquil escape where you can unwind and
        reconnect with nature. Enjoy stunning sea views, modern amenities, and warm
        hospitality that makes you feel right at home. Whether you're seeking relaxation
        or adventure, Didyma House is your perfect destination for an unforgettable
        getaway.
      </Text>
    </Flex>
  );
};
export default AboutUs;
