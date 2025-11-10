import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

const GalleryPage = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Gallery images from village activities
  const galleryImages = [
    { id: 1, src: '/img/pic1.webp', title: t('gallery.pic1Title'), category: t('gallery.agriculture'), description: t('gallery.pic1Desc'), gradient: 'from-green-50 to-emerald-100', borderColor: 'border-green-400' },
    { id: 2, src: '/img/pic2.webp', title: t('gallery.pic2Title'), category: t('gallery.office'), description: t('gallery.pic2Desc'), gradient: 'from-orange-50 to-amber-100', borderColor: 'border-orange-400' },
    { id: 3, src: '/img/pic3.webp', title: t('gallery.pic3Title'), category: t('gallery.social'), description: t('gallery.pic3Desc'), gradient: 'from-pink-50 to-rose-100', borderColor: 'border-pink-400' },
    { id: 4, src: '/img/pic4.webp', title: t('gallery.pic4Title'), category: t('gallery.education'), description: t('gallery.pic4Desc'), gradient: 'from-blue-50 to-cyan-100', borderColor: 'border-blue-400' },
    { id: 5, src: '/img/pic5.webp', title: t('gallery.pic5Title'), category: t('gallery.social'), description: t('gallery.pic5Desc'), gradient: 'from-purple-50 to-violet-100', borderColor: 'border-purple-400' },
    { id: 6, src: '/img/pic6.webp', title: t('gallery.pic6Title'), category: t('gallery.education'), description: t('gallery.pic6Desc'), gradient: 'from-teal-50 to-cyan-100', borderColor: 'border-teal-400' },
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="pt-40 sm:pt-32 md:pt-28 lg:pt-24 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="pt-4 sm:pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Page Title */}
            <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16 mt-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-marathi">
                {t('nav.gallery')}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full mb-6 sm:mb-8" />
            </motion.div>

            {/* Introduction Text */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-orange-50 to-green-50 rounded-3xl p-8 mb-12 shadow-lg border-l-4 border-orange-500"
            >
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 font-marathi">
                  {t('gallery.introTitle')}</h2>
                <p className="text-lg text-gray-700 leading-relaxed font-marathi">
                  {t('gallery.introPara1')}</p>
                <p className="text-lg text-gray-700 leading-relaxed font-marathi">
                  {t('gallery.introPara2')}</p>
                <p className="text-xl font-bold text-orange-600 font-marathi pt-4">
                  {t('gallery.introHighlight')}</p>
              </div>
            </motion.div>

            {/* Gallery Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`bg-gradient-to-br ${image.gradient} rounded-2xl shadow-xl overflow-hidden cursor-pointer group border-2 ${image.borderColor}`}
                >
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="font-marathi text-sm">{image.description}</p>
                    </div>
                  </div>
                  {/* Image Info */}
                  <div className="p-5 bg-white/80 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-gray-900 font-marathi mb-2">
                      {image.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 bg-white/90 ${image.borderColor} border-2 text-gray-700 rounded-full text-sm font-marathi font-semibold`}>
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="mt-16 text-center bg-gradient-to-r from-orange-50 via-white to-green-50 border-2 border-orange-200 rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl">📸</span>
                <h3 className="text-2xl font-bold text-gray-800 font-marathi">{t('gallery.footerTitle')}</h3>
                <span className="text-4xl">🎯</span>
              </div>
              <p className="text-gray-700 font-marathi text-lg leading-relaxed">
                {t('gallery.footerText')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
