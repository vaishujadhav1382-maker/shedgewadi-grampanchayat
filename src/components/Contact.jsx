import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLocationMarker, HiPhone, HiMail, HiExternalLink } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

const Contact = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - you can add email service integration here
    console.log('Form submitted:', formData);
    alert(t('contact.successMessage'));
    // Reset form
    setFormData({
      name: '',
      mobile: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: HiLocationMarker,
      title: t('contact.address'),
      content: t('contact.addressText'),
      link: 'https://maps.app.goo.gl/NBA3txotAFzutXxm7',
      linkText: t('contact.getDirections'),
    },
    {
      icon: HiPhone,
      title: t('contact.phone'),
      content: '+91 7620650052',
      link: 'tel:+917620650052',
      linkText: null,
    },
    {
      icon: HiMail,
      title: t('contact.email'),
      content: 'gpshedgewadi@gmail.com',
      link: 'mailto:gpshedgewadi@gmail.com',
      linkText: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative bg-white">
      {/* Title Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-marathi">
              {t('contact.pageTitle')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >

          {/* Form Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12">
            <div className="bg-gradient-to-r from-orange-50 to-green-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 max-w-3xl mx-auto border-l-4 border-orange-500">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 font-marathi">
                {t('contact.formTitle')}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 font-marathi leading-relaxed">
                {t('contact.formDescription')}</p>
            </div>
          </motion.div>

          {/* Form and Contact Info Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Contact Form */}
            <motion.div 
              variants={itemVariants}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.25)" }}
            >
              <div className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 rounded-xl shadow-lg hover:shadow-2xl p-4 sm:p-6 lg:p-8 border-2 border-orange-200 transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2 font-marathi text-sm">
                      {t('contact.nameLabel')}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t('contact.namePlaceholder')}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 font-marathi bg-gray-50 transition-all"
                    />
                  </div>

                  {/* Mobile Number Field */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2 font-marathi text-sm">
                      {t('contact.mobileLabel')}
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder={t('contact.mobilePlaceholder')}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 font-marathi bg-gray-50 transition-all"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2 font-marathi text-sm">
                      {t('contact.emailLabel')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t('contact.emailPlaceholder')}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 font-marathi bg-gray-50 transition-all"
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2 font-marathi text-sm">
                      {t('contact.subjectLabel')}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t('contact.subjectPlaceholder')}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 font-marathi bg-gray-50 transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-gray-800 font-semibold mb-2 font-marathi text-sm">
                      {t('contact.messageLabel')}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.messagePlaceholder')}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 font-marathi bg-gray-50 resize-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3.5 rounded-lg font-bold text-base font-marathi shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {t('contact.submitButton')}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right Side - Contact Info and Map */}
            <motion.div 
              variants={itemVariants}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {/* Visit Location */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.03, x: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-500 text-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="bg-white/30 p-3.5 rounded-full flex-shrink-0 shadow-lg"
                    >
                      <HiLocationMarker className="text-3xl drop-shadow-lg" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 font-marathi">
                        {t('contact.visitTitle')}
                      </h3>
                      <p className="font-marathi leading-relaxed text-sm opacity-95">
                        {t('contact.addressText')}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.03, x: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 text-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="bg-white/30 p-3.5 rounded-full flex-shrink-0 shadow-lg"
                    >
                      <HiMail className="text-3xl drop-shadow-lg" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 font-marathi">
                        {t('contact.emailTitle')}
                      </h3>
                      <a href="mailto:gpshedgewadi@gmail.com" className="hover:underline text-sm">
                        gpshedgewadi@gmail.com
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.03, x: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-500 text-white p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      className="bg-white/30 p-3.5 rounded-full flex-shrink-0 shadow-lg"
                    >
                      <HiPhone className="text-3xl drop-shadow-lg" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold mb-1 font-marathi">
                        {t('contact.callTitle')}
                      </h3>
                      <a href="tel:+917620650052" className="text-lg font-semibold hover:underline">
                        +91 7620650052
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Map */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl h-[350px] border-2 border-gradient-to-r from-orange-300 to-green-300 transition-all"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3823.5!2d74.1!3d16.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU0JzAwLjAiTiA3NMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shedgewadi Location"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
