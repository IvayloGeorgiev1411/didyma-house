import Slider from 'react-slick';
import { Box, Image } from '@mantine/core';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface HeroCarouselProps {
  images: { src: string; alt?: string }[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images }) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Box
      w='100%'
      pt='48px'
      pb='xl'
      pos='relative'>
      <Slider {...settings}>
        {images.map((image, idx) => (
          <Box
            key={idx}
            pos='relative'>
            <Image
              src={image.src}
              alt={image.alt || `Slide ${idx + 1}`}
              fit='cover'
              w='100%'
              h={750}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroCarousel;
