import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiPhone } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const OfficialsSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const officials = [
    {
      name: t('officials.sarpanchName'),
      position: t('officials.sarpanch'),
      phone: '+91 94203 39720',
      image: '/img/Sarpanch-img.webp',
    },
    {
      name: t('officials.upasarpanchName'),
      position: t('officials.upasarpanch'),
      phone: '+91 96890 69663',
      image: '/img/Upsarpanch.webp',
    },
    {
      name: t('officials.officerName'),
      position: t('officials.officer'),
      phone: '+91 7620650052',
      image: '/img/ग्रामपंचायत-अधिकारी.webp',
    },
    {
      name: t('officials.revenueOfficerName'),
      position: t('officials.revenueOfficer'),
      phone: '+91 9039739870',
      image: '/img/MahasulAdhikari1.jpg',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-green-100 text-orange-600 rounded-full text-sm font-semibold font-marathi">
                {t('officials.badge')}
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-marathi">
              {t('officials.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
          </div>

          {/* Officials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officials.map((official, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-80 sm:h-72 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border-4 border-orange-200">
                  <img
                    src={official.image}
                    alt={official.name}
                    className="w-full h-full object-cover object-[center_15%]"
                    style={{ objectPosition: 'center 15%' }}
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  {/* Position Badge */}
                  <div className="inline-block px-5 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold rounded-full mb-3 font-marathi shadow-lg">
                    {official.position}
                  </div>

                  {/* Name */}
                  <h3 className="text-base font-bold text-gray-900 mb-3 font-marathi">
                    {official.name}
                  </h3>

                  {/* Contact Info with Icon - Clickable */}
                  <a 
                    href={`tel:${official.phone}`}
                    className="flex items-center justify-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm">{official.phone}</span>
                  </a>
                </div>

                {/* Bottom Orange Line */}
                <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficialsSection;
