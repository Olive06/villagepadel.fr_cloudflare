import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AlertTriangle, CheckCircle, XCircle, Loader2, Calendar, MapPin, Clock } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const API_BASE = 'https://api-partner.villagepadel.fr';

interface BookingInfo {
  club: string;
  terrain: string;
  start_time: string;
  end_time: string;
  price: number;
  address: string;
}

interface CancelInfoResponse {
  success: boolean;
  error?: string;
  already_cancelled?: boolean;
  can_cancel?: boolean;
  reason?: string;
  hours_until_start?: number;
  cancellation_hours?: number;
  booking?: BookingInfo;
}

type PageState = 'loading' | 'details' | 'too_late' | 'already_cancelled' | 'confirming' | 'success' | 'error';

const CancelBooking: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || '';
  const email = searchParams.get('email') || '';
  const token = searchParams.get('token') || '';

  const [state, setState] = useState<PageState>('loading');
  const [booking, setBooking] = useState<BookingInfo | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [cancellationHours, setCancellationHours] = useState(6);
  const [refundAmount, setRefundAmount] = useState(0);

  useEffect(() => {
    if (!id || !email || !token) {
      setErrorMessage('Lien invalide.');
      setState('error');
      return;
    }

    fetch(`${API_BASE}/v1/cancel-info?id=${encodeURIComponent(id)}&email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`)
      .then(res => res.json())
      .then((data: CancelInfoResponse) => {
        if (!data.success) {
          setErrorMessage(data.error || 'Lien invalide ou expiré.');
          setState('error');
          return;
        }

        if (data.booking) setBooking(data.booking);
        if (data.cancellation_hours) setCancellationHours(data.cancellation_hours);

        if (data.already_cancelled) {
          setState('already_cancelled');
        } else if (data.can_cancel) {
          setState('details');
        } else {
          setErrorMessage(data.reason || 'Annulation impossible.');
          setState('too_late');
        }
      })
      .catch(() => {
        setErrorMessage('Impossible de contacter le serveur. Réessayez plus tard.');
        setState('error');
      });
  }, [id, email, token]);

  const handleCancel = async () => {
    setState('confirming');
    try {
      const res = await fetch(`${API_BASE}/v1/cancel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, email, token }),
      });
      const data = await res.json();

      if (data.success) {
        setRefundAmount(data.refund_amount || 0);
        setState('success');
      } else {
        setErrorMessage(data.error || 'Erreur lors de l\'annulation.');
        setState('error');
      }
    } catch {
      setErrorMessage('Impossible de contacter le serveur. Réessayez plus tard.');
      setState('error');
    }
  };

  const formatDateTime = (iso: string) => {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }) + ' à ' + d.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Europe/Paris',
      });
    } catch {
      return iso;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <Helmet>
        <title>Annuler ma réservation - Village Padel</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">

        {/* LOADING */}
        {state === 'loading' && (
          <>
            <div className="flex justify-center mb-6">
              <Loader2 className="w-16 h-16 text-brand-blue animate-spin" />
            </div>
            <h1 className="text-xl font-bold text-brand-blue">
              Chargement...
            </h1>
          </>
        )}

        {/* DETAILS — can cancel */}
        {state === 'details' && booking && (
          <>
            <div className="flex justify-center mb-6">
              <AlertTriangle className="w-16 h-16 text-orange-400" />
            </div>
            <h1 className="text-2xl font-bold text-brand-blue mb-4">
              Annuler votre réservation ?
            </h1>

            <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">{booking.club}</p>
                  <p className="text-sm text-gray-600">{booking.terrain}</p>
                  {booking.address && <p className="text-sm text-gray-500">{booking.address}</p>}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-brand-blue flex-shrink-0" />
                <p className="text-gray-700">{formatDateTime(booking.start_time)}</p>
              </div>
              {booking.price > 0 && (
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <p className="text-gray-700">Remboursement : <strong>{booking.price.toFixed(2)} EUR</strong></p>
                </div>
              )}
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Cette action est irréversible. Vous serez remboursé sur votre moyen de paiement.
            </p>

            <button
              onClick={handleCancel}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors mb-3"
            >
              Confirmer l'annulation
            </button>
            <a
              href="https://villagepadel.fr"
              className="inline-block text-brand-blue hover:underline text-sm"
            >
              Non, garder ma réservation
            </a>
          </>
        )}

        {/* CONFIRMING — spinner */}
        {state === 'confirming' && (
          <>
            <div className="flex justify-center mb-6">
              <Loader2 className="w-16 h-16 text-brand-blue animate-spin" />
            </div>
            <h1 className="text-xl font-bold text-brand-blue">
              Annulation en cours...
            </h1>
          </>
        )}

        {/* SUCCESS */}
        {state === 'success' && (
          <>
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold text-brand-blue mb-3">
              Réservation annulée
            </h1>
            <p className="text-gray-600 mb-6">
              {refundAmount > 0
                ? `Votre remboursement de ${refundAmount.toFixed(2)} EUR sera crédité sous quelques jours.`
                : 'Votre réservation a bien été annulée.'}
            </p>
            <a
              href="https://villagepadel.fr"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Retour à l'accueil
            </a>
          </>
        )}

        {/* ALREADY CANCELLED */}
        {state === 'already_cancelled' && (
          <>
            <div className="flex justify-center mb-6">
              <CheckCircle className="w-16 h-16 text-gray-400" />
            </div>
            <h1 className="text-2xl font-bold text-brand-blue mb-3">
              Déjà annulée
            </h1>
            <p className="text-gray-600 mb-6">
              Cette réservation a déjà été annulée.
            </p>
            <a
              href="https://villagepadel.fr"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Retour à l'accueil
            </a>
          </>
        )}

        {/* TOO LATE */}
        {state === 'too_late' && (
          <>
            <div className="flex justify-center mb-6">
              <XCircle className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-brand-blue mb-3">
              Annulation impossible
            </h1>
            <p className="text-gray-600 mb-6">
              {errorMessage || `L'annulation n'est plus possible moins de ${cancellationHours}h avant le créneau.`}
            </p>
            <a
              href="https://villagepadel.fr"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Retour à l'accueil
            </a>
          </>
        )}

        {/* ERROR */}
        {state === 'error' && (
          <>
            <div className="flex justify-center mb-6">
              <XCircle className="w-16 h-16 text-red-500" />
            </div>
            <h1 className="text-2xl font-bold text-brand-blue mb-3">
              Erreur
            </h1>
            <p className="text-gray-600 mb-6">
              {errorMessage}
            </p>
            <a
              href="https://villagepadel.fr"
              className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Retour à l'accueil
            </a>
          </>
        )}

      </div>
    </div>
  );
};

export default CancelBooking;
