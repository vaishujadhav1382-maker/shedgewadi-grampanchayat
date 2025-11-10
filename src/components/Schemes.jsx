import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiHome, HiBriefcase, HiSparkles, HiCake } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const Schemes = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const schemes = [
    {
      icon: HiHome,
      title: t('schemes.pmay'),
      description: t('schemes.pmayDesc'),
      color: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
      gradient: 'from-orange-500/90 to-red-600/90',
      badgeColor: 'bg-orange-500',
      category: t('schemes.categoryHousing'),
    },
    {
      icon: HiBriefcase,
      title: t('schemes.mgnrega'),
      description: t('schemes.mgnregaDesc'),
      color: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1509099863731-ef4bff19e808?w=400',
      gradient: 'from-green-500/90 to-emerald-600/90',
      badgeColor: 'bg-green-500',
      category: t('schemes.categoryEmployment'),
    },
    {
      icon: HiSparkles,
      title: t('schemes.swachh'),
      description: t('schemes.swachhDesc'),
      color: 'from-blue-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400',
      gradient: 'from-blue-500/90 to-cyan-600/90',
      badgeColor: 'bg-blue-500',
      category: t('schemes.categoryCleanliness'),
    },
    {
      icon: HiCake,
      title: t('schemes.midday'),
      description: t('schemes.middayDesc'),
      color: 'from-pink-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400',
      gradient: 'from-purple-500/90 to-pink-600/90',
      badgeColor: 'bg-purple-500',
      category: t('schemes.categoryEducation'),
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="schemes" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-marathi">
              {t('schemes.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mb-6" />
            <p className="text-xl text-gray-600 font-marathi max-w-3xl mx-auto">
              {t('schemes.subtitle')}
            </p>
          </motion.div>

          {/* Schemes Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {schemes.map((scheme, index) => {
              const Icon = scheme.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-white rounded-3xl overflow-hidden border-2 border-transparent hover:border-orange-200 shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  {/* Scheme Image */}
                  <div className="relative h-56 overflow-hidden">
                    <motion.img 
                      src={scheme.image} 
                      alt={scheme.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`${scheme.badgeColor} text-white px-4 py-2 rounded-full text-sm font-bold font-marathi inline-flex items-center gap-2`}>
                        <Icon className="text-lg" />
                        {scheme.category}
                      </span>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-bl-full" />
                  </div>

                  {/* Scheme Content */}
                  <div className="p-8 relative flex-grow">
                    {/* Decorative Icon Background */}
                    <div className="absolute -top-8 right-8 text-8xl opacity-5 pointer-events-none">
                      <Icon />
                    </div>

                    <h3 className="text-3xl font-extrabold text-gray-900 mb-4 font-marathi group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-green-600 transition-all duration-300">
                      {scheme.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed font-marathi text-base">
                      {scheme.description}
                    </p>
                  </div>

                  {/* Bottom Decorative Line */}
                  <div className={`h-2 bg-gradient-to-r ${scheme.gradient}`} />
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Call to Action */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-16"
          >
            <div className="inline-block p-8 bg-gradient-to-r from-orange-100 to-green-100 rounded-3xl shadow-xl">
              <p className="text-xl font-bold text-gray-800 font-marathi mb-4">
                {t('schemes.ctaMessage')}
              </p>
              <motion.button
                onClick={() => window.location.href = 'tel:+919876543210'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-green-600 text-white rounded-full font-bold text-lg font-marathi shadow-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
              >
                <span className="text-2xl">📞</span>
                {t('schemes.ctaButton')}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schemes;
