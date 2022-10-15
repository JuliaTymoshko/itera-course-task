import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper';

const TechnologiesSlider = () => {
  return (
    <>
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
            alt="react"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://play-lh.googleusercontent.com/85WnuKkqDY4gf6tndeL4_Ng5vgRk7PTfmpI4vHMIosyq6XQ7ZGDXNtYG2s0b09kJMw"
            alt="html"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://play-lh.googleusercontent.com/RTAZb9E639F4JBcuBRTPEk9_92I-kaKgBMw4LFxTGhdCQeqWukXh74rTngbQpBVGxqo"
            alt="css"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
            alt="javascript"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TechnologiesSlider;
