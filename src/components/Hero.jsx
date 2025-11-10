import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

const Hero = () => {
  const { t } = useLanguage();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  // Auto-rotate words for continuous animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-300 to-green-400 rounded-full opacity-20 blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-4 h-4 bg-gradient-to-r from-orange-400 to-green-400 rounded-full blur-sm"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Logo Animation with Continuous Float */}
        <motion.div
          initial={{ scale: 0, rotate: -180, y: -50 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            y: [0, -20, 0]
          }}
          transition={{ 
            scale: { duration: 0.8, type: "spring" },
            rotate: { duration: 0.8, type: "spring" },
            y: { 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="mb-8 flex justify-center"
        >
          <motion.img
            src="/img/logo.png"
            alt="Shedgewadi Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 drop-shadow-2xl"
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, -10, 0],
              transition: { duration: 0.5 }
            }}
          />
        </motion.div>

        {/* Title Animation with Word-by-Word Reveal */}
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-marathi">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-block text-orange-500 mr-3"
          >
            {t('hero.titleWord1')}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-block text-gray-900 mr-3"
          >
            {t('hero.titleWord2')}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="inline-block text-green-600"
          >
            {t('hero.titleWord3')}
          </motion.span>
        </div>

        {/* Subtitle Animation with Character-by-Character Reveal */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-xl sm:text-2xl text-gray-700 font-semibold mb-12 font-marathi overflow-hidden"
        >
          {t('hero.subtitle').split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 1.2 + (index * 0.03),
                duration: 0.3
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.p>

        {/* Buttons Animation with Pulse Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 60px rgba(249, 115, 22, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(249, 115, 22, 0.4)",
                "0 0 0 20px rgba(249, 115, 22, 0)",
                "0 0 0 0 rgba(249, 115, 22, 0)"
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            onClick={() => scrollToSection('about')}
            className="px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-2xl transition-all font-marathi relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative z-10">{t('hero.learnMore')}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <HiArrowRight className="text-xl" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
