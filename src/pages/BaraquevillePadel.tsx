import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Users, Smartphone, Award, Download } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const BaraquevilleImages = [
  {
    url: "https://olive06.github.io/villagepadel.fr/images/baraq1.jpg",
    alt: "Terrain de padel à Baraqueville au Tennis Padel Club de Baraqueville"
  },
  {
    url: "https://olive06.github.io/villagepadel.fr/images/baraq2.jpg",
    alt: "Vue du terrain de padel à Baraqueville avec casier matériel"
  },
  {
    url: "https://olive06.github.io/villagepadel.fr/images/baraq3.jpg",
    alt: "Tennis Padel Club de Baraqueville - Installation complète"
  }
];

const BaraquevillePadel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Padel à Baraqueville - Terrain 100% Autonome | Tennis Padel Club de Baraqueville</title>
        <meta
          name="description"
          content="Terrain de padel 100% autonome à Baraqueville (12), Aveyron. Casier matériel 4€, 20€ jour / 24€ soirée. Tennis Padel Club de Baraqueville - Réservez en ligne !"
        />
        <meta
          name="keywords"
          content="padel Baraqueville, padel Aveyron, padel 12, Tennis Padel Club de Baraqueville, réservation padel, padel autonome, casier matériel, Village Padel"
        />
        <meta property="og:title" content="Padel à Baraqueville - Terrain 100% Autonome | Tennis Padel Club de Baraqueville" />
        <meta
          property="og:description"
          content="Terrain de padel 100% autonome à Baraqueville (12), Aveyron. Casier matériel 4€, 20€ jour / 24€ soirée. Tennis Padel Club de Baraqueville - Réservez en ligne !"
        />
        <meta
          property="og:image"
          content="https://olive06.github.io/villagepadel.fr/images/baraq1.jpg"
        />
        <meta property="og:url" content="https://villagepadel.fr/baraqueville" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padel à Baraqueville - Terrain 100% Autonome | Tennis Padel Club de Baraqueville" />
        <meta
          name="twitter:description"
          content="Terrain de padel 100% autonome à Baraqueville (12), Aveyron. Casier matériel 4€, 20€ jour / 24€ soirée. Tennis Padel Club de Baraqueville - Réservez en ligne !"
        />
        <meta
          name="twitter:image"
          content="https://olive06.github.io/villagepadel.fr/images/baraq1.jpg"
        />
        <link rel="canonical" href="https://villagepadel.fr/baraqueville" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
            Tennis Padel Club de Baraqueville
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Terrain de padel 100% autonome en Aveyron - Accès et matériel automatisés
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
          <ImageCarousel images={BaraquevilleImages} />
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Prix Jour</span>
              <span className="text-gray-700">20€ / 1h30</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Prix Soirée</span>
              <span className="text-gray-700">24€ / 1h30</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Accès</span>
              <span className="text-gray-700">100% Autonome</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Matériel</span>
              <span className="text-gray-700">Casier 4€</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative h-full flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://olive06.github.io/villagepadel.fr/images/autonom_hero.jpg"
                alt="Terrain de padel autonome à Baraqueville"
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Court Information Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Le Terrain de Padel à Baraqueville</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Caractéristiques du terrain</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">☀️</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Type de terrain</h4>
                  <p className="text-gray-700">Outdoor (en plein air), situé dans un cadre agréable en Aveyron</p>
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
                  <p className="text-gray-700">Accès 100% automatisé via l'application Village Padel. Système entièrement autonome !</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">🎾</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Casier matériel - 4€</h4>
                  <p className="text-gray-700">Raquettes et balles usagées dans un casier sécurisé. Ajoutez l'option lors de votre réservation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Tarifs</h4>
                  <ul className="text-gray-700">
                    <li>• Journée : 20€ pour 1h30</li>
                    <li>• Soirée : 24€ pour 1h30</li>
                    <li>• Casier matériel : +4€</li>
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
              Pourquoi choisir le Padel de Baraqueville ?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Localisation parfaite</h3>
                <p className="text-gray-600">Situé au cœur de l'Aveyron, facile d'accès depuis Rodez et Villefranche-de-Rouergue</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Club historique FFT</h3>
                <p className="text-gray-600">Plus de 40 licenciés dans un club reconnu, ambiance conviviale garantie</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Smartphone className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">100% Autonome</h3>
                <p className="text-gray-600">Accès et matériel via l'application Village Padel. Aucune contrainte horaire !</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Tarifs compétitifs</h3>
                <p className="text-gray-600">20€ en journée, 24€ en soirée + casier matériel à seulement 4€</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Où nous trouver</h3>
            
            {/* Google Maps Embed */}
            <div className="mb-6">
              <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.123456789!2d2.4167!3d44.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b2b1234567890a%3A0x1234567890abcdef!2sRoute%20de%20Camboulazet%2C%2012160%20Baraqueville%2C%20France!5e0!3m2!1sfr!2sfr!4v1641234567890!5m2!1sfr!2sfr"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du Tennis Padel Club de Baraqueville"
                ></iframe>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="text-gray-700 space-y-2">
              <p><strong>Adresse :</strong> Route de Camboulazet, 12160 Baraqueville, France</p>
              <p><strong>Téléphone :</strong> 06 84 19 71 98</p>
              <p><strong>Email :</strong> tcbaraqueville@fft.fr</p>
              <p><strong>Président :</strong> Patrice Imbert</p>
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
                <h2>Terrain de Padel 100% Autonome à Baraqueville</h2>
                <p>
                  Le terrain de padel du <strong>Tennis Padel Club de Baraqueville</strong> est situé à Baraqueville, dans l'Aveyron (12). <strong>Entièrement autonome</strong>, il propose des tarifs compétitifs : <strong>20€ en journée et 24€ en soirée</strong> pour 1h30 de jeu, avec un système d'accès révolutionnaire !
                </p>
                
                <h3>Accès 100% automatisé</h3>
                <p>
                  Plus besoin de rendez-vous ! Réservez via l'application <strong>Village Padel</strong> (disponible sur iOS et Android) et ouvrez directement le terrain avec votre smartphone. Le terrain est équipé d'un système d'accès entièrement automatisé et d'un éclairage LED pour jouer en soirée.
                </p>

                <h3>Casier à matériel sécurisé - 4€ seulement</h3>
                <p>
                  Le <strong>Tennis Padel Club de Baraqueville</strong> met à votre disposition un <strong>casier à matériel sécurisé pour seulement 4€</strong>, contenant des raquettes et balles usagées de qualité. Ajoutez simplement cette option lors de votre réservation via l'application - le casier se déverrouille automatiquement !
                </p>

                <h3>Tarification adaptée jour/soirée</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-brand-blue mb-2">Nos tarifs :</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>20€ pour 1h30 en journée</strong> - Parfait pour jouer avec la lumière naturelle</li>
                    <li><strong>24€ pour 1h30 en soirée</strong> - Éclairage LED professionnel inclus</li>
                    <li><strong>Casier matériel : +4€</strong> - Raquettes + balles de qualité</li>
                  </ul>
                </div>

                <h3>Au cœur de l'Aveyron</h3>
                <p>
                  Notre terrain de padel à Baraqueville est idéalement situé dans l'Aveyron (12), facilement accessible depuis Rodez, Villefranche-de-Rouergue et les communes environnantes. Le club dispose de 4 courts de tennis (2 extérieurs, 2 couverts) et maintenant d'un terrain de padel moderne.
                </p>
                
                <h3>Un club reconnu FFT</h3>
                <p>
                  Le <strong>Tennis Padel Club de Baraqueville</strong> est un club affilié FFT dirigé par Patrice Imbert, avec plus de 40 licenciés et une équipe dynamique. Le terrain de padel vient enrichir l'offre sportive existante dans un cadre convivial et professionnel.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-green-700 mb-2">Comment ça marche ?</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-green-800">
                    <li>Téléchargez l'app Village Padel</li>
                    <li>Sélectionnez votre créneau (jour/soirée)</li>
                    <li>Ajoutez le casier matériel si besoin (+4€)</li>
                    <li>Payez en ligne de façon sécurisée</li>
                    <li>Arrivez au terrain et ouvrez avec votre smartphone</li>
                    <li>Le casier matériel se déverrouille automatiquement si commandé</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Pourquoi choisir Baraqueville ?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                    <li><strong>Tarifs les plus compétitifs de la région</strong> - 20€ en journée !</li>
                    <li><strong>Système 100% autonome</strong> - Aucune contrainte horaire</li>
                    <li><strong>Casier matériel économique</strong> - Seulement 4€ avec raquettes et balles</li>
                    <li><strong>Club historique FFT</strong> - Plus de 40 ans d'expérience</li>
                    <li><strong>Cadre exceptionnel</strong> - Au cœur de l'Aveyron</li>
                    <li><strong>Éclairage LED professionnel</strong> - Jouez jusqu'à tard le soir</li>
                  </ul>
                </div>

                <h3>Accès et stationnement</h3>
                <p>
                  Le terrain est situé Route de Camboulazet à Baraqueville, avec un <strong>parking gratuit</strong> à disposition. Accessible facilement depuis la route départementale, à proximité des installations sportives de la commune.
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
          "name": "Terrain de Padel 100% Autonome - Tennis Padel Club de Baraqueville",
          "description": "Terrain de padel 100% autonome à Baraqueville (12), Aveyron. Casier matériel 4€, 20€ jour / 24€ soirée. Accès automatisé via smartphone.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Baraqueville",
            "addressRegion": "Aveyron",
            "postalCode": "12160",
            "addressCountry": "FR",
            "streetAddress": "Route de Camboulazet"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "44.2833",
            "longitude": "2.4167"
          },
          "telephone": "+33684197198",
          "email": "tcbaraqueville@fft.fr",
          "url": "https://villagepadel.fr/baraqueville",
          "image": "https://olive06.github.io/villagepadel.fr/images/baraq1.jpg",
          "priceRange": "20€ jour / 24€ soirée pour 1h30",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Accès autonome automatisé"
            },
            {
              "@type": "LocationFeatureSpecification", 
              "name": "Casier matériel sécurisé 4€"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Terrain outdoor avec éclairage LED"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Tarifs jour/soirée différenciés"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Parking gratuit"
            }
          ],
          "parentOrganization": {
            "@type": "SportsOrganization",
            "name": "Tennis Padel Club de Baraqueville",
            "foundingDate": "1980",
            "memberOf": "Fédération Française de Tennis"
          }
        })}
      </script>
    </div>
  );
};

export default BaraquevillePadel;