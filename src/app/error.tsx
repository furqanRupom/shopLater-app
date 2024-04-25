
"use client";
import * as React from 'react';

interface IErrorPageProps {
    error:any;
    reset:any;
}

const ErrorPage: React.FunctionComponent<IErrorPageProps> = ({error,reset}) => {
    return <section>
        <h3 className='text-red-600 text-3xl text-center'>{error.message}</h3>
    </section>;
};

export default ErrorPage;
