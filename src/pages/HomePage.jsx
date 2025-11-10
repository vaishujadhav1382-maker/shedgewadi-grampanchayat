import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiUsers, HiHome, HiAcademicCap, HiHeart, HiDocumentText, HiCash, HiShieldCheck, HiLightningBolt } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import AboutInfoSection from '../components/AboutInfoSection';
import Stats from '../components/Stats';
import OfficialsSection from '../components/OfficialsSection';
import ServicesSection from '../components/ServicesSection';
import Schemes from '../components/Schemes';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // Hero background images
  const heroImages = [
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920',
    '/img/dwnld.jpg',
    '/img/dwnld2.jpg',
  ];

  // Auto-slide effect
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section with Sliding Background Images */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Slideshow */}
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1,
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${image}")`,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-64 md:pt-56 lg:pt-44 pb-32 text-center z-10">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center bg-white p-2 overflow-hidden">
              <img src="/img/logo2.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
            </div>
          </motion.div>

          {/* Title Animation */}
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-marathi drop-shadow-lg"
          >
            <span className="text-orange-400">{t('hero.titleWord1')}</span>{' '}
            <span className="text-white">{t('hero.titleWord2')}</span>{' '}
            <span className="text-green-400">{t('hero.titleWord3')}</span>
          </motion.h1>

          {/* Subtitle Animation */}
          <motion.p
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/90 mb-12 font-marathi drop-shadow-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-primary-500 to-orange-600 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all font-marathi"
              >
                {t('hero.learnMore')}
              </motion.button>
            </Link>
          </motion.div>

          {/* Slide Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3"
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Info Section */}
      <AboutInfoSection />

      {/* Stats Section */}
      <Stats />

      {/* Officials Section */}
      <OfficialsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Schemes Section */}
      <Schemes />

      {/* Contact Banner Section */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
