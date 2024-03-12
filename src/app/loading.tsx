import { SkeletonCrad } from '@/components/SkeletonCrad'
import React from 'react'

const Loading = () => {
    return (
      <div className='grid grid-cols-3 gap-8'>
        {"abcdefghi".split('').map((i) => (
          <SkeletonCrad key={i}/>
        ))}
      </div>
    );
  };
  
  export default Loading;
