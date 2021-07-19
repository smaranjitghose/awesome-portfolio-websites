import React from 'react'
import { mentor } from './HackathonData'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
  Mousewheel,
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel]);

const params = {
  container: ".container",
  pagination: ".swiper-pagination",
  paginationClickable: true,
  direction: "vertical",
  mousewheel: true,
};

function Hackathon() {
  return (
    <div>
      <h4 className="text-center heading1 mcard">Hackathon <span className="my_experience">Participation</span></h4>

      <main style={{ height: '30em' }}>
        <div className="blog-slider mb-5 mt-5">
          <Swiper {...params} pagination={true} className=" blog-slider__wrp swiper-wrapper">
            {
              mentor.map((data) => (
                <SwiperSlide key={data.title} className="blog-slider__item swiper-slide" >
                  <div className="blog-slider__img">
                    <img src="https://picsum.photos/200/300" alt={data.title}></img>
                  </div>
                  <div className="blog-slider__content">
                    <div className="blog-slider__title">{data.title}</div>
                    <span className="blog-slider__code">{data.subtitle}</span>
                    <div className="blog-slider__text">{data.desp}</div>
                    <a href="#" className="blog-slider__button">Read More</a>
                  </div>
                  <div class="blog-slider__pagination"></div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </main>
    </div>
  )
}

export default Hackathon
