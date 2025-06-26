import React from 'react';
import { Helmet } from 'react-helmet';
import WeatherWidget_campsas from '../components/CampsasPadel/WeatherWidget_campsas';
import CourtInfo_campsas from '../components/CampsasPadel/CourtInfo_campsas';
import Features_campsas from '../components/CampsasPadel/Features_campsas';
import BookingCTA_campsas from '../components/CampsasPadel/BookingCTA_campsas';
import ImageCarousel from '../components/ImageCarousel';
import LocationMap_campsas from '../components/CampsasPadel/LocationMap_campsas';

const CampsasImages = [
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg",
    alt: "Terrain de padel à Campsas au Tennis Padel Avenir Campsanais"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1741196599/480505487_985367373694261_8641342512726171271_n_fe8f8n.jpg",
    alt: "Installation du terrain de padel à Campsas"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1741196415/480328728_985367503694248_4817792986897410785_n_z6g1oy.jpg",
    alt: "Vue du terrain de padel à Campsas"
  }
];

const CampsasPadel = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Padel à Campsas - Terrain de Padel Outdoor | Tennis Padel Avenir Campsanais</title>
        <meta
          name="description"
          content="Terrain de padel outdoor à Campsas (82), près de Montauban. Ouvert 7j/7 de 9h à 22h, 24€ pour 1h30. Réservez en ligne !"
        />
        <meta
          name="keywords"
          content="padel Campsas, padel Montauban, padel 82, Tennis Padel Avenir Campsanais, réservation padel, padel outdoor, Village Padel"
        />
        <meta property="og:title" content="Padel à Campsas - Terrain de Padel Outdoor | Tennis Padel Avenir Campsanais" />
        <meta
          property="og:description"
          content="Terrain de padel outdoor à Campsas (82), près de Montauban. Ouvert 7j/7 de 9h à 22h, 24€ pour 1h30. Réservez en ligne !"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg"
        />
        <meta property="og:url" content="https://villagepadel.fr/campsas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padel à Campsas - Terrain de Padel Outdoor | Tennis Padel Avenir Campsanais" />
        <meta
          name="twitter:description"
          content="Terrain de padel outdoor à Campsas (82), près de Montauban. Ouvert 7j/7 de 9h à 22h, 24€ pour 1h30. Réservez en ligne !"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg"
        />
        <link rel="canonical" href="https://villagepadel.fr/campsas" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
            Tennis Padel Avenir Campsanais
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Venez jouer au padel sur notre terrain outdoor à Campsas, accessible à tous.
          </p>
          <div className="flex justify-center mb-10">
            <button 
              className="bg-white text-brand-blue font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 max-w-[80%] sm:max-w-none"
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
              Réserver un terrain
            </button>
          </div>
          <ImageCarousel images={CampsasImages} />
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Horaires</span>
              <span className="text-gray-700">7j/7 - 9h à 22h</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Terrain</span>
              <span className="text-gray-700">Outdoor</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Localisation</span>
              <span className="text-gray-700">Campsas, 82</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Prix</span>
              <span className="text-gray-700">24€ / 1h30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Le Terrain de Padel à Campsas</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <CourtInfo_campsas />
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Features_campsas />
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Météo Locale</h3>
            <WeatherWidget_campsas />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Où nous trouver</h3>
            <LocationMap_campsas />
            <div className="mt-4 text-gray-700">
              <p><strong>Adresse :</strong> Stade Christian Thédié, Rte d'Auch, Campsas, 82370, France</p>
              <p><strong>Téléphone :</strong> 07 49 15 74 01</p>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Réservez dès maintenant</h2>
          <BookingCTA_campsas />
        </section>

        <section className="py-12 mt-12 bg-white rounded-xl shadow-lg">
          <div className="container mx-auto px-4 max-w-4xl">
            <details className="bg-gray-50 rounded-xl shadow-md p-6">
              <summary className="cursor-pointer text-xl font-semibold text-brand-blue mb-4">
                En savoir plus sur le terrain
              </summary>
              <div className="prose prose-lg max-w-none mt-4 text-gray-700">
                <h2>Terrain de Padel à Campsas</h2>
                <p>
                  Le terrain de padel du <strong>Tennis Padel Avenir Campsanais</strong> est situé à Campsas, dans le Tarn-et-Garonne (82). Ouvert à tous, il est accessible <strong>7 jours sur 7 de 9h à 22h</strong> pour 24 € les 1h30.
                </p>
                <h3>Accès simple et pratique</h3>
                <p>
                  Réservez facilement via l’application <strong>Village Padel</strong> (disponible sur iOS et Android). Le terrain est équipé d’un système d’accès automatisé et d’un éclairage pour jouer en soirée.
                </p>
                <p>
                  Notre terrain de padel à Campsas est à seulement 15 minutes de Montauban, dans le Tarn-et-Garonne (82). Proche de Montauban et Toulouse, c’est l’endroit parfait pour jouer au padel, que vous soyez débutant ou expérimenté.
                </p>
                <h3>À propos du terrain</h3>
                <p>
                  Ce terrain outdoor offre un gazon synthétique confortable et un parking gratuit à proximité. Venez profiter d’une partie de padel dans un cadre agréable et convivial !
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
          "name": "Terrain de Padel - Tennis Padel Avenir Campsanais",
          "description": "Terrain de padel outdoor à Campsas (82), ouvert 7j/7 de 9h à 22h, 24€ pour 1h30",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Campsas",
            "addressRegion": "Tarn-et-Garonne",
            "postalCode": "82370",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.8591",
            "longitude": "1.3734"
          },
          "openingHours": "Mo-Su 09:00-22:00",
          "telephone": "+33749157401",
          "url": "https://villagepadel.fr/campsas",
          "image": "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg",
          "priceRange": "24€ pour 1h30"
        })}
      </script>
    </div>
  );
};

export default CampsasPadel;