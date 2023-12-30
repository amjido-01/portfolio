import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BlogCard } from "./BlogCard";
import blogcard from '@/assets/blogcard.png'


import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
// import test from '@/assets/test.jpg';
import test2 from '@/assets/test2.jpg';
import test3 from '@/assets/test3.jpg';
import test4 from '@/assets/test4.jpg';
import test1 from '@/assets/test1.jpg';
import test5 from '@/assets/test5.jpg';
import test6 from '@/assets/test6.jpg';
import test7 from '@/assets/test7.jpg';


interface blogcardprops {
   card: {
     id: number;
    pic: string;
    alt: string
    title: string;
    content: string
   }
}


export const Testing: React.FunctionComponent = () => {
  return (
   <div className="border-2 blog-container">
     <h1 className="capitalize montserrat text-[1.5rem] md:text-[2.25rem] font-black leading-normal text-[#fff] my-[1.38rem] md:my-[4rem]">
          My Blogs
        </h1>
      <Swiper
        effect={"coverflow"}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        // spaceBetween={80}
        breakpoints={{
            200: {
                spaceBetween: 50
            },

            740: {
                spaceBetween: 80
            }
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {}
        <SwiperSlide>
          {/* <img src={test} alt="slide_image" /> */}
          <BlogCard src={blogcard}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={test2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={test7} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
