
"use client"
import { store } from '@/redux/store';
import * as React from 'react';
import { Provider } from 'react-redux';

interface IProvidersProps {
    children:Readonly<React.ReactNode>
}

const Providers: React.FunctionComponent<IProvidersProps> = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
