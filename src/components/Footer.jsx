import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/officials', label: t('nav.officials') },
    { path: '/services', label: t('nav.services') },
    { path: '/schemes', label: t('nav.schemes') },
    { path: '/gallery', label: t('nav.gallery') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-500' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-500' },
    { icon: FaYoutube, href: '#', color: 'hover:text-red-500' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* About Section */}
          <div className="md:col-span-2 text-center md:text-left w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3 mb-6"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden shadow-lg ring-2 ring-orange-500 flex-shrink-0">
                <img 
                  src="/img/logo2.jpg" 
                  alt="Gram Panchayat Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-marathi bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-400">
                  {t('footer.footerTitle')}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">Gram Panchayat Shedgewadi</p>
              </div>
            </motion.div>
            <p className="text-gray-300 mb-6 font-marathi leading-relaxed text-center md:text-left max-w-lg mx-auto md:mx-0">
              {t('footer.aboutText')}
            </p>
            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center ${social.color} transition-all shadow-lg hover:shadow-xl`}
                  >
                    <Icon className="text-xl" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left w-full">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-6 font-marathi relative inline-block">
                {t('footer.quickLinks')}
                <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
              </h3>
            </div>
            <ul className="space-y-3 flex flex-col items-center md:items-start">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={link.path} onClick={handleLinkClick} className="w-full md:w-auto">
                    <motion.div
                      whileHover={{ x: 8 }}
                      className="text-gray-300 hover:text-orange-400 transition-colors font-marathi flex items-center justify-center md:justify-start gap-2"
                    >
                      <span className="text-orange-500">•</span>
                      {link.label}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left w-full">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-6 font-marathi relative inline-block">
                {t('footer.contactInfo')}
                <div className="absolute -bottom-2 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full" />
              </h3>
            </div>
            <ul className="space-y-4 flex flex-col items-center md:items-start w-full">
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-start gap-3 w-full md:w-auto"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiLocationMarker className="text-white text-lg" />
                </div>
                <span className="text-gray-300 text-sm font-marathi text-left">
                  {t('contact.addressText')}
                </span>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 w-full md:w-auto"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiPhone className="text-white text-lg" />
                </div>
                <a href="tel:+917620650052" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                  +91 7620650052
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 w-full md:w-auto"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HiMail className="text-white text-lg" />
                </div>
                <a href="mailto:gpshedgewadi@gmail.com" className="text-gray-300 hover:text-orange-400 text-sm transition-colors break-all">
                  gpshedgewadi@gmail.com
                </a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-gradient-to-r from-orange-500 to-green-500 text-white text-sm rounded-full py-1">
              🇮🇳
            </span>
          </div>
        </div>

        {/* Bottom Bar with Company Credit */}
        <div className="text-center space-y-4">
          <p className="text-gray-300 text-sm font-marathi">
            © {currentYear} {t('footer.footerTitle')}. {t('footer.rights')}.
          </p>
          
          {/* Company Credit */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-block"
          >
            <a
              href="https://www.infoyashonand.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex flex-col sm:flex-row items-center gap-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-full border border-gray-600 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-gray-400 text-xs sm:text-sm">Designed by</span>
                <span className="font-bold text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 group-hover:from-orange-300 group-hover:to-green-300 transition-all text-center">
                  INFOYASHONAND TECHNOLOGY PVT-LTD
                </span>
              </motion.div>
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
