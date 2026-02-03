import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Sparkles, Smartphone, Trees, Download } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const LastoursImages = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FLastours.jpg?alt=media&token=f0494ccb-96f1-47b6-87a0-aa0a2e06db9a",
    alt: "Terrain de padel au Château de Lastours - Cadre d'exception"
  }
];

const LastoursPadel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Padel au Château de Lastours - Cadre d'Exception | Village Padel</title>
        <meta
          name="description"
          content="Terrain de padel dans un cadre d'exception au Château de Lastours (11), Aude. 24€ pour 1h30, location de matériel offerte sur place. Réservez en ligne !"
        />
        <meta
          name="keywords"
          content="padel Lastours, padel château, padel Aude, padel 11, padel Carcassonne, réservation padel, padel cadre exceptionnel, Village Padel, matériel gratuit"
        />
        <meta property="og:title" content="Padel au Château de Lastours - Cadre d'Exception | Village Padel" />
        <meta
          property="og:description"
          content="Terrain de padel dans un cadre d'exception au Château de Lastours (11), Aude. 24€ pour 1h30, location de matériel offerte sur place. Réservez en ligne !"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FLastours.jpg?alt=media&token=f0494ccb-96f1-47b6-87a0-aa0a2e06db9a"
        />
        <meta property="og:url" content="https://villagepadel.fr/lastours" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padel au Château de Lastours - Cadre d'Exception | Village Padel" />
        <meta
          name="twitter:description"
          content="Terrain de padel dans un cadre d'exception au Château de Lastours (11), Aude. 24€ pour 1h30, location de matériel offerte sur place. Réservez en ligne !"
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FLastours.jpg?alt=media&token=f0494ccb-96f1-47b6-87a0-aa0a2e06db9a"
        />
        <link rel="canonical" href="https://villagepadel.fr/lastours" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
            Château de Lastours
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-4">
            Un cadre d'exception pour jouer au padel
          </p>
          <p className="text-lg text-center max-w-2xl mx-auto mb-8 opacity-90">
            Location de matériel offerte sur place
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
          <ImageCarousel images={LastoursImages} />
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Cadre</span>
              <span className="text-gray-700">Exceptionnel</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Prix</span>
              <span className="text-gray-700">24€ / 1h30</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Accès</span>
              <span className="text-gray-700">100% Autonome</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Matériel</span>
              <span className="text-gray-700">Offert</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">

        {/* Court Information Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Le Terrain de Padel du Château de Lastours</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Caractéristiques du terrain</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">🏰</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cadre d'exception</h4>
                  <p className="text-gray-700">Un terrain de padel situé dans un environnement unique, au cœur d'un domaine historique et naturel exceptionnel</p>
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
                  <p className="text-gray-700">Accès 100% automatisé via l'application Village Padel. Aucune contrainte horaire !</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">🎾</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Matériel offert</h4>
                  <p className="text-gray-700">Location de raquettes et balles <strong>offerte sur place</strong>. Venez les mains dans les poches !</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Tarifs</h4>
                  <ul className="text-gray-700">
                    <li>• 24€ pour 1h30 de jeu</li>
                    <li>• Matériel inclus gratuitement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Pourquoi choisir le Padel du Château de Lastours ?
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Sparkles className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Cadre exceptionnel</h3>
                <p className="text-gray-600">Un environnement unique dans l'Aude, au cœur d'un site historique remarquable</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Trees className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Nature préservée</h3>
                <p className="text-gray-600">Jouez au padel entouré d'un cadre naturel magnifique et paisible</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Smartphone className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">100% Autonome</h3>
                <p className="text-gray-600">Accès via l'application Village Padel. Aucune contrainte horaire !</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Matériel offert</h3>
                <p className="text-gray-600">Raquettes et balles à disposition gratuitement sur place</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Où nous trouver</h3>

            {/* Google Maps Embed */}
            <div className="py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Localisation du Padel du Château de Lastours</h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.5!2d2.3785!3d43.3356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ae2d8c8c8c8c8c%3A0x8c8c8c8c8c8c8c8c!2sLastours!5e0!3m2!1sfr!2sfr!4v1641234567890!5m2!1sfr!2sfr"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation du Padel du Château de Lastours"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-gray-700 space-y-2">
              <p><strong>Adresse :</strong> Château de Lastours, 11600 Lastours, Aude, France</p>
              <p><strong>Région :</strong> Proche de Carcassonne</p>
            </div>
          </div>
        </div>

        {/* Booking CTA Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Réservez votre créneau dès maintenant !
            </h2>

            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://apps.apple.com/fr/app/village-padel/id6504023084"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                <Download className="h-6 w-6" />
                App Store
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-colors"
              >
                <Download className="h-6 w-6" />
                Google Play
              </a>
            </div>

            <p className="text-gray-600">
              Téléchargez l'application Village Padel pour accéder à toutes nos fonctionnalités
            </p>
          </div>
        </section>

        {/* Detailed Information Section */}
        <section className="py-12 mt-12 bg-white rounded-xl shadow-lg">
          <div className="container mx-auto px-4 max-w-4xl">
            <details className="bg-gray-50 rounded-xl shadow-md p-6">
              <summary className="cursor-pointer text-xl font-semibold text-brand-blue mb-4">
                En savoir plus sur le terrain
              </summary>
              <div className="prose prose-lg max-w-none mt-4 text-gray-700">
                <h2>Terrain de Padel dans un Cadre d'Exception à Lastours</h2>
                <p>
                  Le terrain de padel du <strong>Château de Lastours</strong> vous offre une expérience unique dans l'Aude (11). Situé dans un <strong>cadre d'exception</strong>, ce terrain vous permet de pratiquer le padel dans un environnement naturel et historique incomparable, à seulement <strong>24€ pour 1h30</strong>.
                </p>

                <h3>Accès 100% automatisé</h3>
                <p>
                  Réservez via l'application <strong>Village Padel</strong> (disponible sur iOS et Android) et accédez au terrain en toute autonomie avec votre smartphone. Un système moderne dans un cadre historique !
                </p>

                <h3>Matériel offert sur place</h3>
                <p>
                  Grande nouveauté : la <strong>location de matériel est offerte</strong> ! Raquettes et balles sont à votre disposition gratuitement sur place. Venez les mains dans les poches et profitez pleinement de votre session.
                </p>

                <h3>Proche de Carcassonne</h3>
                <p>
                  Le village de Lastours est situé à proximité de Carcassonne, dans l'Aude (11). Ce cadre exceptionnel offre une expérience de padel unique, alliant sport et découverte d'un patrimoine remarquable.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-green-700 mb-2">Comment ça marche ?</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-green-800">
                    <li>Téléchargez l'app Village Padel</li>
                    <li>Sélectionnez le Château de Lastours</li>
                    <li>Choisissez votre créneau</li>
                    <li>Payez en ligne de façon sécurisée</li>
                    <li>Arrivez au terrain et ouvrez avec votre smartphone</li>
                    <li>Récupérez le matériel gratuit et jouez !</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Pourquoi choisir Lastours ?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                    <li><strong>Cadre d'exception</strong> - Un environnement unique et historique</li>
                    <li><strong>Matériel offert</strong> - Raquettes et balles gratuites</li>
                    <li><strong>24€ pour 1h30</strong> - Tarif attractif tout inclus</li>
                    <li><strong>100% autonome</strong> - Aucune contrainte horaire</li>
                    <li><strong>Proche de Carcassonne</strong> - Facilement accessible</li>
                  </ul>
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
          "name": "Terrain de Padel - Château de Lastours",
          "description": "Terrain de padel dans un cadre d'exception à Lastours (11), Aude. 24€ pour 1h30, location de matériel offerte sur place. Accès automatisé via smartphone.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lastours",
            "addressRegion": "Aude",
            "postalCode": "11600",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.3356",
            "longitude": "2.3785"
          },
          "url": "https://villagepadel.fr/lastours",
          "image": "https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FLastours.jpg?alt=media&token=f0494ccb-96f1-47b6-87a0-aa0a2e06db9a",
          "priceRange": "24€ pour 1h30",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Accès autonome automatisé"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Location de matériel offerte"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Cadre historique exceptionnel"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Stationnement disponible"
            }
          ]
        })}
      </script>
    </div>
  );
};

export default LastoursPadel;
