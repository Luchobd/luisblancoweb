import React from "react";
import Image from "../assets/profile/luis-w-blanco.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              LUIS<span> BLANCO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Engineer",
                  2000,
                  "Developer",
                  2000,
                  "FullStack",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a href={require("../assets/cv/luis-blanco-cv.pdf")} className="btn btn-lg  flex items-center" target="_blank" rel="noreferrer">
                View CV
              </a>
              <a href={require("../assets/cv/luis-blanco-cv.pdf")} className="btn btn-lg flex items-center" download="Curriculum-Luis-Blanco">
                Download CV
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://www.linkedin.com/in/luis-wuilfredo-blanco-delgado-b47619207/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Luchobd" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/luchowbd/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[420px]"
          >
            <img src={Image} alt="Yo" style={{opacity: 0.5}}/>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
