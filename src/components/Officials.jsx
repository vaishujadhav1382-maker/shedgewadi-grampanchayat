import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiPhone } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const Officials = () => {
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

  const members = [
    {
      name: t('officials.member1Name'),
      position: t('officials.member'),
      phone: '+91 77560 13554',
    },
    {
      name: t('officials.member2Name'),
      position: t('officials.memberFemale'),
      phone: '+91 94212 23255',
    },
    {
      name: t('officials.member3Name'),
      position: t('officials.memberFemale'),
      phone: '+91 95529 28767',
    },
    {
      name: t('officials.member4Name'),
      position: t('officials.memberFemale'),
      phone: '+91 99211 15747',
    },
    {
      name: t('officials.member5Name'),
      position: t('officials.member'),
      phone: '+91 93266 99951',
    },
    {
      name: t('officials.member6Name'),
      position: t('officials.memberFemale'),
      phone: '+91 93227 44508',
    },
  ];

  const staff = [
    {
      name: t('officials.staff1Name'),
      position: t('officials.staff'),
      phone: '+91 95277 79751',
    },
    {
      name: t('officials.staff2Name'),
      position: t('officials.waterSupplyStaff'),
      phone: '+91 99220 92935',
    },
    {
      name: t('officials.staff3Name'),
      position: t('officials.computerOperator'),
      phone: '+91 99758 53366',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Main Officials Section */}
      <section className="pt-4 sm:pt-8 md:pt-12 lg:pt-16 pb-20">
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
                  {t('officials.badge')}
                </span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-marathi">
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
                      <HiPhone className="w-5 h-5" />
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

      {/* Members Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-marathi">
                {t('officials.membersTitle')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full" />
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-orange-500 hover:shadow-xl transition-all"
                >
                  <div className="p-6">
                    {/* Position Badge */}
                    <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 text-xs font-bold rounded-full mb-3 font-marathi">
                      {member.position}
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-marathi">
                      {member.name}
                    </h3>

                    {/* Contact */}
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    >
                      <HiPhone className="w-4 h-4" />
                      <span className="text-sm">{member.phone}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-marathi">
                {t('officials.staffTitle')}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full" />
            </div>

            {/* Staff Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {staff.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition-all"
                >
                  <div className="p-6">
                    {/* Position Badge */}
                    <div className="inline-block px-4 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full mb-3 font-marathi">
                      {member.position}
                    </div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-900 mb-4 font-marathi">
                      {member.name}
                    </h3>

                    {/* Contact */}
                    <a 
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      <HiPhone className="w-4 h-4" />
                      <span className="text-sm">{member.phone}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Officials;
