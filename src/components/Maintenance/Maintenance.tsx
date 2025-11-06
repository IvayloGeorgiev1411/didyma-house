import { Container, Text, Stack } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconSettings } from '@tabler/icons-react';

const MaintenancePage = () => {
  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #e6f4ff 50%, #d0ebff 100%)',
        color: 'white',
      }}>
      <Stack
        align='center'
        gap='lg'>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'linear',
          }}>
          <IconSettings
            size={96}
            stroke={1.5}
            color='#1581daff'
          />
        </motion.div>

        <Text
          size='xl'
          fw={600}
          c='#1581daff'
          style={{ maxWidth: 600, lineHeight: 1.4, textAlign: 'center' }}>
          The web page is currently under maintenance,
          <br />
          expect something new soon!
        </Text>
      </Stack>
    </Container>
  );
};

export default MaintenancePage;
