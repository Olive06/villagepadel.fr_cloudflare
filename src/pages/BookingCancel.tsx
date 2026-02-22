import React from 'react';
import { Helmet } from 'react-helmet';
import { XCircle, RefreshCw } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const BookingCancel: React.FC = () => {
  const [searchParams] = useSearchParams();
  const reason = searchParams.get('reason');

  const isError = reason === 'error';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Helmet>
        <title>Reservation annulee - Village Padel</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <XCircle className={`w-16 h-16 ${isError ? 'text-red-500' : 'text-orange-400'}`} />
        </div>

        <h1 className="text-2xl font-bold text-brand-blue mb-3">
          {isError ? 'Erreur de paiement' : 'Reservation annulee'}
        </h1>

        <p className="text-gray-600 mb-6">
          {isError
            ? "Une erreur est survenue lors du paiement. Aucun montant n'a ete debite."
            : "Vous avez annule le paiement. Aucun montant n'a ete debite et le creneau reste disponible."}
        </p>

        {isError && (
          <div className="bg-red-50 rounded-xl p-4 mb-6 flex items-start gap-3">
            <RefreshCw className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700 text-left">
              Vous pouvez reessayer. Si le probleme persiste, contactez-nous.
            </p>
          </div>
        )}

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

export default BookingCancel;
