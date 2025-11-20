import React from 'react';
import { Helmet } from 'react-helmet';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <>
      <Helmet>
        {/* Meta tags Open Graph pour la page d'accueil */}
        <meta
          property="og:title"
          content="Village Padel - Réservez et Accédez à Votre Terrain en 1 Clic"
        />
        <meta
          property="og:description"
          content="Automatisation des terrains, réservation rapide, accès connecté. Offrez la meilleure expérience padel à vos joueurs."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/damfvriyn/image/upload/v1736002528/cjeyubfsyydtcdwkkxaw.jpg"
        />
        <meta property="og:url" content="https://villagepadel.fr/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Village Padel - Application & Automatisation de Padel"
        />
        <meta
          name="twitter:description"
          content="La solution padel complète : réservations, accès digital et automatisation tout-en-un."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/damfvriyn/image/upload/v1736002528/cjeyubfsyydtcdwkkxaw.jpg"
        />
      </Helmet>
      
      <section className="bg-brand-blue text-white px-6 py-12 lg:py-20 overflow-hidden">
        {/* Headline full width with improved spacing */}
        <div className="max-w-7xl mx-auto mb-10 lg:mb-14">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-center">
          Réservez un <span className="text-brand-orange">padel autonome</span> avec Village Padel
        </h1>
        </div>
        
        {/* Grid with vertical centering and proper alignment */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* LEFT – Text content with improved spacing and alignment */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl font-medium text-white">
                Réservez dans nos clubs partenaires.
              </p>
              
              <p className="text-lg text-gray-300">
                Village Padel offre la solution ultime pour les clubs : automatisation 
                complète, application mobile de réservation, accès intelligent, et 
                gestion simplifiée.
              </p>
            </div>
            
            {/* Buttons with consistent sizing and improved spacing */}
            <div className="flex flex-col sm:flex-row gap-5 pt-2">
              <a
                href="https://apps.apple.com/fr/app/village-padel/id6504023084"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-4 rounded-lg text-white bg-brand-orange hover:bg-brand-orange-dark text-lg font-semibold shadow-lg transition-colors"
              >
                <Download className="w-5 h-5 mr-3" />
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-4 rounded-lg text-brand-blue bg-white hover:bg-gray-100 text-lg font-semibold shadow-lg transition-colors"
              >
                <Download className="w-5 h-5 mr-3" />
                Google Play
              </a>
            </div>
          </div>
          
          {/* RIGHT – Image with proper sizing and responsive behavior */}
          <div className="relative h-full flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://olive06.github.io/villagepadel.fr/images/grisolles-2.jpg"
                alt="Terrain de padel automatisé"
                className="w-full object-cover object-center max-h-[380px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;