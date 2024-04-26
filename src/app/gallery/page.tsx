import ShopLaterGallery from '@/components/home/ShopLaterGallery';
import Title from '@/components/title/Tittle';
import * as React from 'react';

interface IGalleryProps {
}

const Gallery: React.FunctionComponent<IGalleryProps> = (props) => {
  return <>
  <Title name="Explore Our Gallery" />
  <ShopLaterGallery />
  </>;
};

export default Gallery;
