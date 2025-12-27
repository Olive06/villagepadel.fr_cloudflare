import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Users, Coffee, Shirt, Download } from 'lucide-react';

const ChisPadel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Padel à Chis - Tennis Club Pyrénées Bigorre | Hautes-Pyrénées (65)</title>
        <meta
          name="description"
          content="Terrain de padel extérieur à Chis (65), Hautes-Pyrénées. 20€ jour / 24€ soirée. Club house, vestiaires, bar, location raquettes 2€. Réservez en ligne !"
        />
        <meta
          name="keywords"
          content="padel Chis, padel Hautes-Pyrénées, padel 65, Tennis Club Pyrénées Bigorre, réservation padel, padel Tarbes, padel Lourdes, Village Padel"
        />
        <meta property="og:title" content="Padel à Chis - Tennis Club Pyrénées Bigorre | Hautes-Pyrénées" />
        <meta
          property="og:description"
          content="Terrain de padel extérieur à Chis (65). 20€ jour / 24€ soirée. Club house, vestiaires, bar. Réservez en ligne !"
        />
        <meta
          property="og:image"
          content="https://olive06.github.io/villagepadel.fr/images/bigorre.jpg"
        />
        <meta property="og:url" content="https://villagepadel.fr/chis" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padel à Chis - Tennis Club Pyrénées Bigorre | Hautes-Pyrénées" />
        <meta
          name="twitter:description"
          content="Terrain de padel extérieur à Chis (65). 20€ jour / 24€ soirée. Club house, vestiaires, bar. Réservez en ligne !"
        />
        <meta
          name="twitter:image"
          content="https://olive06.github.io/villagepadel.fr/images/bigorre.jpg"
        />
        <link rel="canonical" href="https://villagepadel.fr/chis" />
      </Helmet>

      {/* Hero Section avec image en background */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://olive06.github.io/villagepadel.fr/images/bigorre.jpg')`
          }}
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Contenu texte */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Tennis Club Pyrénées Bigorre
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Terrain de padel extérieur à Chis - Club house, vestiaires, bar et matériel sur place
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
            Réserver un terrain
          </button>
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
              <span className="block text-brand-blue font-bold">Raquettes</span>
              <span className="text-gray-700">Location 2€</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Services</span>
              <span className="text-gray-700">Bar + Vestiaires</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Court Information Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Le Terrain de Padel à Chis</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Caractéristiques du terrain</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">🏞️</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Terrain extérieur</h4>
                  <p className="text-gray-700">Padel outdoor dans un cadre naturel au cœur des Hautes-Pyrénées</p>
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
                <div className="text-orange-500 text-2xl">🏠</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Club house complet</h4>
                  <p className="text-gray-700">Grand club house avec bar, vestiaires équipés de douches et ambiance conviviale</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">🎾</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Matériel sur place</h4>
                  <p className="text-gray-700">Location de raquettes à 2€ pièce et vente de balles neuves</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Tarifs</h4>
                  <ul className="text-gray-700">
                    <li>• Journée : 20€ pour 1h30</li>
                    <li>• Soirée : 24€ pour 1h30</li>
                    <li>• Location raquettes : 2€ pièce</li>
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
              Pourquoi choisir le Padel de Chis ?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Hautes-Pyrénées</h3>
                <p className="text-gray-600">Situé à Chis, proche de Tarbes et Lourdes, dans un cadre naturel exceptionnel</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Coffee className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Club house équipé</h3>
                <p className="text-gray-600">Bar, vestiaires avec douches, grand espace convivial pour se détendre</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Shirt className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Matériel disponible</h3>
                <p className="text-gray-600">Raquettes à louer pour 2€ pièce et balles neuves à l'achat sur place</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Esprit club</h3>
                <p className="text-gray-600">100 membres, ambiance familiale, plusieurs sports : padel, tennis, beach tennis, pétanque</p>
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
                <h2 className="text-2xl font-bold mb-6 text-center">Tennis Club Pyrénées Bigorre - Chis</h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11594.0!2d0.121392!3d43.2937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE3JzM3LjAiTiAwwrAwNycxNy4wIkU!5e0!3m2!1sfr!2sfr!4v1641234567890!5m2!1sfr!2sfr"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation du Tennis Club Pyrénées Bigorre à Chis"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="text-gray-700 space-y-2">
              <p><strong>Adresse :</strong> Tennis Club Pyrénées Bigorre, 65800 Chis, France</p>
              <p><strong>Coordonnées GPS :</strong> 43.2937°N, 0.121392°E</p>
              <p><strong>Parking :</strong> Gratuit sur place</p>
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
                <h2>Terrain de Padel à Chis - Tennis Club Pyrénées Bigorre</h2>
                <p>
                  Le <strong>Tennis Club Pyrénées Bigorre</strong> est situé à Chis (65800) dans les Hautes-Pyrénées. Ce club historique dispose d'un <strong>terrain de padel extérieur</strong> avec des tarifs compétitifs : <strong>20€ en journée et 24€ en soirée</strong> pour 1h30 de jeu.
                </p>
                
                <h3>Services complets sur place</h3>
                <p>
                  Contrairement aux terrains autonomes, le Tennis Club Pyrénées Bigorre offre de nombreux services : <strong>location de raquettes de padel à 2€ pièce, vente de balles neuves, vestiaires avec douches, et un bar convivial</strong> pour se détendre après le jeu.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-brand-blue mb-2">Tarifs et services :</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>20€ pour 1h30 en journée</strong> - Tarif attractif</li>
                    <li><strong>24€ pour 1h30 en soirée</strong> - Avec éclairage</li>
                    <li><strong>Location raquettes : 2€ pièce</strong> - Matériel de qualité</li>
                    <li><strong>Balles neuves disponibles</strong> - À l'achat sur place</li>
                    <li><strong>Vestiaires avec douches</strong> - Confort garanti</li>
                    <li><strong>Bar et espace convivial</strong> - Pour l'après-jeu</li>
                  </ul>
                </div>

                <h3>Au cœur des Hautes-Pyrénées</h3>
                <p>
                  Le terrain de padel à Chis est idéalement situé dans les Hautes-Pyrénées (65), facilement accessible depuis Tarbes, Lourdes et les communes environnantes. Le club dispose de 3 courts de tennis couverts, 1 court extérieur et 1 terrain de padel moderne.
                </p>
                
                <h3>Esprit club et ambiance familiale</h3>
                <p>
                  Le <strong>Tennis Club Pyrénées Bigorre</strong> est un club d'une centaine de membres où règne l'esprit familial et la convivialité. En plus du padel, le club propose tennis, beach tennis et pétanque.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-green-700 mb-2">Comment réserver ?</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-green-800">
                    <li>Téléchargez l'application Village Padel</li>
                    <li>Sélectionnez le Tennis Club Pyrénées Bigorre - Chis</li>
                    <li>Choisissez votre créneau (jour 20€ / soirée 24€)</li>
                    <li>Payez en ligne de façon sécurisée</li>
                    <li>Rendez-vous au club avec votre confirmation</li>
                    <li>Profitez du matériel et des services sur place</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Pourquoi choisir Chis ?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                    <li><strong>Cadre naturel exceptionnel</strong> - Au cœur des Hautes-Pyrénées</li>
                    <li><strong>Services complets sur place</strong> - Matériel, vestiaires, bar</li>
                    <li><strong>Club historique et convivial</strong> - 100 membres, esprit familial</li>
                    <li><strong>Parking gratuit</strong> - Accès facile en voiture</li>
                    <li><strong>Multi-sports</strong> - Tennis, padel, beach tennis, pétanque</li>
                    <li><strong>Proche de Tarbes et Lourdes</strong> - Bien desservi</li>
                  </ul>
                </div>

                <h3>Accès et stationnement</h3>
                <p>
                  Le club est situé à Chis (65800), avec les <strong>coordonnées GPS : 43.2937°N, 0.121392°E</strong>, avec un parking gratuit à disposition. Accessible facilement depuis Tarbes et les communes environnantes.
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
          "name": "Tennis Club Pyrénées Bigorre - Terrain de Padel à Chis",
          "description": "Terrain de padel extérieur à Chis (65800), Hautes-Pyrénées. 20€ journée, 24€ soirée. Club house, vestiaires, bar, location raquettes 2€.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chis",
            "addressRegion": "Hautes-Pyrénées",
            "postalCode": "65800",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.2937",
            "longitude": "0.121392"
          },
          "url": "https://villagepadel.fr/chis",
          "image": "https://olive06.github.io/villagepadel.fr/images/bigorre.jpg",
          "priceRange": "20€ jour / 24€ soirée pour 1h30",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Terrain de padel extérieur"
            },
            {
              "@type": "LocationFeatureSpecification", 
              "name": "Location raquettes 2€ pièce"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Vestiaires avec douches"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Club house avec bar"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Vente balles neuves"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Parking gratuit"
            }
          ],
          "parentOrganization": {
            "@type": "SportsOrganization",
            "name": "Tennis Club Pyrénées Bigorre",
            "location": "Chis, Hautes-Pyrénées",
            "description": "Club multi-sports avec tennis, padel, beach tennis et pétanque"
          }
        })}
      </script>
    </div>
  );
};

export default ChisPadel;