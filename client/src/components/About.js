import React from "react";
//countup
// import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-avatar bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3 mb-4">I'm a FullStack Developer.</h3>
            <p className="mb-6">
              I like to increase my soft and technological skills to be a
              potential added value in any work group, looking to learn new
              tools, techniques and ways to increase productivity and
              efficiency.
            </p>
            {/* stats  */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  
                  {inView ? <CountUp start={0.005} end={13} duration={5} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br /> Experience
                </div>
              </div> */}
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={5} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> Completed
                </div>
              </div> */}
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={12} duration={5} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br /> Clients
                </div>
              </div> */}
            </div>
            <div className="flex gap-x-8 items-center justify-between">
            <a href={require("../assets/cv/luis-blanco-cv.pdf")} className="btn btn-lg  flex items-center" target="_blank" rel="noreferrer">
                View CV
              </a>
              <a href={require("../assets/cv/luis-blanco-cv.pdf")} className="btn btn-lg flex items-center" download="Curriculum-Luis-Blanco">
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
