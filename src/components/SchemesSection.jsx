import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const SchemesSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleContactClick = () => {
    // Initiate phone call to gram panchayat office
    window.location.href = 'tel:+919876543210'; // Replace with actual gram panchayat phone number
  };

  const schemes = [
    {
      title: t('schemesSection.scheme1Title'),
      description: t('schemesSection.scheme1Desc'),
      link: 'https://rdd.maharashtra.gov.in/event/मुख्यमंत्री-समृध्द-पंचाय/',
    },
    {
      title: t('schemesSection.scheme2Title'),
      description: t('schemesSection.scheme2Desc'),
      link: 'https://nrega.dord.gov.in/MGNREGA_new/Nrega_home.aspx',
    },
    {
      title: t('schemesSection.scheme3Title'),
      description: t('schemesSection.scheme3Desc'),
      link: 'https://swadeshlive.com/viklang-awas-yojana-2025/',
    },
    {
      title: t('schemesSection.scheme4Title'),
      description: t('schemesSection.scheme4Desc'),
      link: 'https://plan.maharashtra.gov.in/%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8D%E0%A4%B9%E0%A4%BE-%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%B7%E0%A4%BF%E0%A4%95-%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A5%87-%E0%A4%B8%E0%A4%82%E0%A4%A7/',
    },
    {
      title: t('schemesSection.scheme5Title'),
      description: t('schemesSection.scheme5Desc'),
      link: 'https://fincomindia.nic.in/commission-reports-fifteenth',
    },
    {
      title: t('schemesSection.scheme6Title'),
      description: t('schemesSection.scheme6Desc'),
      link: 'https://www.abhijeetbharat.com/Encyc/2024/2/6/distribution-of-sant-gadge-baba-gram-swachhta-abhiyan-award.html#/google_vignette',
    },
    {
      title: t('schemesSection.scheme7Title'),
      description: t('schemesSection.scheme7Desc'),
      link: 'https://jaljeevanmission.gov.in/',
    },
    {
      title: t('schemesSection.scheme8Title'),
      description: t('schemesSection.scheme8Desc'),
      link: 'https://majhivasundhara.in/mar/majhi-vasundhara-abhiyan',
    },
    {
      title: t('schemesSection.scheme9Title'),
      description: t('schemesSection.scheme9Desc'),
      link: 'https://sjsa.maharashtra.gov.in/scheme/%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%B8%E0%A5%82%E0%A4%9A%E0%A4%BF%E0%A4%A4-%E0%A4%9C%E0%A4%BE%E0%A4%A4%E0%A5%80-%E0%A4%B5-%E0%A4%A8%E0%A4%B5%E0%A4%AC%E0%A5%8C%E0%A4%A7%E0%A5%8D%E0%A4%A7-%E0%A4%98-2/',
    },
    {
      title: t('schemesSection.scheme10Title'),
      description: t('schemesSection.scheme10Desc'),
      link: 'https://www.xn--i1bj3fqcyde.xn--11b7cb3a6a.xn--h2brj9c/spotlight/%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%9A%E0%A5%8D%E0%A4%9B-%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4-%E0%A4%85%E0%A4%AD%E0%A4%BF%E0%A4%AF%E0%A4%BE%E0%A4%A8-%E0%A4%8F%E0%A4%95-%E0%A4%95%E0%A4%A6%E0%A4%AE-%E0%A4%B8%E0%A5%8D%E0%A4%B5%E0%A4%9A%E0%A5%8D%E0%A4%9B%E0%A4%A4%E0%A4%BE-%E0%A4%95%E0%A5%80-%E0%A4%93%E0%A4%B0',
    },
  ];

  return (
    <section className="relative bg-white">
      {/* Title Section */}
      <div className="bg-gradient-to-b from-orange-50 to-white pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-8 sm:mt-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-marathi">
              {t('schemesSection.title')}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Hero Section - Redesigned */}
      <div className="bg-gradient-to-b from-orange-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Left Image - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/yojanaaaa.webp" 
                  alt={t('schemesSection.title')}
                  className="w-full h-[450px] object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* Right Content - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-6"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-marathi leading-tight">
                  {t('schemesSection.heroTitle')}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-6" />
                <p className="text-lg text-gray-700 font-marathi leading-relaxed mb-8">
                  {t('schemesSection.heroDescription')}
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-orange-500">
                  <div className="text-4xl font-bold text-orange-600 mb-2">{schemes.length}</div>
                  <div className="text-sm text-gray-600 font-marathi">{t('schemesSection.activeSchemes')}</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
                  <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 font-marathi">{t('schemesSection.transparency')}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Schemes Section - New Card Design */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
          >
            {/* Schemes Grid - Clean White Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {schemes.map((scheme, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                    {/* Colored Top Bar */}
                    <div className="h-2 bg-gradient-to-r from-orange-500 to-green-500" />
                    
                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Number Badge */}
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl font-bold text-orange-600">{index + 1}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-marathi leading-tight group-hover:text-orange-600 transition-colors duration-300">
                        {scheme.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 text-sm font-marathi leading-relaxed mb-6 flex-1">
                        {scheme.description}
                      </p>

                      {/* Button */}
                      <a 
                        href={scheme.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full py-3 bg-gradient-to-r from-orange-500 to-green-500 text-white rounded-xl font-semibold font-marathi text-sm hover:from-orange-600 hover:to-green-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 block text-center"
                      >
                        {t('schemesSection.moreInfo')}
                      </a>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-green-500/0 group-hover:from-orange-500/5 group-hover:to-green-500/5 transition-all duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="inline-block p-8 bg-gradient-to-r from-orange-100 to-green-100 rounded-3xl shadow-xl">
                <p className="text-xl font-bold text-gray-800 font-marathi mb-4">
                  {t('schemesSection.contactMessage')}
                </p>
                <motion.button
                  onClick={handleContactClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-orange-600 to-green-600 text-white rounded-full font-bold text-lg font-marathi shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
                >
                  <span className="text-2xl">📞</span>
                  {t('schemesSection.contactButton')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SchemesSection;
