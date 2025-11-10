import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/officials', label: t('nav.officials') },
    { path: '/services', label: t('nav.services') },
    { path: '/schemes', label: t('nav.schemes') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar - Contact Info */}
      <div className="bg-gradient-to-r from-orange-500 via-orange-400 to-green-600 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-white text-sm">
            {/* Email */}
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:gpshedgewadi@gmail.com" className="hover:underline">
                gpshedgewadi@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+917620650052" className="hover:underline">
                +91 7620650052
              </a>
            </div>

            {/* Address and Language Toggle */}
            <div className="hidden md:flex items-center gap-6 font-marathi">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>{t('contact.addressText')}</span>
              </div>
              
              {/* Divider */}
              <div className="h-6 w-px bg-white/30"></div>
              
              {/* Language Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="flex relative items-center h-6 w-12 rounded-full bg-white/20 backdrop-blur-sm transition-colors border border-white/30"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform ${
                    language === 'en' ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
                <span className="absolute left-1 text-[10px] font-semibold text-white">मर</span>
                <span className="absolute right-1 text-[10px] font-semibold text-white">EN</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Images Row - Mobile/Tablet Only (< 1024px) */}
      <div className="lg:hidden bg-gradient-to-r from-orange-500 via-orange-400 to-green-600 border-b-4 border-green-600">
        <div className="max-w-full mx-auto px-1 py-2">
          {/* All Images Row - Fit all without scrolling */}
          <div className="flex items-center justify-center gap-0.5 sm:gap-1 md:gap-2">
            {/* Deity Images */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/शहाजीराजे-भोसले.webp" alt={t('nav.imgAlt1')} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/जिजाऊ.webp" alt={t('nav.imgAlt2')} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/तुकाराम-महाराज.webp" alt={t('nav.imgAlt3')} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/maharj.webp" alt={t('nav.imgAlt4')} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/छत्रपती-संभाजी-महाराज.webp" alt={t('nav.imgAlt5')} className="w-full h-full object-cover" />
            </motion.div>
            
            {/* Leader Images */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/img1.webp" alt={t('nav.imgAlt6')} className="w-full h-full object-cover grayscale" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/shahu-maharj.webp" alt={t('nav.imgAlt7')} className="w-full h-full object-cover grayscale" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/gandiji.webp" alt={t('nav.imgAlt8')} className="w-full h-full object-cover grayscale" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/ambedkar.webp" alt={t('nav.imgAlt9')} className="w-full h-full object-cover grayscale" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
              <img src="/img/sathe.webp" alt={t('nav.imgAlt10')} className="w-full h-full object-cover grayscale" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Logo & Menu */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-full mx-auto px-3 sm:px-6">
          <div className="flex justify-between items-center py-2.5 gap-2 sm:gap-3">
            
            {/* Left Side - Deity Images (5 photos) - Desktop/Minimize Screen (≥ 1024px) */}
            <div className="hidden lg:flex items-center gap-2">
              <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                <img src="/img/शहाजीराजे-भोसले.webp" alt={t('nav.imgAlt1')} className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                <img src="/img/जिजाऊ.webp" alt={t('nav.imgAlt2')} className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                <img src="/img/तुकाराम-महाराज.webp" alt={t('nav.imgAlt3')} className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                <img src="/img/maharj.webp" alt={t('nav.imgAlt4')} className="w-full h-full object-cover" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                <img src="/img/छत्रपती-संभाजी-महाराज.webp" alt={t('nav.imgAlt5')} className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Left Menu Items (First 4) - Desktop/Minimize Screen (≥ 1024px) */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 4).map((item) => (
                <Link key={item.path} to={item.path}>
                  <button
                    className={`px-3 py-2 font-medium text-sm transition-all font-marathi hover:text-orange-500 ${
                      location.pathname === item.path
                        ? 'text-orange-500 border-b-2 border-orange-500'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>

            {/* Center - Logo Only */}
            <Link to="/" className="flex-shrink-0">
              <motion.div whileHover={{ scale: 1.05 }} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
                <img src="/img/logo.webp" alt="Logo" className="w-full h-full object-cover" />
              </motion.div>
            </Link>

            {/* Right Side - Remaining Menu + Language + Leader Images */}
            <div className="flex items-center gap-1 sm:gap-2">
              
              {/* Desktop Navigation Menu (Remaining 3 items) - Desktop/Minimize Screen (≥ 1024px) */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.slice(4).map((item) => (
                  <Link key={item.path} to={item.path}>
                    <button
                      className={`px-3 py-2 font-medium text-sm transition-all font-marathi hover:text-orange-500 ${
                        location.pathname === item.path
                          ? 'text-orange-500 border-b-2 border-orange-500'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </button>
                  </Link>
                ))}
              </div>

              {/* Language Toggle - Mobile/Tablet Only (< 1024px) */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="lg:hidden flex relative items-center h-6 w-12 sm:h-7 sm:w-14 rounded-full bg-gray-200 transition-colors"
              >
                <span
                  className={`inline-block h-4 w-4 sm:h-5 sm:w-5 transform rounded-full bg-white shadow-lg transition-transform ${
                    language === 'en' ? 'translate-x-7 sm:translate-x-8' : 'translate-x-1'
                  }`}
                />
                <span className="absolute left-1 sm:left-1.5 text-[10px] sm:text-xs font-semibold text-gray-600">मर</span>
                <span className="absolute right-1 sm:right-1.5 text-[10px] sm:text-xs font-semibold text-gray-600">EN</span>
              </motion.button>

              {/* Leader Images (5 photos) - Desktop/Minimize Screen (≥ 1024px) */}
              <div className="hidden lg:flex items-center gap-2">
                <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                  <img src="/img/img1.webp" alt={t('nav.imgAlt6')} className="w-full h-full object-cover grayscale" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                  <img src="/img/shahu-maharj.webp" alt={t('nav.imgAlt7')} className="w-full h-full object-cover grayscale" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                  <img src="/img/gandiji.webp" alt={t('nav.imgAlt8')} className="w-full h-full object-cover grayscale" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                  <img src="/img/ambedkar.webp" alt={t('nav.imgAlt9')} className="w-full h-full object-cover grayscale" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden shadow-sm border border-gray-200">
                  <img src="/img/sathe.webp" alt={t('nav.imgAlt10')} className="w-full h-full object-cover grayscale" />
                </motion.div>
              </div>

              {/* Mobile/Tablet Menu Button - Shows on screens smaller than lg (1024px) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 border border-gray-300"
              >
                {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu - Shows on screens smaller than lg (1024px) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2 max-w-7xl mx-auto">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all font-marathi ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                        : 'text-gray-700 hover:bg-orange-50'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
