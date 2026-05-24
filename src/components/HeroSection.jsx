"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import { useState } from 'react';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Find Your Perfect Doctor",
      subtitle: "Book appointments with trusted doctors from anywhere in Bangladesh",
      buttonText: "Browse Doctors",
      buttonLink: "/all-appointments",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&auto=format",
      bgOverlay: "bg-black/50"
    },
    {
      id: 2,
      title: "24/7 Online Appointment",
      subtitle: "Schedule your visit anytime, anywhere with just a few clicks",
      buttonText: "Book Now",
      buttonLink: "/all-appointments",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920&auto=format",
      bgOverlay: "bg-black/50"
    },
    {
      id: 3,
      title: "Top Rated Specialists",
      subtitle: "Connect with experienced doctors across all specialties",
      buttonText: "View All Doctors",
      buttonLink: "/all-appointments",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&auto=format",
      bgOverlay: "bg-black/50"
    }
  ];

  return (
    <div className="relative w-full h-[600px] md:h-[650px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white !opacity-70',
          bulletActiveClass: '!bg-blue-600 !opacity-100',
        }}
        navigation={true}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* ইমেজ ট্যাগ ব্যবহার করে স্লাইড */}
              <img 
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* ওভারলে */}
              <div className={`absolute inset-0 ${slide.bgOverlay}`}></div>
              
              {/* কন্টেন্ট */}
              <div className="relative h-full flex flex-col md:flex-row items-center justify-between container mx-auto px-4 md:px-6 py-12 md:py-0">
                <div className="text-white text-center md:text-left md:w-1/2 space-y-6 z-10">
                  <h1 
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-500"
                    style={{ 
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.5s ease-out'
                    }}
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className="text-lg md:text-xl text-white/90 max-w-lg mx-auto md:mx-0 transition-all duration-500 delay-100"
                    style={{ 
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.5s ease-out 0.1s'
                    }}
                  >
                    {slide.subtitle}
                  </p>
                  
                  <div 
                    className="transition-all duration-500 delay-200"
                    style={{ 
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.5s ease-out 0.2s'
                    }}
                  >
                    <Link href={slide.buttonLink}>
                      <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0">
                        {slide.buttonText}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;