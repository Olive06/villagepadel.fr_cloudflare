import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import PadelInfo from './pages/PadelInfo';
import GrisollesPadel from './pages/GrisollesPadel';
import CampsasPadel from './pages/CampsasPadel';
import BaraquevillePadel from './pages/BaraquevillePadel';
import PortLaNouvellePadel from './pages/PortLaNouvellePadel';
import NosPadels from './pages/NosPadels';
import QuoteRequest from './pages/QuoteRequest';
import ReservationConfirmation from './pages/ReservationConfirmation';
import AppFeatures from './pages/HomePage/AppFeatures';
import CGU from './pages/CGU';
import CGV from './pages/CGV';
import Footer from './components/Footer';
import PromoBar from './components/PromoBar';
import VPTechPage from './pages/VPTechPage';
import RedirectPage from './pages/RedirectPage';
import ChisPadel from './pages/ChisPadel';
import ArenaBooking from './pages/ArenaBooking';

// ScrollToTop
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <Helmet>
        <title>Village Padel - Automatisation et Réservation de Terrains de Padel</title>
        <meta
          name="description"
          content="Village Padel propose une solution complète pour les clubs : automatisation des terrains, application mobile de réservation, accès digital, et augmentation des revenus."
        />
      </Helmet>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          showQR={showQR}
          setShowQR={setShowQR}
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/padel-info" element={<PadelInfo />} />
            <Route path="/grisolles" element={<GrisollesPadel />} />
            <Route path="/campsas" element={<CampsasPadel />} />
            <Route path="/baraqueville" element={<BaraquevillePadel />} />
            <Route path="/port-la-nouvelle" element={<PortLaNouvellePadel />} />
            <Route path="/chis" element={<ChisPadel />} />
            <Route path="/demande-devis" element={<QuoteRequest />} />
            <Route path="/application" element={<AppFeatures />} />
            <Route path="/cgu" element={<CGU />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/nos-padels" element={<NosPadels />} />
            <Route path="/vp-tech" element={<VPTechPage />} />
            <Route path="/ConfirmationReservation" element={<ReservationConfirmation />} />
            <Route path="/redirect" element={<RedirectPage />} />
            <Route path="/arena/:bookingId" element={<ArenaBooking />} />
            <Route path="*" element={<HomePage />} />  {/* ← 404 FALLBACK */}
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;// Comment for redeploy
