import React from 'react';
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const About: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  return (
    <div className="pt-20 border-2">
    {/* <SkeletonTheme baseColor="#FF0000" highlightColor="#444">
    <p className='border-2'>
      <Skeleton count={3} height='20rem'/>
    </p>
  </SkeletonTheme> */}
  
  {loading ? <Skeleton
  style={{display: 'block'}}
    baseColor="#edebeb"
    highlightColor="#d6d6d6"
    count={4}
    width='100%'
    height={40}
  /> : <p>hello</p>}
    </div>
  );
};