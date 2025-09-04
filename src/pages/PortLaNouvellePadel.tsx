import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Users, Smartphone, Award, Download } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const PortLaNouvelleImages = [
  {
    url: "https://olive06.github.io/villagepadel.fr/images/port1.png",
    alt: "Terrain de padel à Port-La Nouvelle au TC Nouvellois"
  },
  {
    url: "https://olive06.github.io/villagepadel.fr/images/port2.png",
    alt: "Vue des terrains de padel à Port-La Nouvelle"
  },
  {
    url: "https://olive06.github.io/villagepadel.fr/images/port3.png",
    alt: "TC Nouvellois Port-La Nouvelle - Installation complète"
  }
];

const PortLaNouvellePadel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Padel à Port-La Nouvelle - 2 Terrains 100% Autonomes | TC Nouvellois</title>
        <meta
          name="description"
          content="2 terrains de padel 100% autonomes à Port-La Nouvelle (11), Aude. Matériel disponible, 24€ pour 1h30. TC Nouvellois - Réservez en ligne !"
        />
        <meta
          name="keywords"
          content="padel Port-La Nouvelle, padel Aude, padel 11, TC Nouvellois, réservation padel, padel autonome, matériel padel, Village Padel"
        />
        <meta property="og:title" content="Padel à Port-La Nouvelle - 2 Terrains 100% Autonomes | TC Nouvellois" />
        <meta
          property="og:description"
          content="2 terrains de padel 100% autonomes à Port-La Nouvelle (11), Aude. Matériel disponible, 24€ pour 1h30. TC Nouvellois - Réservez en ligne !"
        />
        <meta
          property="og:image"
          content="https://olive06.github.io/villagepadel.fr/images/port1.png"
        />
        <meta property="og:url" content="https://villagepadel.fr/port-la-nouvelle" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padel à Port-La Nouvelle - 2 Terrains 100% Autonomes | TC Nouvellois" />
        <meta
          name="twitter:description"
          content="2 terrains de padel 100% autonomes à Port-La Nouvelle (11), Aude. Matériel disponible, 24€ pour 1h30. TC Nouvellois - Réservez en ligne !"
        />
        <meta
          name="twitter:image"
          content="https://olive06.github.io/villagepadel.fr/images/port1.png"
        />
        <link rel="canonical" href="https://villagepadel.fr/port-la-nouvelle" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
            TC Nouvellois - Port-La Nouvelle
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            2 terrains de padel 100% autonomes dans l'Aude - Accès et matériel automatisés
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
          <ImageCarousel images={PortLaNouvelleImages} />
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Terrains</span>
              <span className="text-gray-700">2 terrains</span>
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
              <span className="text-gray-700">Disponible</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Court Information Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Les Terrains de Padel à Port-La Nouvelle</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Caractéristiques des terrains</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">🏟️</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Nombre de terrains</h4>
                  <p className="text-gray-700">2 terrains de padel modernes et bien entretenus</p>
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
                  <h4 className="font-semibold text-lg mb-2">Matériel disponible</h4>
                  <p className="text-gray-700">Raquettes et balles à disposition via l'application. Réservez le matériel en même temps que votre terrain</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Tarifs</h4>
                  <ul className="text-gray-700">
                    <li>• 24€ pour 1h30 de jeu</li>
                    <li>• Matériel disponible via l'app</li>
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
              Pourquoi choisir le Padel de Port-La Nouvelle ?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Localisation côtière</h3>
                <p className="text-gray-600">Situé à Port-La Nouvelle dans l'Aude, proche de la Méditerranée</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">TC Nouvellois</h3>
                <p className="text-gray-600">Club de tennis reconnu avec des installations modernes de qualité</p>
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
                <h3 className="font-bold text-lg mb-2">2 terrains disponibles</h3>
                <p className="text-gray-600">Plus de créneaux disponibles avec nos deux terrains modernes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <div className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Où nous trouver</h3>
            
            {/* Simple Google Maps Embed */}
            <div className="py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Localisation du Padel de Port-La Nouvelle</h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1086.9!2d3.0509743!3d43.0146315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b0572afe8dbc13%3A0x616b55a1b8669c23!2sPadel%20de%20Port-La%20Nouvelle!5e0!3m2!1sfr!2sfr!4v1641234567890!5m2!1sfr!2sfr"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation du Padel de Port-La Nouvelle"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="text-gray-700 space-y-2">
              <p><strong>Adresse :</strong> Padel de Port-La Nouvelle, 11210 Port-La Nouvelle, France</p>
              <p><strong>Club :</strong> TC Nouvellois</p>
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
                En savoir plus sur les terrains
              </summary>
              <div className="prose prose-lg max-w-none mt-4 text-gray-700">
                <h2>Terrains de Padel 100% Autonomes à Port-La Nouvelle</h2>
                <p>
                  Les terrains de padel du <strong>TC Nouvellois</strong> sont situés à Port-La Nouvelle, dans l'Aude (11). <strong>Entièrement autonomes</strong>, ils offrent une expérience de jeu moderne avec <strong>24€ pour 1h30</strong>, accessible à tous via un système d'accès révolutionnaire !
                </p>
                
                <h3>Accès 100% automatisé</h3>
                <p>
                  Plus besoin de rendez-vous ! Réservez via l'application <strong>Village Padel</strong> (disponible sur iOS et Android) et ouvrez directement les terrains avec votre smartphone. Les installations sont équipées d'un système d'accès entièrement automatisé pour jouer en toute liberté.
                </p>

                <h3>Matériel disponible via l'app</h3>
                <p>
                  Le <strong>TC Nouvellois</strong> met à votre disposition du <strong>matériel de qualité</strong> : raquettes et balles disponibles directement via l'application Village Padel. Réservez votre matériel en même temps que votre terrain - tout est géré automatiquement !
                </p>

                <h3>2 terrains modernes</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-brand-blue mb-2">Nos installations :</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>2 terrains de padel</strong> - Plus de créneaux disponibles</li>
                    <li><strong>24€ pour 1h30</strong> - Tarif unique et transparent</li>
                    <li><strong>Matériel via l'app</strong> - Raquettes et balles de qualité</li>
                  </ul>
                </div>

                <h3>Port-La Nouvelle, Aude</h3>
                <p>
                  Nos terrains de padel à Port-La Nouvelle sont idéalement situés dans l'Aude (11), proche de la côte méditerranéenne. Le TC Nouvellois offre des installations modernes dans un cadre agréable, parfait pour jouer au padel toute l'année.
                </p>
                
                <h3>TC Nouvellois - Club de référence</h3>
                <p>
                  Le <strong>TC Nouvellois</strong> est un club reconnu qui propose maintenant des terrains de padel modernes et entièrement automatisés. Une expérience de jeu optimale dans un environnement professionnel et convivial.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-green-700 mb-2">Comment ça marche ?</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-green-800">
                    <li>Téléchargez l'app Village Padel</li>
                    <li>Sélectionnez votre terrain et créneau</li>
                    <li>Ajoutez le matériel si besoin</li>
                    <li>Payez en ligne de façon sécurisée</li>
                    <li>Arrivez au terrain et ouvrez avec votre smartphone</li>
                    <li>Récupérez le matériel si commandé et jouez !</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Pourquoi choisir Port-La Nouvelle ?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                    <li><strong>2 terrains disponibles</strong> - Plus de flexibilité pour vos réservations</li>
                    <li><strong>Système 100% autonome</strong> - Aucune contrainte horaire</li>
                    <li><strong>Matériel via l'app</strong> - Simplicité et qualité</li>
                    <li><strong>Localisation côtière</strong> - Cadre exceptionnel dans l'Aude</li>
                    <li><strong>Club établi</strong> - TC Nouvellois, référence locale</li>
                    <li><strong>Tarif transparent</strong> - 24€ pour 1h30, simple et clair</li>
                  </ul>
                </div>

                <h3>Accès et commodités</h3>
                <p>
                  Les terrains sont situés à Port-La Nouvelle dans l'Aude, facilement accessibles avec <strong>stationnement à proximité</strong>. Profitez d'installations modernes dans un cadre agréable proche de la Méditerranée.
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
          "name": "Terrains de Padel 100% Autonomes - TC Nouvellois Port-La Nouvelle",
          "description": "2 terrains de padel 100% autonomes à Port-La Nouvelle (11), Aude. Matériel disponible, 24€ pour 1h30. Accès automatisé via smartphone.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Port-La Nouvelle",
            "addressRegion": "Aude",
            "postalCode": "11210",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.0146315",
            "longitude": "3.0509743"
          },
          "url": "https://villagepadel.fr/port-la-nouvelle",
          "image": "https://olive06.github.io/villagepadel.fr/images/port1.png",
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
              "name": "2 terrains de padel"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Stationnement disponible"
            }
          ],
          "parentOrganization": {
            "@type": "SportsOrganization",
            "name": "TC Nouvellois"
          }
        })}
      </script>
    </div>
  );
};

export default PortLaNouvellePadel;