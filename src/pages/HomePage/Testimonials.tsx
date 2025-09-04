import React from 'react';
import { Users, TrendingUp, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResultsMetrics = () => {
  const metrics = [
    {
      icon: <Calendar className="h-10 w-10 text-brand-orange" />,
      value: "30+",
      label: "Réservations par semaine",
      description: "En moyenne par terrain automatisé"
    },
    {
      icon: <Users className="h-10 w-10 text-brand-orange" />,
      value: "+15%",
      label: "Augmentation des licenciés",
      description: "Dans les clubs partenaires"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-brand-orange" />,
      value: "+30%",
      label: "Croissance des revenus",
      description: "Pour les clubs équipés de notre solution"
    }
  ];

  const testimonials = [
    {
      quote: "Une solution qui a transformé notre club tout en simplifiant notre gestion.",
      author: "Clement P.",
      role: "Président du Club de Tennis de Grisolles",
      location: "Tarn-et-Garonne"
    },
    {
      quote: "Les terrains automatisés ont considérablement augmenté nos réservations hors heures de permanence.",
      author: "Stephane T.",
      role: "Bureau du Tennis Club de Grisolles",
      location: "Tarn-et-Garonne"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Résultats prouvés</h2>
          <p className="text-lg text-gray-600">
            Des chiffres concrets qui démontrent l'efficacité de nos solutions
          </p>
        </div>
        
        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">{metric.icon}</div>
              <div className="text-4xl font-bold text-brand-blue mb-2">{metric.value}</div>
              <div className="font-semibold text-lg mb-2">{metric.label}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>
        
        
        {/* CTA Button */}
        <div className="text-center">
          <Link 
            to="/nos-padels"
            className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-medium rounded-lg hover:bg-brand-blue-dark transition-colors"
          >
            Voir tous nos partenaires
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsMetrics;
