import React, { useState } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// axios and Alert
import axios from "axios";
import Swal from "sweetalert2";

const Contact = () => { 
  const [sendMessage, setSendMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setSendMessage({
      ...sendMessage,
      [event.target.name]: event.target.value,
    });
  };

  const API = "http://localhost:3005/email";
  const sendEmail = async (formData) => await axios.post(`${API}`, formData);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (sendMessage.name && sendMessage.email && sendMessage.message) {
      sendEmail(sendMessage);

      Swal.fire(
        "Message sent",
        "Your message was sent successfully.",
        "success"
      );

      setSendMessage({
        name: "",
        email: "",
        message: "",
      });
    } else {
      Swal.fire(
        "Complete the form",
        "Please fill in all the fields",
        "warning"
      );
    }
  };
  return (
    <section id="contact" className="py-16 lg:section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={(event) => handleSubmit(event)}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-500 focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              value={sendMessage.name}
              name="name"
              onChange={(event) => handleChange(event)}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-500 focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              value={sendMessage.email}
              name="email"
              onChange={(event) => handleChange(event)}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-gray-500 focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              value={sendMessage.message}
              name="message"
              onChange={(event) => handleChange(event)}
            />
            <button type="submit" className="btn btn-lg">
              Send message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
