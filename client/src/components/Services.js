import React from "react";
//icon
import { BsAndroid2 } from "react-icons/bs";
import { SiTypescript, SiJavascript, SiMongodb, SiFlutter } from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaReact,
  FaNode,
  FaGitAlt,
  FaFigma
} from "react-icons/fa";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Elektra e Italikamx",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    link: "Link more",
  },
  {
    name: "Davivienda Marketplace - Front Ent",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    link: "Link more",
  },
  {
    name: "Bootcamp Henry - Teaching Assistant (TA)",
    description:
      "My main tasks were to coordinate a group of students to achieve integration in the study group, guiding students throughout the course, helping them to solve exercises and fostering group collaboration and proposing ideas to improve their processes.",
    link: "Link more",
    linkIcon: "https://bocaditosconsazon.netlify.app/",
    linkText: "https://bocaditosconsazon.netlify.app/",
  },
  {
    name: "Bocaditos con Sazón - Front Ent",
    description:
      'Work on creating the entire landing page. This website is to market fast food at home.',

    link: "Link page",
    linkIcon: "https://bocaditosconsazon.netlify.app/",
    linkText: "https://bocaditosconsazon.netlify.app/",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-[35px]">Skills</h2>
            <div className="mr-[50px]">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-[4rem]">
                <div className="flex items-center justify-center">
                  <FaHtml5 className="w-[100px] h-[100px] text-[#ff4500]" />
                </div>
                <div className="flex items-center justify-center">
                  <FaCss3Alt className="w-[100px] h-[100px] text-[#01a1e4]" />
                </div>
                <div className="flex items-center justify-center">
                  <SiJavascript className="w-[100px] h-[100px] text-[#ffd700]" />
                </div>
                <div className="flex items-center justify-center">
                  <FaReact className="w-[100px] h-[100px] text-[#6495ed]" />
                </div>
                <div className="flex items-center justify-center">
                  <FaNode className="w-[100px] h-[100px] text-[#008000]" />
                </div>
                <div className="flex items-center justify-center">
                  <SiTypescript className="w-[100px] h-[100px] text-[#2d79c7]" />
                </div>
                <div className="flex items-center justify-center">
                  <FaDatabase className="w-[100px] h-[100px] text-[#2f6792]" />
                </div>
                <div className="flex items-center justify-center">
                  <SiMongodb className="w-[100px] h-[100px] text-[#15a356]" />
                </div>
                <div className="flex items-center justify-center">
                  <FaGitAlt className="w-[100px] h-[100px] text-[#ef5033]" />
                </div>
                <div className="flex items-center justify-center">
                  <SiFlutter className="w-[100px] h-[100px] text-[#54c5f8]" />
                </div>
                <div className="flex items-center justify-center">
                  <BsAndroid2 className="w-[100px] h-[100px] text-[#a5c736]" />
                </div>
                <div className="flex items-center justify-center">
                  <FaFigma className="w-[100px] h-[100px] text-[#ff4500]" />
                </div>
              </div>
            </div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <h2 className="h2 text-accent mb-6">Experience</h2>
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description} = service;
                return (
                  <div
                    className="border-b border-white/20  mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      {/* <a
                        href={linkIcon}
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href={linkText} className="text-gradient text-sm">
                        {link}
                      </a> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
