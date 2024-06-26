import Image from 'next/image';
import * as React from 'react';

interface ILodingPageProps {
}

const LodingPage: React.FunctionComponent<ILodingPageProps> = (props) => {
  return <div className='absolute flex items-center justify-center inset-0 w-full h-full bg-white z-50'>
      <Image height={200} width={200} src="https://media.tenor.com/kMCwoAD4RNAAAAAj/loading-gif-loading.gif" alt="" />
  </div>;
};

export default LodingPage;
