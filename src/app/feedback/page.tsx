import Feedback from '@/components/Feedback/Feedback';
import EcommerceBanner from '@/components/home/Banner';
import * as React from 'react';

interface IFeedbackPageProps {
}

const FeedbackPage: React.FunctionComponent<IFeedbackPageProps> = (props) => {
  return  <>
  <EcommerceBanner description='Drops your valuable feedback here' title='Its feedback Time ' imageUrl='' buttonText='Shop Now' buttonLink='/product' promo=''  />
  
  <Feedback />
  </>;
};

export default FeedbackPage;
