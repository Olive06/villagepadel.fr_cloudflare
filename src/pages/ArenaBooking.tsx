import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ArenaBooking: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const deepLink = `villagepadel://arena/${bookingId}`;
    const androidIntent = `intent://arena/${bookingId}#Intent;scheme=villagepadel;package=com.villagePadel;end`;

    let hasOpenedApp = false;
    let timer: NodeJS.Timeout;

    const openApp = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isAndroid = /android/i.test(userAgent);
      const isIOS = /iphone|ipad|ipod/i.test(userAgent);

      if (isAndroid) {
        window.location.href = androidIntent;

        setTimeout(() => {
          if (!hasOpenedApp) {
            window.location.href = deepLink;
          }
        }, 500);
      } else if (isIOS) {
        // Fallback to custom scheme if Universal Link fails
        setTimeout(() => {
          if (!document.hidden) {
            window.location.href = deepLink;
          }
        }, 1500);
      } else {
        window.location.href = deepLink;
      }

      timer = setTimeout(() => setShowFallback(true), 2500);
    };

    openApp();

    const handleBlur = () => {
      hasOpenedApp = true;
      clearTimeout(timer);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        hasOpenedApp = true;
        clearTimeout(timer);
      }
    };

    window.addEventListener('blur', handleBlur);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timer);
    };
  }, [bookingId]);

  if (showFallback) {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    const isMac = /Mac/.test(userAgent);

    const storeUrl = isIOS || isMac
      ? 'https://apps.apple.com/fr/app/village-padel/id6504023084'
      : 'https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr';

    return (
      <>
        <Helmet>
          <title>Rejoindre mon Match - Village Padel</title>
          <meta name="description" content="Rejoignez votre défi Arena et affrontez d'autres joueurs de padel !" />
          <meta property="og:title" content="Rejoindre mon Match Village Padel" />
          <meta property="og:description" content="Votre défi Arena vous attend ! Rejoignez votre match et affrontez d'autres passionnés de padel." />
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2Farena_padel.jpeg?alt=media&token=4d9d7c02-af0f-4847-8af8-480c24aff178" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://villagepadel.fr/arena/${bookingId}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Rejoindre mon Match Village Padel" />
          <meta name="twitter:description" content="Votre défi Arena vous attend ! Rejoignez votre match et affrontez d'autres passionnés de padel." />
          <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2Farena_padel.jpeg?alt=media&token=4d9d7c02-af0f-4847-8af8-480c24aff178" />
        </Helmet>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4">
          <h1 className="text-4xl font-bold mb-4">Village Padel</h1>
          <p className="text-xl mb-6">Ouvrir dans l'app...</p>
          <a
            href={storeUrl}
            className="mt-6 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Télécharger l'app
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Rejoindre mon Match - Village Padel</title>
        <meta name="description" content="Rejoignez votre défi Arena et affrontez d'autres joueurs de padel !" />
        <meta property="og:title" content="Rejoindre mon Match Village Padel" />
        <meta property="og:description" content="Votre défi Arena vous attend ! Rejoignez votre match et affrontez d'autres passionnés de padel." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2Farena_padel.jpeg?alt=media&token=4d9d7c02-af0f-4847-8af8-480c24aff178" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://villagepadel.fr/arena/${bookingId}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rejoindre mon Match Village Padel" />
        <meta name="twitter:description" content="Votre défi Arena vous attend ! Rejoignez votre match et affrontez d'autres passionnés de padel." />
        <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2Farena_padel.jpeg?alt=media&token=4d9d7c02-af0f-4847-8af8-480c24aff178" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Village Padel</h1>
          <p className="text-xl mb-6">Ouverture du match...</p>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p className="mt-6 text-sm opacity-80">
            Si l'app ne s'ouvre pas, vous serez redirigé.
          </p>
        </div>
      </div>
    </>
  );
};

export default ArenaBooking;