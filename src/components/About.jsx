import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: t('aboutSection.faq1Q'),
      answer: t('aboutSection.faq1A')
    },
    {
      question: t('aboutSection.faq2Q'),
      answer: t('aboutSection.faq2A')
    },
    {
      question: t('aboutSection.faq3Q'),
      answer: t('aboutSection.faq3A')
    },
    {
      question: t('aboutSection.faq4Q'),
      answer: t('aboutSection.faq4A')
    },
    {
      question: t('aboutSection.faq5Q'),
      answer: t('aboutSection.faq5A')
    },
    {
      question: t('aboutSection.faq6Q'),
      answer: t('aboutSection.faq6A')
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 via-green-50 to-orange-50 overflow-x-hidden">
      {/* About Village Section */}
      <section className="pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            {/* Section Title */}
            <div className="text-center mb-10 mt-8 sm:mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-marathi">
                  {t('aboutSection.title')}
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-16 h-1 bg-orange-500 rounded-full" />
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                  <div className="w-16 h-1 bg-orange-500 rounded-full" />
                </div>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto font-marathi px-4">
                  {t('aboutSection.subtitle')}
                </p>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 max-w-2xl mx-auto px-2"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border-2 sm:border-4 border-orange-500">
                <img 
                  src="/img/mahiti11.jpg" 
                  alt="शेडगेवाडी गाव"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Village Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h3 className="text-4xl font-bold text-green-700 mb-2 font-marathi drop-shadow-md">
                {t('aboutSection.villageTitle')}
              </h3>
              <p className="text-gray-600 text-lg font-marathi">{t('aboutSection.villageSubtitle')}</p>
            </motion.div>

            {/* Three Equal Cards in Row */}
            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 items-end px-2">
              {/* Card 1 - Location & Overview */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border-t-4 border-green-500 hover:shadow-xl transition-all h-full flex flex-col"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🏘️</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-green-700 mb-3 font-marathi text-center">{t('aboutSection.card1Title')}</h4>
                <p className="text-gray-700 leading-relaxed font-marathi text-center flex-grow">
                  {t('aboutSection.card1Text')}
                </p>
              </motion.div>

              {/* Card 2 - Economy */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-all h-full flex flex-col"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🌾</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-orange-700 mb-3 font-marathi text-center">{t('aboutSection.card2Title')}</h4>
                <p className="text-gray-700 leading-relaxed font-marathi text-center flex-grow">
                  {t('aboutSection.card2Text')}
                </p>
              </motion.div>

              {/* Card 3 - Gram Panchayat */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all h-full flex flex-col"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl">🏛️</span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-blue-700 mb-3 font-marathi text-center">{t('aboutSection.card3Title')}</h4>
                <p className="text-gray-700 leading-relaxed font-marathi text-center flex-grow">
                  {t('aboutSection.card3Text')}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-marathi">
                {t('aboutSection.faqTitle')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-orange-50 rounded-xl shadow-lg overflow-hidden border-2 border-orange-400 hover:shadow-xl transition-shadow"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-orange-600 font-marathi flex items-center gap-3">
                      <span className="text-orange-500">➔</span>
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <HiChevronUp className="text-2xl text-orange-500 flex-shrink-0" />
                    ) : (
                      <HiChevronDown className="text-2xl text-orange-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-gray-700 leading-relaxed font-marathi border-t border-gray-100 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location & Transport Section */}
      <section className="py-20 bg-gradient-to-b from-white to-orange-50/30 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 px-2">
            {/* Transport Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 border-t-4 border-orange-500 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚌</span>
                </div>
                <h2 className="text-2xl font-bold text-orange-600 font-marathi">
                  {t('aboutSection.transportTitle')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed font-marathi mb-6">
                {t('aboutSection.transportText')}
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-orange-200">
                <img 
                  src="/img/mahiti2.webp" 
                  alt="गावातील वाहतूक"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Village Location */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 border-t-4 border-green-500 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏘️</span>
                </div>
                <h2 className="text-2xl font-bold text-green-600 font-marathi">
                  {t('aboutSection.nearbyTitle')}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed font-marathi mb-6">
                {t('aboutSection.nearbyText')}
              </p>
              <div className="space-y-3">
                {t('aboutSection.villages').map((village, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    <span className="text-gray-800 font-semibold font-marathi">{village}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
