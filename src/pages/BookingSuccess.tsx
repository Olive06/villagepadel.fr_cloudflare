import React from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle, Mail } from 'lucide-react';

const BookingSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Helmet>
        <title>Reservation confirmee - Village Padel</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-brand-blue mb-3">
          Paiement reussi !
        </h1>

        <p className="text-gray-600 mb-6">
          Votre reservation a bien ete prise en compte.
        </p>

        <div className="bg-blue-50 rounded-xl p-4 mb-6 flex items-start gap-3">
          <Mail className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-700 text-left">
            Vous allez recevoir un <strong>email de confirmation</strong> avec tous les details de votre reservation et votre code d'acces.
          </p>
        </div>

        <a
          href="https://villagepadel.fr"
          className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Retour a l'accueil
        </a>
      </div>
    </div>
  );
};

export default BookingSuccess;
