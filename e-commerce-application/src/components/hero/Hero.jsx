import React from 'react'
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from '../../images/slider1.webp';
import slider2 from '../../images/slider2.webp';

// khaderbee number (settigunta) 9963622714.

const Hero = () => {
    return (
        <div>
            <section className="hero-section">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    navigation
                    loop
                    className="hero-swiper">
                    <SwiperSlide>
                        <div className="slide">
                            <img src={slider1} alt="Big Sale" />

                            <div className="overlay">
                                <h1>Big Sale</h1>
                                <p>Up to 50% off on selected items</p>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="slide">
                            <img src={slider2} alt="New Arrivals" />

                            <div className="overlay">
                                <h1>New Arrivals</h1>
                                <p>Check out the latest trends</p>
                                <button>Explore</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    )
}

export default Hero