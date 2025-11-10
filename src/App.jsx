import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OfficialsPage from './pages/OfficialsPage';
import ServicesPage from './pages/ServicesPage';
import SchemesPage from './pages/SchemesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LanguageProvider>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/officials" element={<OfficialsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/schemes" element={<SchemesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;
