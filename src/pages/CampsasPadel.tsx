import React from 'react';
import { Helmet } from 'react-helmet';
import WeatherWidget_campsas from '../components/CampsasPadel/WeatherWidget_campsas';
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
        <title>Padel à Campsas - Terrain 100% Autonome | Tennis Padel Avenir Campsanais</title>
        <meta
          name="description"
          content="Terrain de padel 100% autonome à Campsas (82), près de Montauban. Accès et matériel automatisés, ouvert 7j/7 de 9h à 22h, 24€ pour 1h30. Réservez en ligne !"
        />
        <meta
          name="keywords"
          content="padel Campsas, padel autonome, padel Montauban, padel 82, Tennis Padel Avenir Campsanais, réservation padel, padel outdoor, Village Padel, accès automatisé"
        />
        <meta property="og:title" content="Padel à Campsas - Terrain 100% Autonome | Tennis Padel Avenir Campsanais" />
        <meta
          property="og:description"
          content="Terrain de padel 100% autonome à Campsas (82), près de Montauban. Accès et matériel automatisés, ouvert 7j/7 de 9h à 22h, 24€ pour 1h30. Réservez en ligne !"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg"
        />
        <meta property="og:url" content="https://villagepadel.fr/campsas" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padel à Campsas - Terrain 100% Autonome | Tennis Padel Avenir Campsanais" />
        <meta
          name="twitter:description"
          content="Terrain de padel 100% autonome à Campsas (82), près de Montauban. Accès et matériel automatisés, ouvert 7j/7 de 9h à 22h, 24€ pour 1h30. Réservez en ligne !"
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
          <p className="text-xl text-center max-w-3xl mx-auto mb-4">
            Terrain de padel 100% autonome à Campsas - Accès et matériel automatisés
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
              <span className="block text-brand-blue font-bold">Accès</span>
              <span className="text-gray-700">100% Autonome</span>
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
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Caractéristiques du terrain</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">☀️</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Type de terrain</h4>
                  <p className="text-gray-700">Outdoor (en plein air), situé dans un cadre agréable et accessible</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">⏰</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Durée des créneaux</h4>
                  <p className="text-gray-700">Réservez facilement pour une durée standard de 1h30</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">🔓</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Accès autonome</h4>
                  <p className="text-gray-700">Accès 100% automatisé via l'application Village Padel. Pas de clés à récupérer !</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">🎾</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Matériel disponible</h4>
                  <p className="text-gray-700">Raquettes et balles usagées disponibles directement sur le terrain. Ajoutez-les lors de votre réservation dans l'application</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Tarifs</h4>
                  <ul className="text-gray-700">
                    <li>• Tarif : 24€ pour 1h30</li>
                  </ul>
                </div>
              </div>
            </div>
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
                <h2>Terrain de Padel 100% Autonome à Campsas</h2>
                <p>
                  Le terrain de padel du <strong>Tennis Padel Avenir Campsanais</strong> est situé à Campsas, dans le Tarn-et-Garonne (82). <strong>Entièrement autonome</strong>, il est accessible <strong>7 jours sur 7 de 9h à 22h</strong> pour 24 € les 1h30, sans aucune contrainte horaire pour la récupération de clés !
                </p>
                
                <h3>🔓 Accès 100% automatisé</h3>
                <p>
                  Fini les rendez-vous pour récupérer des clés ! Réservez via l'application <strong>Village Padel</strong> (disponible sur iOS et Android) et ouvrez directement le terrain avec votre smartphone. Le terrain est équipé d'un système d'accès entièrement automatisé et d'un éclairage pour jouer en soirée.
                </p>

                <h3>🎾 Matériel autonome inclus</h3>
                <p>
                  Besoin de raquettes ou de balles ? Pas de problème ! Des <strong>raquettes et balles usagées sont mises à disposition</strong> dans un casier connecté. Vous pouvez les ajouter à votre réservation via l'application Village Padel lors de votre réservation - tout est géré automatiquement !
                </p>

                <h3>📍 Localisation pratique</h3>
                <p>
                  Notre terrain de padel à Campsas est à seulement 15 minutes de Montauban, dans le Tarn-et-Garonne (82). Proche de Montauban et Toulouse, c'est l'endroit parfait pour jouer au padel en toute autonomie, que vous soyez débutant ou expérimenté.
                </p>
                
                <h3>À propos du terrain</h3>
                <p>
                  Ce terrain outdoor offre un gazon synthétique confortable et un parking gratuit à proximité. Venez profiter d'une partie de padel dans un cadre agréable et convivial, en toute autonomie !
                </p>

                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-brand-blue mb-2">💡 Comment ça marche ?</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Téléchargez l'app Village Padel</li>
                    <li>Réservez votre créneau (+ matériel si besoin)</li>
                    <li>Arrivez au terrain à l'heure de votre réservation</li>
                    <li>Ouvrez avec votre smartphone - c'est tout !</li>
                  </ol>
                </div>
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
          "name": "Terrain de Padel 100% Autonome - Tennis Padel Avenir Campsanais",
          "description": "Terrain de padel 100% autonome à Campsas (82), accès et matériel automatisés, ouvert 7j/7 de 9h à 22h, 24€ pour 1h30",
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
          "priceRange": "24€ pour 1h30",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Accès autonome automatisé"
            },
            {
              "@type": "LocationFeatureSpecification", 
              "name": "Matériel disponible via application"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Terrain outdoor éclairé"
            }
          ]
        })}
      </script>
    </div>
  );
};

export default CampsasPadel;