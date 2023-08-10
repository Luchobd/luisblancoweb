import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        {/* text */}
        <div className="flex justify-between items-center">
          <motion.h2
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="h2 leading-tight text-accent"
          >
            my latest <br /> personal projects.
          </motion.h2>
          {/* <p className="max-w-sm mb-[1.5rem]">
              section for my projects and practices. Taking a look at my github and deploying.
              </p> */}
          <motion.a
            href="https://github.com/Luchobd"
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="btn btn-sm flex items-center"
          >
            See my github profile
          </motion.a>
        </div>
        <dir className="flex flex-col lg:flex-row gap-x-10 pl-0">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 mb-10 lg:mb-0"
          >
            {/* text */}
            {/* <div>
              <h2 className="h2 leading-tight text-accent">
              My latest <br/> projects.
              </h2>
              <p className="max-w-sm mb-16">
              section for my projects and practices. Taking a look at my github and deploying.
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div> */}
            {/* image - 0 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="project-1"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">FullStack Developer</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  TODO list and login - TypeScript
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-2xl text-white">
                  MongoDB - Express - ReactNative
                </span>
              </div>
            </div>
            {/* image - 1 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt="project-1"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">
                  FullStack Developer TS and Dart
                </span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  TODO list and login - TS and Dart
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-2xl text-white">
                  PostgreSQL - Express - Flutter
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image - 2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="project-1"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">FullStack Developer</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Ecommerce - TypeScript
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-2xl text-white">
                  MongoDB - Express - React - ReactNative
                </span>
              </div>
            </div>
            {/* image - 3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-all duration-300"></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="project-1"
              />
              {/* pre-title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">FullStack Developer</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  TODO list and login - TypeScript
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-2xl text-white">
                  PostgreSQL - Nest - VueTs
                </span>
              </div>
            </div>
          </motion.div>
        </dir>
      </div>
    </section>
  );
};

export default Work;
