import React from "react";
import { ChatBubbleOvalLeftEllipsisIcon, MinusIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import { Navigation, A11y, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

export default () => {
    const TestiList = [
        {id: 1, name:"Rizal Kenz", desc:"Dory work was some of the best we've seen. Eu pretium neque cras sed pus et lectus", job:"CEO Tradingkuy"},
        {id: 2, name:"Mikami Yue", desc:"The service is really good and i think is the best agency than others. Thank you so much", job:"Founder Hiroshima LLC"},
        {id: 3, name:"Muhammad Draken", desc:"Working with dorry was a great experience! Their designer are creative and handsome!", job:"Founder Touman LLC"},
        {id: 4, name:"Tomioka Giyu", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", job:"CEO Hashira LLC"},
        {id: 5, name:"Jessi Alexandra", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", job:"Founder SENDS"},
        {id: 6, name:"Odin", desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", job:"CEO Ragnarok"}
    ];
    return <>
    <div className="container mx-auto lg:px-20 lg:mt-32 px-4">
                        <p className="flex items-center text-yellow-400 font-semibold lg:text-lg"><span className="mr-2"><MinusIcon className="w-4"/></span> Services</p>
            <div>
                <h1 className="text-3xl tracking-wide font-bold my-6 lg:text-5xl lg:leading-snug">What our clients say  <br className="hidden lg:block"/>about us</h1>
            </div>
            <div className="my-6">
                <Swiper

                modules={[Navigation, Pagination, A11y]}
                spaceBetween={50}
                breakpoints={{
                    0: {
                        slidesPerView:1
                    },
                    768: {
                        slidesPerView:2
                    },
                    1024: {
                        slidesPerView:3
                    }
                }}

                // navigation
                pagination={{ 
                    clickable: true, 
                    dynamicBullets: true,
                    }}
                >
                {TestiList.map((Testimoni) =>
                [
                <SwiperSlide >
                    <div className="px-6 py-8 my-4 mb-14 border border-slate-100 rounded-sm hover:shadow-[-10px_-20px_30px_-30px_rgba(0,0,0,0.1)] hover:border-white">
                        <p className="font-bold mb-8 text-zinc-500" ><ChatBubbleOvalLeftEllipsisIcon className="w-8" /></p>
                        <p className="font-thin text-gray-500 text-sm lg:text-md lg:leading-relaxed">{Testimoni.desc}</p>
                        <div className="flex items-center justify-between">
                            <p className="font-bold text-md my-4 lg:text-lg">{Testimoni.name}</p>
                            <div className="flex items-center">
                                <StarIcon className="w-4 text-yellow-400"/>
                                <p className="font-bold text-md ml-2 lg:text-lg">4.8</p>
                            </div>
                        </div>
                        <p className="font-thin text-gray-500 text-sm lg:text-md lg:leading-relaxed">{Testimoni.job}</p>
                    </div>
                </SwiperSlide>
                ]
                )}
                </Swiper>
            </div>
        </div>
    </>
}