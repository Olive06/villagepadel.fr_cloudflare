import React from 'react';
import { MapPin, Users, Smartphone, Award, Download, Clock, Car } from 'lucide-react';

const TCMuretPadel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO géré par le Cloudflare Worker (meta tags + JSON-LD + body content) */}

      {/* Hero Section avec image en background */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FPHOTO-2025-12-23-18-27-50.jpg?alt=media&token=b3f0813c-8d56-40f2-b710-7a6dcd9b5cfc')`
          }}
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Contenu texte */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            TC MURET
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
            Terrain de padel au cœur du Complexe Nelson Paillou - Haute-Garonne
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
              <span className="block text-brand-blue font-bold">Tarif</span>
              <span className="text-gray-700">À partir de 8€ / personne</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Matériel</span>
              <span className="text-gray-700">4€ (raquettes + balles)</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Réservation</span>
              <span className="text-gray-700">Via Village Padel</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Localisation</span>
              <span className="text-gray-700">Muret (31)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        
        {/* Court Information Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">TC MURET - Tennis Club de Muret</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Caractéristiques du terrain</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">🏟️</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Complexe sportif</h4>
                  <p className="text-gray-700">Situé au Complexe Nelson Paillou, infrastructure sportive de qualité à Muret</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="text-orange-500 text-2xl">📱</div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Réservation en ligne</h4>
                  <p className="text-gray-700">Réservez facilement via l'application Village Padel, disponible sur iOS et Android</p>
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
                    <li>• À partir de 8€ par personne</li>
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
              Pourquoi choisir TC MURET ?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <MapPin className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Emplacement idéal</h3>
                <p className="text-gray-600">Au sud de Toulouse, facilement accessible depuis l'agglomération toulousaine</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Users className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Tarif compétitif</h3>
                <p className="text-gray-600">À partir de 8€ par personne pour profiter du terrain</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="mb-4">
                  <Smartphone className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="font-bold text-lg mb-2">Réservation facile</h3>
                <p className="text-gray-600">Réservez en quelques clics via l'application Village Padel</p>
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
                <h2 className="text-2xl font-bold mb-6 text-center">Localisation de TC MURET</h2>
                <div className="flex justify-center">
                  <div className="w-full max-w-4xl">
                    <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.5!2d1.338952!3d43.472792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeb9c8f5c12345%3A0x0!2sComplexe%20Nelson%20Paillou!5e0!3m2!1sfr!2sfr!4v1641234567890!5m2!1sfr!2sfr"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation de TC MURET - Complexe Nelson Paillou"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="text-gray-700 space-y-2">
              <p><strong>Adresse :</strong> Complexe Nelson Paillou, Avenue Bernard IV, 31600 Muret</p>
              <p className="text-sm text-gray-600">Sud de Toulouse - Haute-Garonne (31)</p>
              <div className="flex items-center gap-2 mt-3">
                <Car className="h-5 w-5 text-orange-500" />
                <span className="text-sm text-gray-600">Parking disponible sur place</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking CTA Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Réservez votre créneau dès maintenant !
            </h2>
            
            <div className="flex justify-center gap-4 mb-6 flex-wrap">
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
                <h2>TC MURET - Tennis Club de Muret</h2>
                <p>
                  Le <strong>TC MURET</strong> (Tennis Club de Muret) est situé au cœur du <strong>Complexe Nelson Paillou</strong>, à Muret en Haute-Garonne (31). Ce terrain de padel bénéficie d'une infrastructure sportive de qualité et d'un emplacement stratégique au sud de Toulouse.
                </p>
                
                <h3>Un emplacement stratégique</h3>
                <p>
                  Situé à seulement 20 minutes au sud de Toulouse, le <strong>TC MURET</strong> est facilement accessible depuis toute l'agglomération toulousaine. Le Complexe Nelson Paillou offre des installations modernes et un parking gratuit pour les joueurs.
                </p>

                <h3>Location de matériel - 4€</h3>
                <p>
                  Le <strong>TC MURET</strong> met à votre disposition du <strong>matériel de qualité pour seulement 4€</strong> : raquettes et balles. Ajoutez simplement cette option lors de votre réservation via l'application Village Padel.
                </p>

                <h3>Tarification</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-brand-blue mb-2">Nos tarifs :</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>À partir de 8€ par personne</strong></li>
                    <li><strong>Matériel : +4€</strong> - Raquettes et balles de qualité</li>
                  </ul>
                  <p className="text-sm mt-2 text-gray-600">Exemple : pour 4 joueurs = à partir de 32€ + 4€ matériel (optionnel) = 36€ total</p>
                </div>

                <h3>Au cœur de la Haute-Garonne</h3>
                <p>
                  <strong>TC MURET</strong> est idéalement situé en Haute-Garonne (31), offrant un accès facile depuis Toulouse et les communes environnantes comme Portet-sur-Garonne, Seysses, Roques ou encore Saint-Lys.
                </p>

                <div className="bg-green-50 p-4 rounded-lg mt-6">
                  <h4 className="font-semibold text-green-700 mb-2">Comment réserver ?</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-green-800">
                    <li>Téléchargez l'app Village Padel</li>
                    <li>Sélectionnez TC MURET dans la liste des terrains</li>
                    <li>Choisissez votre créneau horaire</li>
                    <li>Indiquez le nombre de joueurs</li>
                    <li>Ajoutez le matériel si besoin (+4€)</li>
                    <li>Payez en ligne de façon sécurisée</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <h4 className="font-semibold text-yellow-700 mb-2">Pourquoi choisir TC MURET ?</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-yellow-800">
                    <li><strong>Tarif compétitif</strong> - À partir de 8€ par personne</li>
                    <li><strong>Complexe sportif de qualité</strong> - Infrastructures modernes</li>
                    <li><strong>Matériel disponible</strong> - Location à 4€ seulement</li>
                    <li><strong>Proche de Toulouse</strong> - À 20 min au sud de la ville rose</li>
                    <li><strong>Parking gratuit</strong> - Stationnement facile sur place</li>
                  </ul>
                </div>

                <h3>Accès et stationnement</h3>
                <p>
                  Le terrain est situé au Complexe Nelson Paillou, Avenue Bernard IV, 31600 Muret. Facilement accessible en voiture depuis Toulouse (A64/D820) ou les communes avoisinantes. Grand parking gratuit disponible sur place.
                </p>
              </div>
            </details>
          </div>
        </section>
      </div>

    </div>
  );
};

export default TCMuretPadel;