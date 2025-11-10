import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      className="relative py-32 bg-cover bg-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center"
        >
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-marathi drop-shadow-lg">
            {t('contact.locationTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mb-8" />
          
          {/* Address */}
          <p className="text-xl text-white/90 mb-12 font-marathi drop-shadow-lg">
            {t('contact.addressText')}
          </p>

          {/* Google Maps Button */}
          <motion.a
            href="https://maps.app.goo.gl/NBA3txotAFzutXxm7"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all font-marathi"
          >
            <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            {t('contact.googleMaps')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
