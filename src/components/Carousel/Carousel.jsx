import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import bannerCentro from '../../assets/gif/banner-centro.gif'
import banner from '../../assets/gif/banner.gif'
import gifBanner from '../../assets/gif/gif-banner.gif'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Carousel () {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={500}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='flex justify-center'><img className='w-1/2' src={bannerCentro} alt="" /></SwiperSlide>
      <SwiperSlide className='flex justify-center'><img className='w-1/2' src={banner} alt="" /></SwiperSlide>
      <SwiperSlide className='flex justify-center'><img className='w-1/2' src={gifBanner} alt="" /></SwiperSlide>
      ...
    </Swiper>
  );
};