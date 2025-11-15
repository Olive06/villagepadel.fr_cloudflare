import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ArenaBooking: React.FC = () => {
  const { bookingId } = useParams<{ bookingId: string }>();
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const deepLink = `villagepadel://arena/${bookingId}`;
    const androidIntent = `intent://arena/${bookingId}#Intent;scheme=villagepadel;package=com.villagePadel;end`;
    const iosUniversal = `https://villagepadel.fr/arena/${bookingId}`; // Universal Link

    let hasOpenedApp = false;
    let timer: NodeJS.Timeout;

    const openApp = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isAndroid = /android/i.test(userAgent);
      const isIOS = /iphone|ipad|ipod/i.test(userAgent);

      if (isAndroid) {
        // Method 1: Try intent (most reliable)
        window.location.href = androidIntent;

        // Method 2: Fallback to custom scheme
        setTimeout(() => {
          if (!hasOpenedApp) {
            window.location.href = deepLink;
          }
        }, 500);
      } else if (isIOS) {
        // iOS: Use Universal Link (requires apple-app-site-association)
        window.location.href = iosUniversal;
      } else {
        window.location.href = deepLink;
      }

      // Show store after delay
      timer = setTimeout(() => {
        setShowFallback(true);
      }, 2000);
    };

    openApp();

    // Detect if app opened (blur = app opened)
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
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Village Padel</h1>
        <p className="text-xl mb-6">Ouverture de la réservation...</p>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        <p className="mt-6 text-sm opacity-80">
          Si l'app ne s'ouvre pas, vous serez redirigé.
        </p>
      </div>
    </div>
  );
};

export default ArenaBooking;