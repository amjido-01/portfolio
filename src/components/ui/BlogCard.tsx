import React from 'react';

interface blogcardprops {
    id: number
    src: string;
    title: string;
    content: string;
    background: string;
    shadow: string;
    active: boolean;
}

export const BlogCard: React.FunctionComponent<blogcardprops> = ({src, title, content, id, background, active, shadow}) => {

  // const boxShadow = active ? shadow: 'none';
  // const boxShadow = active ? shadow: 'none';
  const isEven = id % 2 === 0;  
  const boxShadow = active ? shadow : 'none';
  return (
    <div className={`h-full rounded-[1.9rem]`} style={{background: background, boxShadow}}>
      {isEven ? (
      <div className='rounded-t-[1.9rem]'>
        
        <div className='flex justify-center items-center pt-[3.3rem]'>
        <div>
         <h3 className='text-[#000] style font-black leading-normal capitalize w-[13.40638rem] md:w-[19.56675rem] montserrat text-[0.98094rem] md:text-[1.43169rem]'>
          {title}
        </h3>
        <p className='w-[11.85319rem] text-[0.57225rem] md:w-[17.29988rem] mt-[0.7rem] text-[#000000] leading-normal Poppins md:text-[0.83519rem] style font-normal md:font-medium capitalize'>
          {content}
          </p>
        </div>
        </div>

        <div className='mt-[5rem]'>
           <img src={src} alt="blog" className='w-[26rem] h-[50%] md:h-[30%] rounded-b-[1.5rem]' />
        </div>

      </div>
      ) : (
        <div className=''>
          <div>
            <img src={src} alt="blog" className='w-[26rem] h-[50%] md:h-[50%] rounded-t-[1.5rem]' />
          </div>

          <div className='flex justify-center items-center mt-[3rem]'>
          <div>
          <h3 className='text-[#000] style font-black leading-normal capitalize w-[13.40638rem] md:w-[19.56675rem] montserrat text-[0.98094rem] md:text-[1.43169rem]'>
            {title}
          </h3>
          <p className='w-[11.85319rem] text-[0.57225rem] md:w-[17.29988rem] mt-[0.7rem] text-[#000000] leading-normal Poppins md:text-[0.83519rem] style font-normal md:font-medium capitalize'>
            {content}
            </p>

          
          </div>
          </div>
        </div>
      )}
    </div>
  )
}
