import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "me@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>
        <div className="myInfo" style={{ marginTop: "20px", backgroundColor: "#151030", padding: "20px", borderRadius: "10px" }}>
          <a href="mailto:aayushmankatariya58@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <p style={{ 
              margin: "5px", 
              backgroundColor: "#100D25", 
              padding: "2px", 
              borderRadius: "3px", 
              display: "flex", 
              alignItems: "center", 
              color: "white", 
              textDecoration: "underline", 
              cursor: "pointer" 
            }}>
              <img 
                src={import.meta.env.BASE_URL + "email.png" } 
                alt="email icon" 
                style={{ 
                  width: "20px", 
                  marginRight: "8px", 
                  filter: "drop-shadow(0 0 5px #00ffff)" 
                }} 
              />
              Email: aayushmankatariya58@gmail.com
            </p>
          </a>

          <a href="https://www.linkedin.com/in/aayushman-katariya-007222263" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <p style={{ 
              margin: "5px", 
              backgroundColor: "#100D25", 
              padding: "2px", 
              borderRadius: "3px", 
              display: "flex", 
              alignItems: "center", 
              color: "white", 
              textDecoration: "underline", 
              cursor: "pointer" 
            }}>
              <img 
                src={import.meta.env.BASE_URL + "linkedIN.png"}
                alt="LinkedIn icon" 
                style={{ 
                  width: "20px", 
                  marginRight: "8px", 
                  filter: "drop-shadow(0 0 5px #0077B5)" 
                }} 
              />
              LinkedIn: aayushman-katariya-007222263
            </p>
          </a>

          <a href="https://github.com/aayush00700" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <p style={{ 
              margin: "5px", 
              backgroundColor: "#100D25", 
              padding: "2px", 
              borderRadius: "3px", 
              display: "flex", 
              alignItems: "center", 
              color: "white", 
              textDecoration: "underline", 
              cursor: "pointer" 
            }}>
              <img 
                src={import.meta.env.BASE_URL + "github.png"} 
                alt="GitHub icon" 
                style={{ 
                  width: "20px", 
                  marginRight: "8px", 
                  filter: "drop-shadow(0 0 5px #ffffff)" 
                }} 
              />
              Github: aayush00700
            </p>
          </a>

          <a href="https://instagram.com/aayushman_k__" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <p style={{ 
              margin: "5px", 
              backgroundColor: "#100D25", 
              padding: "2px", 
              borderRadius: "3px", 
              display: "flex", 
              alignItems: "center", 
              color: "white", 
              textDecoration: "underline", 
              cursor: "pointer" 
            }}>
              <img 
                src={import.meta.env.BASE_URL + "instagram.png"} 
                alt="Instagram icon" 
                style={{ 
                  width: "20px", 
                  marginRight: "8px", 
                  filter: "drop-shadow(0 0 5px #E1306C)" 
                }} 
              />
              Instagram: aayushman_k__
            </p>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
