import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qi09uej",
        "template_chv16ul",
        form.current,
        "4Vjq0kl6FbN9UZBjd"
      )
      .then(() => alert("✅ Message sent successfully!"))
      .catch(() => alert("❌ Failed to send message."));
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-3xl mx-auto text-center bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 transition-all duration-700"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="p-3 rounded border dark:bg-gray-700 dark:border-gray-600"
          required
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition"
        >
          Send Message
        </motion.button>
      </motion.form>

      {/* Contact Info */}
      <motion.div
        className="mt-10 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="mb-2">
          📞 Phone:{" "}
          <a href="tel:+254707850704" className="text-blue-600">
            +254 707850704
          </a>
        </p>
        <p className="mb-2">
          📧 Email:{" "}
          <a href="mailto:fredrickodumbe78@gmail.com" className="text-blue-600">
            fredrickodumbe78@gmail.com
          </a>
        </p>

        <div className="flex justify-center gap-6 mt-4 text-2xl text-blue-600">
          <motion.a
            href="https://www.facebook.com/yung.hunter.79"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.3 }}
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://instagram.com/Lyrical_hunter"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.3 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://tiktok.com/@itsme_dice"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.3 }}
          >
            <FaTiktok />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
