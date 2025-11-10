import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  HiDocumentText, 
  HiHome, 
  HiHeart, 
  HiBeaker, 
  HiLightningBolt, 
  HiAcademicCap, 
  HiShieldCheck, 
  HiCash,
  HiCheckCircle 
} from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: HiDocumentText,
      title: t('services.birthDeath'),
      description: t('services.birthDeathDesc'),
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-500',
      features: t('services.birthDeathFeatures')
    },
    {
      icon: HiHome,
      title: t('services.housing'),
      description: t('services.housingDesc'),
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-500',
      features: t('services.housingFeatures')
    },
    {
      icon: HiHeart,
      title: t('services.health'),
      description: t('services.healthDesc'),
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-500',
      features: t('services.healthFeatures')
    },
    {
      icon: HiBeaker,
      title: t('services.water'),
      description: t('services.waterDesc'),
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-500',
      features: t('services.waterFeatures')
    },
    {
      icon: HiLightningBolt,
      title: t('services.electricity'),
      description: t('services.electricityDesc'),
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-500',
      features: t('services.electricityFeatures')
    },
    {
      icon: HiAcademicCap,
      title: t('services.education'),
      description: t('services.educationDesc'),
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-500',
      features: t('services.educationFeatures')
    },
    {
      icon: HiShieldCheck,
      title: t('services.socialSecurity'),
      description: t('services.socialSecurityDesc'),
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-500',
      features: t('services.socialSecurityFeatures')
    },
    {
      icon: HiCash,
      title: t('services.tax'),
      description: t('services.taxDesc'),
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-500',
      features: t('services.taxFeatures')
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-green-50">
      {/* Main Services Section */}
      <section className="pt-4 sm:pt-8 md:pt-12 lg:pt-16 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Section Title */}
            <div className="text-center mb-16 mt-8">
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 font-marathi">
                {t('services.title')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mb-6 rounded-full" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-marathi">
                {t('services.subtitle')}
              </p>
            </div>

            {/* Featured Service Showcase */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Service Tabs/List */}
                <div className="lg:col-span-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 font-marathi">
                    {t('services.selectService')}
                  </h3>
                  <div 
                    className="space-y-3 overflow-y-auto max-h-[calc(2*7rem+0.75rem)] pr-2"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#fb923c #f3f4f6'
                    }}
                  >
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <motion.button
                          key={index}
                          onClick={() => setActiveService(index)}
                          whileHover={{ x: 5 }}
                          className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                            activeService === index
                              ? `${service.bgColor} border-l-4 ${service.borderColor} shadow-lg`
                              : 'bg-white border-l-4 border-gray-200 hover:shadow-md'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                              activeService === index 
                                ? `bg-gradient-to-r ${service.color}` 
                                : 'bg-gray-100'
                            }`}>
                              <Icon className={`text-2xl ${
                                activeService === index ? 'text-white' : 'text-gray-500'
                              }`} />
                            </div>
                            <span className={`font-semibold font-marathi ${
                              activeService === index ? 'text-gray-900' : 'text-gray-600'
                            }`}>
                              {service.title}
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Featured Service Details */}
                <div className="lg:col-span-2 flex flex-col justify-end">
                  <motion.div
                    key={activeService}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${services[activeService].bgColor} rounded-2xl p-8 border-2 ${services[activeService].borderColor} shadow-xl min-h-[500px]`}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${services[activeService].color} flex items-center justify-center shadow-lg`}>
                        {(() => {
                          const Icon = services[activeService].icon;
                          return <Icon className="text-4xl text-white" />;
                        })()}
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 font-marathi">
                          {services[activeService].title}
                        </h2>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed font-marathi">
                      {services[activeService].description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 mb-3 font-marathi">{t('services.keyFeatures')}</h4>
                      {services[activeService].features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 bg-white rounded-lg p-3"
                        >
                          <HiCheckCircle className="text-2xl text-green-500 flex-shrink-0" />
                          <span className="text-gray-800 font-marathi">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* All Services Grid */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-marathi">
                  {t('services.allServices')}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ y: -10, scale: 1.03 }}
                      onClick={() => setActiveService(index)}
                      className={`${service.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 ${service.borderColor}`}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="text-3xl text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-marathi">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed font-marathi line-clamp-2">
                        {service.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
