import React from 'react'

type blogcardprops = {
    src: string
}

export const BlogCard: React.FunctionComponent<blogcardprops> = ({src}) => {
  return (
    <div className='w-[28rem] h-[32rem]'>
        <div>
        <img src={src} alt="blog" className='w-[26rem]' />
        </div>
        <div>

        </div>
    </div>
  )
}
