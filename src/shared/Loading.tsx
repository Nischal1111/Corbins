import React from 'react';
import {Spinner} from "@nextui-org/spinner";

const Loading = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Spinner size='lg'/>
    </div>
  );
}

export default Loading;
