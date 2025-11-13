import { AppShell, Box } from '@mantine/core';
import Header from './components/Header/Header';
import AboutUs from './components/AboutUsSection/AboutUs';
import Gallery from './components/Gallery/Gallery';
import MaintenancePage from './components/Maintenance/Maintenance';
import HeroCarousel from './components/HeroCarousel/HeroCarousel';
import { HERO_CAROUSEL_IMAGES } from './constants/constants';

function App() {
  const isUnderMaintenance = false; // Change this to true to show the maintenance page
  
  if (isUnderMaintenance) {
    return <MaintenancePage />;
  }

  return (
    <AppShell header={{ height: 'auto' }}>
      <AppShell.Header withBorder={false}>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <HeroCarousel images={HERO_CAROUSEL_IMAGES} />
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
