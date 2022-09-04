import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/css/effect-fade';
import image from './Rectangle.png';

export default function Swipe() {

    return (
        <Swiper
            modules={[EffectFade]}
            grabCursor={true}
            slidesPerView={1}
            spaceBetween={30}
        >
            <SwiperSlide className="swipeslide">
                <h1 className="block">Починить диван</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1> </h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1>c</h1>
            </SwiperSlide>
        </Swiper>
    );
};