import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => alert('Message sent successfully!'))
      .catch(() => alert('Failed to send message.'));
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Your Name" className="p-3 rounded border" required />
        <input type="email" name="email" placeholder="Your Email" className="p-3 rounded border" required />
        <textarea name="message" rows="5" placeholder="Your Message" className="p-3 rounded border" required></textarea>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded">
          Send Message
        </button>
      </form>

      {/* Contact Info Section */}
      <div className="mt-10 text-gray-700 dark:text-gray-300">
        <p className="mb-2">
          📞 Phone:{' '}
          <a href="tel:+254707850704" className="text-blue-600">
            +254 707850704
          </a>
        </p>
        <p className="mb-2">
          📧 Email:{' '}
          <a href="mailto:fredrickodumbe78@gmail.com" className="text-blue-600">
            fredrickodumbe78@gmail.com
          </a>
        </p>
        <div className="flex justify-center gap-6 mt-4 text-2xl text-blue-600">
          <a href="https://www.facebook.com/yung.hunter.79" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com/Lyrical_hunter" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://tiktok.com/@itsme_dice" target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
