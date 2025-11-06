import { AppShell, Box, Image } from '@mantine/core';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUsSection/AboutUs';
import Gallery from './components/Gallery/Gallery';
import MaintenancePage from './components/Maintenance/Maintenance';

function App() {
  const isUnderMaintenance = true; // Change this to true to show the maintenance page
  
  if (isUnderMaintenance) {
    return <MaintenancePage />;
  }

  return (
    <AppShell
      header={{ height: 'auto' }}
      >
      <AppShell.Header withBorder={false}>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_7Ztx4Ob7o-P7PiSJyIh2KYxouh-M_9HoQ&s' alt='Description' fit='cover' w='100%' h={800} />
        <Box
          px='100px'
          py='lg'>
          <AboutUs />
          <Gallery />
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
