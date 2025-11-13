import { useState } from 'react';
import { Flex, Title } from '@mantine/core';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import { galleryPhotos } from '../../constants/galleryPhotos';
import 'react-photo-album/columns.css';
import 'yet-another-react-lightbox/styles.css';
import { Zoom } from 'yet-another-react-lightbox/plugins';

const Gallery = () => {
  const [index, setIndex] = useState<number>(-1);

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
        fw={700}
        mb='xl'>
        Gallery
      </Title>
      <ColumnsPhotoAlbum
        photos={galleryPhotos}
        padding={0}
        spacing={10}
        columns={4}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        index={index}
        slides={galleryPhotos}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Zoom]}
        animation={{ zoom: 400 }}
        zoom={{
          maxZoomPixelRatio: 1,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 100,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
      />
    </Flex>
  );
};
//Test
export default Gallery;
