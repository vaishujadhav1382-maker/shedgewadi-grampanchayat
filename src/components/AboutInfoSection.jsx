import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiUsers, HiHome, HiAcademicCap, HiLocationMarker, HiOfficeBuilding, HiShieldCheck, HiSparkles, HiCake, HiDocumentText, HiLightBulb, HiHeart, HiStar } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const AboutInfoSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Statistics/Info Cards - Exact from screenshot with varied colors
  const infoCards = [
    { icon: HiLocationMarker, labelKey: 'about.infoCards.establishment', valueKey: 'about.infoCards.establishmentDate', color: 'from-red-500 to-red-600' },
    { icon: HiUsers, labelKey: 'about.infoCards.population', valueKey: 'about.infoCards.populationValue', color: 'from-orange-500 to-orange-600' },
    { icon: HiUsers, labelKey: 'about.infoCards.male', value: '512', color: 'from-pink-500 to-pink-600' },
    { icon: HiUsers, labelKey: 'about.infoCards.female', value: '518', color: 'from-purple-500 to-purple-600' },
    { icon: HiHome, labelKey: 'about.infoCards.families', value: '239', color: 'from-blue-500 to-blue-600' },
    { icon: HiUsers, labelKey: 'about.infoCards.voters', value: '689', color: 'from-indigo-500 to-indigo-600' },
    { icon: HiLocationMarker, labelKey: 'about.infoCards.area', value: '3km/sq', color: 'from-green-500 to-green-600' },
    { icon: HiSparkles, labelKey: 'about.infoCards.streetLights', value: '67', color: 'from-yellow-500 to-yellow-600' },
    { icon: HiOfficeBuilding, labelKey: 'about.infoCards.anganwadi', value: '2', color: 'from-teal-500 to-teal-600' },
    { icon: HiAcademicCap, labelKey: 'about.infoCards.school', value: '1', color: 'from-cyan-500 to-cyan-600' },
    { icon: HiOfficeBuilding, labelKey: 'about.infoCards.postOffice', valueKey: 'about.infoCards.postOfficeValue', color: 'from-rose-500 to-rose-600' },
    { icon: HiOfficeBuilding, labelKey: 'about.infoCards.talathi', valueKey: 'about.infoCards.talathiValue', color: 'from-amber-500 to-amber-600' },
    { icon: HiHeart, labelKey: 'about.infoCards.healthCenter', valueKey: 'about.infoCards.healthCenterValue', color: 'from-lime-500 to-lime-600' },
    { icon: HiShieldCheck, labelKey: 'about.infoCards.waterConnection', value: '278', color: 'from-emerald-500 to-emerald-600' },
    { icon: HiLocationMarker, labelKey: 'about.infoCards.publicWell', value: '1', color: 'from-violet-500 to-violet-600' },
    { icon: HiLocationMarker, labelKey: 'about.infoCards.publicBore', value: '2', color: 'from-fuchsia-500 to-fuchsia-600' },
    { icon: HiUsers, labelKey: 'about.infoCards.womenSHG', value: '13', color: 'from-sky-500 to-sky-600' },
    { icon: HiHome, labelKey: 'about.infoCards.pmHousing', value: '06', color: 'from-orange-500 to-red-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-green-100 text-orange-600 rounded-full text-sm font-semibold font-marathi">
                {t('about.badge')}
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-marathi">
              {t('about.title')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Text Content with Zigzag Pattern */}
            <motion.div variants={cardVariants} className="space-y-6">
              {/* Paragraph 1 - Right Aligned with Orange Accent */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-300 rounded-full"></div>
                <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 p-6 rounded-r-3xl shadow-lg hover:shadow-2xl transition-all">
                  <p className="text-base text-gray-800 leading-relaxed font-marathi">
                    {t('about.para1')}
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 2 - Left Aligned with Blue Accent */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: -5 }}
                className="relative ml-8"
              >
                <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
                <div className="bg-gradient-to-bl from-blue-50 via-white to-blue-50 p-6 rounded-l-3xl shadow-lg hover:shadow-2xl transition-all">
                  <p className="text-base text-gray-800 leading-relaxed font-marathi">
                    {t('about.para2')}
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 3 - Right Aligned with Green Accent */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-green-500 to-green-300 rounded-full"></div>
                <div className="bg-gradient-to-br from-green-50 via-white to-green-50 p-6 rounded-r-3xl shadow-lg hover:shadow-2xl transition-all">
                  <p className="text-base text-gray-800 leading-relaxed font-marathi">
                    {t('about.para3')}
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 4 - Left Aligned with Purple Accent */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: -5 }}
                className="relative ml-8"
              >
                <div className="absolute -right-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-300 rounded-full"></div>
                <div className="bg-gradient-to-bl from-purple-50 via-white to-purple-50 p-6 rounded-l-3xl shadow-lg hover:shadow-2xl transition-all">
                  <p className="text-base text-gray-800 leading-relaxed font-marathi">
                    {t('about.para4')}
                  </p>
                </div>
              </motion.div>

              {/* Paragraph 5 - Right Aligned with Teal Accent */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-teal-300 rounded-full"></div>
                <div className="bg-gradient-to-br from-teal-50 via-white to-teal-50 p-6 rounded-r-3xl shadow-lg hover:shadow-2xl transition-all">
                  <p className="text-base text-gray-800 leading-relaxed font-marathi">
                    {t('about.para5')}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Info Cards Grid */}
            <motion.div variants={cardVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {infoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition-all"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${card.color} rounded-lg flex items-center justify-center mb-2 mx-auto`}>
                      <Icon className="text-xl text-white" />
                    </div>
                    <h4 className="text-xs font-bold text-gray-900 mb-1 text-center font-marathi leading-tight">
                      {t(card.labelKey)}
                    </h4>
                    <p className="text-xs text-gray-600 text-center font-marathi">
                      {card.valueKey ? t(card.valueKey) : card.value}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Vision & Mission Cards - Unique Design */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card with Icon Badge */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative group"
            >
              {/* Decorative Corner */}
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border-2 border-orange-200 group-hover:border-orange-400 transition-all overflow-hidden">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>
                
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                
                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4 font-marathi">
                  {t('about.vision')}
                </h3>
                <p className="text-gray-700 leading-relaxed font-marathi text-base">
                  {t('about.visionText')}
                </p>
                
                {/* Bottom Right Decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tl from-orange-200 to-transparent rounded-full"></div>
              </div>
            </motion.div>

            {/* Mission Card with Icon Badge */}
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="relative group"
            >
              {/* Decorative Corner */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-bl from-green-400 to-green-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border-2 border-green-200 group-hover:border-green-400 transition-all overflow-hidden">
                {/* Top Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
                
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mb-4 shadow-lg">
                  <span className="text-3xl">🚀</span>
                </div>
                
                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-4 font-marathi">
                  {t('about.mission')}
                </h3>
                <p className="text-gray-700 leading-relaxed font-marathi text-base">
                  {t('about.missionText')}
                </p>
                
                {/* Bottom Left Decoration */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-green-200 to-transparent rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutInfoSection;
