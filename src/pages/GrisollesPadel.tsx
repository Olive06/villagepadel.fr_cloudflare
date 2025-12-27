import React from 'react';
import { Helmet } from 'react-helmet';
import WeatherWidget from '../components/GrisollesPadel/WeatherWidget';
import CourtInfo from '../components/GrisollesPadel/CourtInfo';
import Features from '../components/GrisollesPadel/Features';
import BookingCTA from '../components/GrisollesPadel/BookingCTA';
import LocationMap from '../components/GrisollesPadel/LocationMap';
import WhatsAppCommunity from '../components/GrisollesPadel/WhatsAppCommunity';

const GrisollesPadel = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Padel de Grisolles - Terrain Outdoor Premium | Village Padel</title>
        <meta
          name="description"
          content="Découvrez notre terrain de padel outdoor à Grisolles (82). Réservation en ligne, accès 7j/7 de 8h à 22h, terrain premium. Rejoignez notre communauté WhatsApp."
        />
        <meta
          name="keywords"
          content="padel Grisolles, terrain padel 82, réservation padel Grisolles, padel outdoor, Village Padel"
        />
        <meta property="og:title" content="Padel de Grisolles - Village Padel" />
        <meta
          property="og:description"
          content="Terrain de padel outdoor premium à Grisolles. Réservez en ligne et jouez 7j/7 de 8h à 22h."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/damfvriyn/image/upload/v1736010730/IMG_2452_s9pdqn_2e82be.jpg"
        />
        <meta property="og:url" content="https://villagepadel.fr/grisolles" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padel de Grisolles - Village Padel" />
        <meta
          name="twitter:description"
          content="Terrain de padel outdoor premium à Grisolles. Réservez en ligne et jouez 7j/7 de 8h à 22h."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/damfvriyn/image/upload/v1736010730/IMG_2452_s9pdqn_2e82be.jpg"
        />
        <link rel="canonical" href="https://villagepadel.fr/grisolles" />
      </Helmet>

      {/* Hero Section avec image en background */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/damfvriyn/image/upload/v1736010730/IMG_2452_s9pdqn_2e82be.jpg')`
          }}
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Contenu texte */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Padel de Grisolles
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Découvrez notre terrain outdoor, conçu pour offrir une expérience unique 
            et conviviale aux amateurs de padel.
          </p>
          <button 
            className="bg-white text-brand-blue font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            onClick={() => {
              const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
              if (/android/i.test(userAgent)) {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr';
              } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
                window.location.href = 'https://apps.apple.com/fr/app/village-padel/id6504023084';
              } else {
                window.location.href = 'https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr';
              }
            }}
          >
            Réserver un terrain maintenant
          </button>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Horaires</span>
              <span className="text-gray-700">7j/7 - 8h à 22h</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Terrain</span>
              <span className="text-gray-700">Outdoor Premium</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Localisation</span>
              <span className="text-gray-700">Grisolles, 82</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Prix</span>
              <span className="text-gray-700">À partir de 20€/h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Court Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Notre Terrain de Padel</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <CourtInfo />
          </div>
        </section>
        
        {/* Features Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Features />
          </div>
        </section>

        {/* Two Column Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Weather Widget */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Météo Locale</h3>
            <WeatherWidget />
          </div>
          
          {/* WhatsApp Community */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Rejoignez Notre Communauté</h3>
            <WhatsAppCommunity />
          </div>
        </div>
        
        {/* Location Map */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <LocationMap />
          </div>
        </section>
        
        {/* Booking Section */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Prêt à Jouer ?</h2>
          <BookingCTA />
        </section>
        
        {/* SEO Description Section */}
        <section className="py-12 mt-12 bg-white rounded-xl shadow-lg">
          <div className="container mx-auto px-4 max-w-4xl">
            <details className="bg-gray-50 rounded-xl shadow-md p-6">
              <summary className="cursor-pointer text-xl font-semibold text-brand-blue mb-4">
                Plus d'informations sur le terrain de padel de Grisolles
              </summary>
              <div className="prose prose-lg max-w-none mt-4 text-gray-700">
                <h2>Terrain de Padel Premium à Grisolles (82)</h2>
                <p>
                  Le <strong>terrain de padel de Grisolles</strong> vous propose une expérience de jeu exceptionnelle dans un cadre agréable au cœur du Tarn-et-Garonne. Notre installation <strong>outdoor premium</strong> est conçue selon les normes professionnelles pour offrir un confort de jeu optimal à tous les joueurs, quel que soit leur niveau.
                </p>
                <h3>Un terrain accessible et une communauté active</h3>
                <p>
                  Situé à Grisolles, notre terrain de padel est accessible <strong>7 jours sur 7</strong>, de 8h à 22h, grâce à notre système d'accès automatisé. La réservation s'effectue facilement via l'application <strong>Village Padel</strong>, disponible sur iOS et Android.
                </p>
                <p>
                  Notre terrain de padel de Grisolles est au centre d'une communauté dynamique et passionnée. Rejoignez notre groupe WhatsApp pour trouver des partenaires, participer à des événements ou simplement échanger avec d'autres amateurs de padel de la région.
                </p>
                <h3>Équipements et services</h3>
                <p>
                  Notre <strong>terrain de padel outdoor</strong> à Grisolles est équipé d'un gazon synthétique de dernière génération, offrant un excellent rebond et un confort de jeu idéal. Le site dispose également d'un parking gratuit et d'un accès facilité.
                </p>
                <p>
                  Idéalement situé entre Montauban et Toulouse, le terrain de padel de Grisolles est facilement accessible. Son emplacement stratégique en fait un lieu de rendez-vous privilégié pour les joueurs de toute la région qui souhaitent pratiquer le padel dans des conditions optimales.
                </p>
              </div>
            </details>
          </div>
        </section>
      </div>
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          "name": "Terrain de Padel de Grisolles - Village Padel",
          "description": "Terrain de padel outdoor premium situé à Grisolles (82) avec communauté WhatsApp active",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Grisolles",
            "addressRegion": "Tarn-et-Garonne",
            "postalCode": "82170",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.8295",
            "longitude": "1.2962"
          },
          "openingHours": "Mo-Su 08:00-22:00",
          "telephone": "+33749157401",
          "url": "https://villagepadel.fr/grisolles",
          "image": "https://res.cloudinary.com/damfvriyn/image/upload/v1736010730/IMG_2452_s9pdqn_2e82be.jpg"
        })}
      </script>
    </div>
  );
};

export default GrisollesPadel;