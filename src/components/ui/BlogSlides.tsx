import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { BlogCard } from './BlogCard';
import { blogCardData } from '@/blogCardData';

export const BlogSlides: React.FunctionComponent = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  const handleSlideChange = (swiper: Swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };

  return (
    <div className="blog-container">
      <h1 className="capitalize montserrat px-[1.5rem] md:px-[2.5rem] text-[1.5rem] md:text-[2.25rem] font-black leading-normal text-[#fff] my-[1.38rem] md:my-[4rem]">
        My Blogs
      </h1>
      <Swiper
        effect={'coverflow'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        breakpoints={{
          200: {
            spaceBetween: 50,
          },
          740: {
            spaceBetween: 80,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
        onSlideChange={handleSlideChange}
      >
        {blogCardData.map((blog, index) => (
          <SwiperSlide key={blog.id}>
            <BlogCard
              id={blog.id}
              src={blog.pic}
              title={blog.title}
              content={blog.content}
              background={blog.background}
              active={activeSlideIndex === index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
