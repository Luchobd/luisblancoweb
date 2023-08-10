import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import 'swiper/css/scrollbar';

import crni from "../assets/certificate/diploma-react-native.jpg";
import cnest from "../assets/certificate/diploma-nestjs_page-0001.jpg";
import cfistweb from "../assets/certificate/diploma-primera-pagina-web-2022-diploma_page-0001.jpg";
import cts from "../assets/certificate/diploma-typescript_page-0001.jpg";
import ctsa from "../assets/certificate/diploma-typescript-tipos-avanzados_page-0001.jpg";
import chenry from '../assets/certificate/luis-blanco-henry.jpg'
import chtmlcss from '../assets/certificate/diploma-html-css.jpg'
import coop from '../assets/certificate/diploma-oop.jpg'


const Certificate = () => {
  const sliderCertificate = [
    {
      image: chenry,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
    {
      image: cfistweb,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
     {
      image: chtmlcss,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
    {
      image: coop,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
    {
      image: cts,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
    {
      image: ctsa,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
    {
      image: cnest,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
    {
      image: crni,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
    {
      image: crni,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
    {
      image: crni,
      title: "Certificate Platzi",
      subTitle: "Introduction to React Native",
      interval: "2000",
    },
  ];

  return (
    <section className="ml-[1.5rem]" id="certificate">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2 className="h2 leading-tight text-accent pt-10">certificates.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="section p-0"
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2.5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {sliderCertificate.map((slide, index) => (
            
            <SwiperSlide key={index}>
              <img src={slide.image} alt={slide.title} style={{borderRadius: "0.75rem"}}/>
              <h1>{slide.title}</h1>
              <h3>{slide.subTitle}</h3>
            </SwiperSlide>
           
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Certificate;
