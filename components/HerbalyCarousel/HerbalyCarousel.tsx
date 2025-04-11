"use client";
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import React, { useState } from "react";
import Stars  from './../SVGs/stars'

interface HerbalyCarouselProps {
    CarouselList?: any
    SlideHeadingTextColor?: any
    SlideParagraphTextColor?: any
    verifiedLabelTextColor?: any
    sliderArrowColor?: any
    sliderStarColor?: any
}

function HerbalyCarousel({ CarouselList, SlideHeadingTextColor, SlideParagraphTextColor, verifiedLabelTextColor, sliderArrowColor, sliderStarColor }: HerbalyCarouselProps) {
  const [swiper, setSwiper] = useState<any>(null);

  const nexto = () => {
    swiper?.slideNext();
  };
  const prevto = () => {
    swiper?.slidePrev();
  };

  return (
      <>
        <div className='xl:max-w-7xl xl:mx-auto'>
          <div className="herbaly_slider_container my-16 flex justify-center items-center">
            <div onClick={prevto} style={{ background: sliderArrowColor, borderColor: sliderArrowColor }} className="slider-button_wrapper max-[768px]:hidden cursor-pointer">
              <button style={{ borderColor: "#fff"}} className="icon icon__previous"></button>
            </div>
              <Swiper onSwiper={(s: any) => { setSwiper(s); }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1440: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper max-w-[1500px] mx-auto"
                >
                {CarouselList?.map((data: any, index: any) => (
                  <SwiperSlide key={index}>
                      <div style={{ background: data.CardBackground }} className={"herbaly_slide relative p-[30px] min-h-[360px] number-slide"+index}>      
                        <Image
                          src={ data?.CardImage }
                          width={112}
                          height={112}
                          quality={90}
                          className="absolute top-[-60px] left-2/4 translate-x-[-50%] m-auto"
                          alt="Herbaly Marketplace"
                          loading="lazy"
                        />  
                        <p style={{ color: SlideHeadingTextColor }} className='text-base-[22px] not-italic font-medium leading-[26px] mt-10 whitespace-normal text-center'>{data?.CardTitle}</p>
                        <div className='flex justify-center mt-2 items-center'>
                          <Stars color={ sliderStarColor }/>
                        </div>
                        <p style={{ color: SlideParagraphTextColor }} className='text-base not-italic font-normal mt-4 whitespace-normal text-center'>{data.CardDesciption}</p>
                        
                        <div className='flex justify-center items-center gap-2 mt-2'>
                            <p style={{ color: verifiedLabelTextColor }} className='text-xs' > { data?.ReviewerContainer?.userName } </p>
                            { data?.ReviewerContainer?.image && <Image 
                                src={ data?.ReviewerContainer?.image }
                                width={12}
                                height={12}
                                className="object-contain"
                                alt="Herbaly Marketplace"
                                priority
                            />}
                            <p style={{ color: verifiedLabelTextColor }} className='text-xs' > { data?.ReviewerContainer?.verifiedLabel } </p>
                        </div>
                      </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div onClick={nexto} style={{ background: sliderArrowColor, borderColor: sliderArrowColor }}  className="slider-button_wrapper max-[768px]:hidden cursor-pointer">
                <button style={{ borderColor: "#fff"}} className="icon icon__next"></button>
              </div>
          </div>
        </div>
      </>
  );
}


export default HerbalyCarousel;

