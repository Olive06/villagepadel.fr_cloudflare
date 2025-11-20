import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Users, Smartphone, Award, Download } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const CapvernImages = [
  {
    url: "https://olive06.github.io/villagepadel.fr/images/capvern1.jpg",
    alt: "Terrain de padel à Capvern"
  },
  {
    url: "https://olive06.github.io/villagepadel.fr/images/capvern2.jpg",
    alt: "Vue du terrain de padel à Capvern"
  }
];

const CapvernPadel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>CAP'PADEL CAPVERN - Terrain 100% Autonome | Hautes-Pyrénées (65)</title>
        <meta
          name="description"
          content="CAP'PADEL CAPVERN - Terrain de padel 100% autonome à Capvern (65), Hautes-Pyrénées. 6€/personne, matériel 4€ (raquettes + balles). Réservez en ligne avec Village Padel !"
        />
        <meta
          name="keywords"
          content="CAP'PADEL CAPVERN, padel Capvern, padel Hautes-Pyrénées, padel 65, padel Capvern-les-Bains, réservation padel, padel autonome, Village Padel"
        />
        <meta property="og:title" content="CAP'PADEL CAPVERN - Terrain 100% Autonome | Hautes-Pyrénées" />
        <meta
          property="og:description"
          content="CAP'PADEL CAPVERN - Terrain de padel 100% autonome à Capvern (65), Hautes-Pyrénées. 6€/personne, matériel 4€. Réservez en ligne !"
        />
        <meta
          property="og:image"
          content="https://olive06.github.io/villagepadel.fr/images/capvern1.jpg"
        />
        <meta property="og:url" content="https://villagepadel.fr/capvern" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CAP'PADEL CAPVERN - Terrain 100% Autonome | Hautes-Pyrénées" />
        <meta
          name="twitter:description"
          content="CAP'PADEL CAPVERN - Terrain de padel 100% autonome à Capvern (65). 6€/personne, matériel 4€. Réservez en ligne !"
        />
        <meta
          name="twitter:image"
          content="https://olive06.github.io/villagepadel.fr/images/capvern1.jpg"
        />
        <link rel="canonical" href="https://villagepadel.fr/capvern" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
            CAP'PADEL CAPVERN
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Terrain de padel 100% autonome dans les Hautes-Pyrénées - Accès automatisé
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
          <ImageCarousel images={CapvernImages} />
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Tarif</span>
              <span className="text-gray-700">6€ / personne</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Matériel</span>
              <span className="text-gray-700">4€ (raquettes + balles)</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Accès</span>
              <span className="text-gray-700">100% Autonome</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Localisation</span>
              <span className="text-gray-700">Capvern (65)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Court Information Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">CAP'PADEL CAPVERN</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Caractéristiques du terrain</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">☀️</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Type de terrain</h4>
                  <p className="text-gray-700">Outdoor (en plein air), au cœur des Hautes-Pyrénées</p>
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
                  <h4 className="font-semibold text-lg mb-2">Location de matériel - 4€</h4>
                  <p className="text-gray-700">Raquettes et balles disponibles. Ajoutez l'option lors de votre réservation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Tarifs</h4>
                  <ul className="text-gray-700">
                    <li>• 6€ par personne</li>
                    <li>• Matériel : +4€ (raquettes et balles)</li>
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
              Pourquoi choisir CAP'PADEL CAPVERN ?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Cadre exceptionnel</h3>
                <p className="text-gray-600">Au cœur des Hautes-Pyrénées, près de Capvern-les-Bains et du plateau de Lannemezan</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Tarif attractif</h3>
                <p className="text-gray-600">Seulement 6€ par personne pour profiter du terrain</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Smartphone className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">100% Autonome</h3>
                <p className="text-gray-600">Réservez et accédez au terrain via l'application Village Padel</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Award className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Matériel disponible</h3>
                <p className="text-gray-600">Location de raquettes et balles pour seulement 4€</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Où nous trouver</h3>
            
            <div className="py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Localisation de CAP'PADEL CAPVERN</h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2930.5!2d0.314!3d43.1019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA2JzA2LjgiTiAwwrAxOCc1MC40IkU!5e0!3m2!1sfr!2sfr!4v1641234567890!5m2!1sfr!2sfr"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation de CAP'PADEL CAPVERN"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="text-gray-700 space-y-2">
              <p><strong>Localisation :</strong> Capvern, 65130 Hautes-Pyrénées, France</p>
              <p className="text-sm text-gray-600">Station thermale de Capvern-les-Bains - Plateau de Lannemezan</p>
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
                <h2>CAP'PADEL CAPVERN - Terrain 100% Autonome</h2>
                <p>
                  <strong>CAP'PADEL CAPVERN</strong> est situé dans les Hautes-Pyrénées (65), à proximité de la célèbre station thermale de Capvern-les-Bains. <strong>Entièrement autonome</strong>, il propose un tarif attractif de <strong>6€ par personne</strong>, avec un système d'accès révolutionnaire !
                </p>
                
                <h3>Accès 100% automatisé</h3>
                <p>
                  Plus besoin de rendez-vous ! Réservez via l'application <strong>Village Padel</strong> (disponible sur iOS et Android) et ouvrez directement le terrain avec votre smartphone. Le terrain est équipé d'un système d'accès entièrement automatisé.
                </p>

                <h3>Location de matériel - 4€ seulement</h3>
                <p>
                  <strong>CAP'PADEL CAPVERN</strong> met à votre disposition du <strong>matériel de qualité pour seulement 4€</strong> : raquettes et balles. Ajoutez simplement cette option lors de votre réservation via l'application.
                </p>

                <h3>Tarification simple et transparente</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-brand-blue mb-2">Nos tarifs :</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>6€ par personne</strong> - Tarif unique et simple</li>
                    <li><strong>Matériel : +4€</strong> - Raquettes et balles de qualité</li>
                  </ul>
                  <p className="text-sm mt-2 text-gray-600">Exemple : pour 4 joueurs = 24€ + 4€ matériel (optionnel) = 28€ total</p>
                </div>

                <h3>Au cœur des Hautes-Pyrénées</h3>
                <p>
                  <strong>CAP'PADEL CAPVERN</strong> est idéalement situé dans les Hautes-Pyrénées (65), près de la station thermale de Capvern-les-Bains, sur le plateau de Lannemezan. Un cadre naturel exceptionnel pour pratiquer le padel.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-green-700 mb-2">Comment ça marche ?</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-green-800">
                    <li>Téléchargez l'app Village Padel</li>
                    <li>Sélectionnez votre créneau à CAP'PADEL CAPVERN</li>
                    <li>Indiquez le nombre de joueurs (6€/personne)</li>
                    <li>Ajoutez le matériel si besoin (+4€)</li>
                    <li>Payez en ligne de façon sécurisée</li>
                    <li>Arrivez au terrain et ouvrez avec votre smartphone</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Pourquoi choisir CAP'PADEL CAPVERN ?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                    <li><strong>Tarif attractif</strong> - Seulement 6€ par personne</li>
                    <li><strong>Système 100% autonome</strong> - Aucune contrainte horaire</li>
                    <li><strong>Matériel disponible</strong> - Location à 4€ seulement</li>
                    <li><strong>Cadre exceptionnel</strong> - Au cœur des Hautes-Pyrénées</li>
                    <li><strong>Proximité de Capvern-les-Bains</strong> - Station thermale renommée</li>
                  </ul>
                </div>

                <h3>Accès et stationnement</h3>
                <p>
                  Le terrain est situé à Capvern (65130), facilement accessible depuis le plateau de Lannemezan et les communes environnantes. Parking disponible sur place.
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
          "name": "CAP'PADEL CAPVERN - Terrain 100% Autonome",
          "description": "CAP'PADEL CAPVERN - Terrain de padel 100% autonome à Capvern (65), Hautes-Pyrénées. 6€/personne, matériel 4€. Accès automatisé via smartphone.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Capvern",
            "addressRegion": "Hautes-Pyrénées",
            "postalCode": "65130",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.1019",
            "longitude": "0.314"
          },
          "url": "https://villagepadel.fr/capvern",
          "image": "https://olive06.github.io/villagepadel.fr/images/capvern1.jpg",
          "priceRange": "6€ par personne",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Accès autonome automatisé"
            },
            {
              "@type": "LocationFeatureSpecification", 
              "name": "Location matériel 4€"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Terrain outdoor"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Parking disponible"
            }
          ]
        })}
      </script>
    </div>
  );
};

export default CapvernPadel;