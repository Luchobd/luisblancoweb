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

import { sliderCertificate } from "../certificate";


const Certificate = () => {
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
              <img
                src={slide.image}
                alt={slide.title}
                style={{ borderRadius: "0.75rem" }}
              />
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
