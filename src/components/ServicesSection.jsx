import React from 'react';
import { motion } from 'framer-motion';
import { HiDocumentText, HiHome, HiHeart, HiLightningBolt, HiCash, HiAcademicCap, HiShieldCheck, HiClipboardList } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();
  const services = [
    {
      icon: HiDocumentText,
      titleKey: 'services.birthDeath',
      descKey: 'services.birthDeathDesc',
    },
    {
      icon: HiHome,
      titleKey: 'services.housing',
      descKey: 'services.housingDesc',
    },
    {
      icon: HiHeart,
      titleKey: 'services.health',
      descKey: 'services.healthDesc',
    },
    {
      icon: HiLightningBolt,
      titleKey: 'services.water',
      descKey: 'services.waterDesc',
    },
    {
      icon: HiLightningBolt,
      titleKey: 'services.electricity',
      descKey: 'services.electricityDesc',
    },
    {
      icon: HiAcademicCap,
      titleKey: 'services.education',
      descKey: 'services.educationDesc',
    },
    {
      icon: HiShieldCheck,
      titleKey: 'services.socialSecurity',
      descKey: 'services.socialSecurityDesc',
    },
    {
      icon: HiCash,
      titleKey: 'services.tax',
      descKey: 'services.taxDesc',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-green-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full filter blur-3xl opacity-20 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20 translate-x-32 translate-y-32"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-green-100 text-orange-600 rounded-full text-sm font-semibold font-marathi">
              {t('services.badge')}
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-marathi">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto font-marathi leading-relaxed">
            {t('services.subtitle2')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              whileHover={{ y: -12, scale: 1.03, rotateY: 5 }}
              className="relative group perspective-1000"
            >
              <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-2xl p-6 h-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform-gpu">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white to-transparent"></div>
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 font-marathi drop-shadow-md">
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-white/95 text-sm font-marathi leading-relaxed drop-shadow-sm">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
