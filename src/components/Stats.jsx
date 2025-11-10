import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Stats = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <section 
      className="relative py-20 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/img/dwnld2.jpg')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-8 font-marathi"
          >
            {t('statsSection.title')}
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <motion.button
              onClick={handleClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all border-2 border-white"
            >
              {t('statsSection.button')}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

