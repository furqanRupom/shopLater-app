import * as React from 'react';

interface ITitleProps {
    name:string
}

const Title: React.FunctionComponent<ITitleProps> = ({name}) => {
    return <div className='flex items-center  w-full justify-center'>
        <img className="h-20" src="https://i.ibb.co/S7hr16J/file-1.png" alt="logo" />
        <h3 className='text-center bg-gradient-to-tr from-green-500 to-lime-500  bg-clip-text text-transparent font-semibold py-5 text-3xl'>{name} </h3>
    </div>;
};

export default Title;
