import React from 'react';
import { Helmet } from 'react-helmet';
import { Smartphone, Key, Sun, Package, Zap, BarChart, Shield, Database, CreditCard, Users, Clock, Mail, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const VPTechPage = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags - OPTIMISÉ */}
      <Helmet>
        <title>Automatisation Terrain Padel | Logiciel Gestion Club Padel | VP Tech</title>
        <meta
          name="description"
          content="VP Tech : solution d'automatisation terrain de padel. Logiciel de gestion club padel avec réservation en ligne, accès autonome par smartphone, éclairage intelligent. Alternative moderne aux systèmes traditionnels."
        />
        <meta
          name="keywords"
          content="automatisation padel, terrain padel autonome, logiciel gestion padel, réservation padel en ligne, accès automatique padel, système réservation padel, gestion club padel, padel automatisé, VP Tech, Village Padel, logiciel club tennis padel, solution digitale padel, padel connecté, casier matériel padel, éclairage automatique padel"
        />
        {/* Open Graph */}
        <meta property="og:title" content="VP Tech - Automatisation & Gestion Club Padel" />
        <meta
          property="og:description"
          content="Solution complète d'automatisation pour clubs de padel : réservation en ligne, accès autonome, éclairage intelligent, gestion simplifiée."
        />
        <meta
          property="og:image"
          content="https://olive06.github.io/villagepadel.fr/images/autonom_hero.jpg"
        />
        <meta property="og:url" content="https://villagepadel.fr/vp-tech" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VP Tech - Automatisation Terrain Padel" />
        <meta
          name="twitter:description"
          content="Logiciel de gestion et automatisation pour clubs de padel. Réservation, accès autonome, éclairage intelligent."
        />
        <meta
          name="twitter:image"
          content="https://olive06.github.io/villagepadel.fr/images/autonom_hero.jpg"
        />
        <link rel="canonical" href="https://villagepadel.fr/vp-tech" />
      </Helmet>

      {/* Hero Section avec image en background */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        {/* Image de fond */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://olive06.github.io/villagepadel.fr/images/autonom_hero.jpg')`
          }}
        />
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Contenu texte */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            <span className="text-brand-orange">VP Tech</span> : Automatisez votre padel
          </h1>
          <p className="text-xl md:text-2xl mb-4 drop-shadow-md">
            Réservation en ligne, accès autonome, matériel connecté
          </p>
          <p className="text-lg text-gray-200 mb-8 drop-shadow-md">
            La solution tout-en-un qui révolutionne la gestion des clubs de padel en France
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:scale-105"
            >
              Demander un devis
            </a>
            <a 
              href="#options" 
              className="bg-white hover:bg-gray-100 text-brand-blue font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform hover:scale-105"
            >
              Découvrir nos offres
            </a>
          </div>
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Installation</span>
              <span className="text-gray-700">1-2 jours</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Intégration App</span>
              <span className="text-gray-700">Gratuite</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Solution Complète</span>
              <span className="text-gray-700">Sur devis</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Support</span>
              <span className="text-gray-700">7j/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Logiciel de gestion et automatisation pour club de padel
            </h2>
            <p className="text-lg text-gray-600">
              VP Tech intègre toutes les fonctionnalités nécessaires pour rendre votre club autonome et optimiser son rendement
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-brand-orange bg-opacity-10 p-4 rounded-lg inline-flex mb-5">
                <Smartphone className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Application Mobile</h3>
              <p className="text-gray-600">
                Réservation instantanée, paiement intégré et accès aux terrains directement depuis l'application Village Padel
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-brand-orange bg-opacity-10 p-4 rounded-lg inline-flex mb-5">
                <Key className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accès Automatisé</h3>
              <p className="text-gray-600">
                Contrôle d'accès intelligent par smartphone pour les portes et portails, sans clés physiques
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-brand-orange bg-opacity-10 p-4 rounded-lg inline-flex mb-5">
                <Sun className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Éclairage Intelligent</h3>
              <p className="text-gray-600">
                Allumage et extinction automatiques des lumières lors des réservations, économisant énergie et coûts
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-brand-orange bg-opacity-10 p-4 rounded-lg inline-flex mb-5">
                <Package className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Location de Matériel</h3>
              <p className="text-gray-600">
                Système de location automatisé pour raquettes et balles via des casiers sécurisés accessibles par l'application
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-brand-orange bg-opacity-10 p-4 rounded-lg inline-flex mb-5">
                <Database className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Tableau de Bord Admin</h3>
              <p className="text-gray-600">
                Interface d'administration complète pour gérer les réservations, les membres et les statistiques du club
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-brand-orange bg-opacity-10 p-4 rounded-lg inline-flex mb-5">
                <BarChart className="h-8 w-8 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Marketing IA</h3>
              <p className="text-gray-600">
                Solution marketing pilotée par IA pour attirer de nouveaux joueurs et optimiser le taux d'occupation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comment fonctionne l'automatisation VP Tech ?
            </h2>
            <p className="text-lg text-gray-600">
              Une solution complète et intégrée pour une expérience fluide, du joueur au gestionnaire
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center mb-12 md:mb-20">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="app-image w-full flex items-center justify-center">
                  <img 
                    src="https://github.com/Olive06/village-padel/blob/main/app_webiste_new.jpg?raw=true" 
                    alt="Application réservation padel en ligne Village Padel"
                    className="max-h-[420px] w-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Réservation en ligne instantanée</h3>
                <p className="text-gray-600 mb-4">
                  Les joueurs réservent et paient leur session en quelques clics via l'application Village Padel. Ils peuvent inviter d'autres joueurs, partager les frais et gérer leurs réservations.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    Disponibilité en temps réel
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    Paiement sécurisé intégré
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    Notifications automatiques
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center mb-12 md:mb-20">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
                <div className="app-image w-full flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/damfvriyn/image/upload/v1736008896/IMG_2482_jajepj.jpg" 
                    alt="Accès automatisé terrain padel autonome" 
                    className="max-h-[420px] w-auto rounded-xl shadow-md object-contain"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pr-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Accès autonome au terrain</h3>
                <p className="text-gray-600 mb-4">
                  À l'heure de leur réservation, les joueurs accèdent au terrain et aux équipements directement via l'application. Le système déverrouille automatiquement les portes et active l'éclairage.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    Déverrouillage par smartphone
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    Éclairage automatique
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    Accès aux casiers à matériel
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="app-image w-full flex items-center justify-center">
                  <img 
                    src="https://olive06.github.io/villagepadel.fr/images/Ai_content.png" 
                    alt="Tableau de bord gestion club padel IA marketing" 
                    className="max-h-[420px] w-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-orange text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">Gestion simplifiée et marketing IA</h3>
                <p className="text-gray-600 mb-4">
                  Les administrateurs du club disposent d'un tableau de bord complet pour suivre les réservations, gérer les membres et analyser les performances. Notre solution marketing IA aide à attirer de nouveaux joueurs.
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    Statistiques d'utilisation
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    Campagnes marketing automatisées
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-orange mr-2">✓</span>
                    Support technique dédié
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options and Pricing */}
      <section id="options" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nos offres d'automatisation padel
            </h2>
            <p className="text-lg text-gray-600">
              Des solutions adaptées à tous les types de clubs de padel
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Option 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-brand-blue-dark text-white p-6 text-center">
                <h3 className="text-2xl font-bold">Intégration App</h3>
                <p className="text-blue-200 mt-2">Compatible avec Neop et Spartime</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <p className="text-4xl font-bold text-brand-blue mb-1">Gratuit</p>
                  <p className="text-gray-600">Sans frais d'installation</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Zap className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Intégration de l'app Village Padel avec votre système existant</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Réservation en ligne pour vos clients</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Offrez des tarifs privilégiés à vos licenciés</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Compatible avec Neop et Spartime</span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Support technique inclus</span>
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="block text-center bg-gray-100 text-brand-blue font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Demander l'intégration
                </a>
              </div>
            </div>

            {/* Option 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-brand-orange">
              <div className="bg-brand-orange text-white p-6 text-center">
                <h3 className="text-2xl font-bold">VP Tech Complet</h3>
                <p className="text-orange-100 mt-2">La solution tout-en-un</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <p className="text-4xl font-bold text-brand-blue mb-1">Sur devis</p>
                  <p className="text-gray-600">Adapté à vos besoins</p>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <Shield className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Automatisation complète des accès, éclairage et matériel</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Application mobile de réservation et paiement</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Tableau de bord administrateur</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Solution marketing IA</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-brand-orange h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>Installation et formation incluses</span>
                  </li>
                </ul>
                <a 
                  href="#contact" 
                  className="block text-center bg-brand-orange text-white font-medium px-6 py-3 rounded-lg hover:bg-brand-orange-dark transition-colors"
                >
                  Demander un devis personnalisé
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi choisir VP Tech pour votre club ?
            </h2>
            <p className="text-lg text-gray-600">
              Des avantages concrets pour votre club et vos joueurs
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-y-12 gap-x-8">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-orange bg-opacity-10 p-5 rounded-full mb-5">
                <CreditCard className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Augmentation des revenus</h3>
              <p className="text-gray-600">
                Constatez une hausse moyenne de 30% des revenus grâce à l'optimisation des réservations et à la réduction des annulations
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-orange bg-opacity-10 p-5 rounded-full mb-5">
                <Users className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Croissance de la communauté</h3>
              <p className="text-gray-600">
                Attirez en moyenne 15% de nouveaux joueurs grâce à notre solution marketing IA et l'expérience utilisateur améliorée
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-orange bg-opacity-10 p-5 rounded-full mb-5">
                <Clock className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Gain de temps considérable</h3>
              <p className="text-gray-600">
                Libérez jusqu'à 20 heures par semaine pour votre équipe en automatisant les tâches administratives répétitives
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-orange bg-opacity-10 p-5 rounded-full mb-5">
                <Zap className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Réduction des coûts</h3>
              <p className="text-gray-600">
                Économisez sur les coûts d'énergie grâce à l'éclairage intelligent et optimisez vos ressources humaines
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-orange bg-opacity-10 p-5 rounded-full mb-5">
                <Database className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Données précieuses</h3>
              <p className="text-gray-600">
                Accédez à des analyses détaillées sur l'utilisation des terrains et le comportement des joueurs pour prendre des décisions éclairées
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-brand-orange bg-opacity-10 p-5 rounded-full mb-5">
                <MessageSquare className="h-10 w-10 text-brand-orange" />
              </div>
              <h3 className="text-xl font-bold mb-3">Satisfaction client</h3>
              <p className="text-gray-600">
                Offrez une expérience utilisateur fluide et moderne qui fidélise vos joueurs et génère des recommandations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ce que disent nos clients
            </h2>
            <p className="text-lg text-gray-600">
              Des clubs qui ont transformé leur activité grâce à VP Tech
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md mb-8">
              <div className="flex items-start">
                <div className="mr-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                </div>
                <div>
                  <div className="flex text-yellow-400 mb-4">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "L'installation de VP Tech a complètement transformé notre club. Nos réservations ont augmenté de 35% et nos membres adorent pouvoir réserver et accéder aux terrains en toute autonomie."
                  </p>
                  <p className="font-bold">Clément P.</p>
                  <p className="text-gray-600">Président du Club de Tennis de Grisolles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à automatiser votre club de padel ?
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Contactez-nous dès aujourd'hui pour une démonstration personnalisée
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#contact" 
                className="bg-white text-brand-blue px-8 py-4 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
              >
                Demander un devis
              </a>
              <a 
                href="tel:0749157401" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-center hover:bg-white hover:bg-opacity-10 transition-colors"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions fréquentes sur l'automatisation padel
            </h2>
            <p className="text-lg text-gray-600">
              Tout ce que vous devez savoir sur notre solution d'automatisation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Combien de temps prend l'installation de VP Tech ?</h3>
              <p className="text-gray-600">
                L'installation complète de notre solution sur un terrain de padel prend généralement entre 1 et 2 jours ouvrables, selon la configuration de votre club. Notre équipe technique s'occupe de tout pour minimiser les perturbations.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Est-ce que VP Tech est compatible avec mon installation électrique actuelle ?</h3>
              <p className="text-gray-600">
                Oui, VP Tech est conçu pour s'intégrer facilement avec la plupart des installations électriques existantes. Nous effectuons une évaluation préalable pour garantir une compatibilité optimale et proposons des solutions adaptées si nécessaire.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Comment les joueurs accèdent-ils au terrain avec un système autonome ?</h3>
              <p className="text-gray-600">
                Les joueurs utilisent simplement l'application Village Padel sur leur smartphone. À l'heure de leur réservation, un bouton d'accès s'active dans l'application. En appuyant sur ce bouton, la porte du terrain se déverrouille automatiquement.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Que se passe-t-il en cas de panne de courant ou de connexion internet ?</h3>
              <p className="text-gray-600">
                Notre système est conçu avec des dispositifs de secours. En cas de panne de courant, un système de batterie de secours maintient les fonctions essentielles. Pour les problèmes de connexion internet, un mode hors ligne permet aux administrateurs d'accéder manuellement aux installations.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">VP Tech est-il compatible avec Gestion Sports, Doinsport ou d'autres logiciels ?</h3>
              <p className="text-gray-600">
                VP Tech s'intègre actuellement avec Neop et Spartime. Pour les clubs utilisant d'autres solutions comme Gestion Sports ou Doinsport, nous proposons notre propre système de réservation complet ou étudions les possibilités d'intégration au cas par cas. Contactez-nous pour en discuter.
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div>
              <h3 className="text-xl font-bold mb-4">Proposez-vous un service d'assistance technique ?</h3>
              <p className="text-gray-600">
                Absolument ! Nous offrons un support technique dédié 7j/7 pour répondre à toutes vos questions et résoudre rapidement tout problème éventuel. La maintenance à distance est incluse dans notre service, permettant de résoudre la plupart des problèmes sans intervention sur site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h2>
            <p className="text-lg text-gray-600">
              Obtenez une démonstration personnalisée ou un devis adapté à vos besoins
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <form className="space-y-6" onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const phone = formData.get('phone');
                  const club = formData.get('club');
                  const message = formData.get('message');
                  const consent = formData.get('consent');

                  const subject = encodeURIComponent(`Demande de devis VP Tech - ${club || 'Club'}`);
                  const body = encodeURIComponent(`Bonjour,

Je souhaite obtenir plus d'informations sur VP Tech pour mon club de padel.

Informations de contact :
- Nom : ${name || 'Non renseigné'}
- Email : ${email || 'Non renseigné'}
- Téléphone : ${phone || 'Non renseigné'}
- Club : ${club || 'Non renseigné'}

Message :
${message || 'Aucun message spécifique'}

Consentement données : ${consent ? 'Accepté' : 'Non accepté'}

Cordialement,
${name || 'Prospect'}`);

                  window.location.href = `mailto:contact@villagepadel.fr?subject=${subject}&body=${body}`;
                }}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>

                  <div>
                    <label htmlFor="club" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom du club
                    </label>
                    <input
                      type="text"
                      id="club"
                      name="club"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange"
                      placeholder="Nom de votre club de padel"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-orange focus:border-brand-orange"
                      placeholder="Décrivez votre projet ou posez-nous vos questions"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className="h-4 w-4 text-brand-orange focus:ring-brand-orange border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                      J'accepte que mes données soient utilisées pour me recontacter
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-brand-orange text-white py-3 px-4 rounded-md font-medium hover:bg-brand-orange-dark transition-colors"
                    >
                      Envoyer ma demande
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-gray-600 mb-4">Ou contactez-nous directement</p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <a 
                      href="tel:0749157401" 
                      className="flex items-center justify-center text-brand-blue"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      <span>07.49.15.74.01</span>
                    </a>
                    <a 
                      href="mailto:contact@villagepadel.fr" 
                      className="flex items-center justify-center text-brand-blue"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      <span>contact@villagepadel.fr</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Rich Section - ENRICHIE */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <details className="bg-gray-50 rounded-xl shadow-md p-6">
            <summary className="cursor-pointer text-xl font-semibold text-brand-blue mb-4">
              Plus d'infos sur l'automatisation des clubs de padel
            </summary>
            <div className="prose prose-lg max-w-none mt-4 text-gray-700">
              <h2>Solution d'automatisation terrain de padel - VP Tech par Village Padel</h2>
              <p>
                Village Padel propose <strong>VP Tech</strong>, la solution d'<strong>automatisation complète pour terrains de padel</strong> qui révolutionne la gestion et l'expérience des joueurs. Notre technologie tout-en-un intègre <strong>réservation en ligne</strong>, <strong>contrôle d'accès autonome</strong>, gestion de l'<strong>éclairage intelligent</strong> et <strong>location de matériel automatisée</strong> dans une interface centralisée.
              </p>
              
              <h3>Logiciel de gestion club padel : une alternative moderne</h3>
              <p>
                Face à l'explosion du padel en France, les clubs recherchent des solutions efficaces pour gérer leurs terrains. VP Tech se positionne comme une <strong>alternative moderne aux logiciels traditionnels</strong> de gestion de clubs sportifs. Contrairement aux solutions génériques, notre système est spécifiquement conçu pour le padel avec des fonctionnalités adaptées : créneaux de 1h30, gestion multi-terrains, partage de frais entre joueurs, etc.
              </p>
              
              <h3>Terrain de padel autonome : comment ça marche ?</h3>
              <p>
                Un <strong>terrain de padel autonome</strong> fonctionne sans présence humaine permanente. Grâce à VP Tech, les joueurs réservent en ligne, paient via l'application, puis accèdent au terrain à l'heure prévue en déverrouillant la porte avec leur smartphone. L'éclairage s'active automatiquement et le matériel (raquettes, balles) peut être récupéré dans des casiers connectés. Cette automatisation permet aux clubs de :
              </p>
              <ul>
                <li>Proposer des horaires étendus (tôt le matin, tard le soir)</li>
                <li>Réduire les coûts de personnel</li>
                <li>Augmenter le taux d'occupation des terrains</li>
                <li>Offrir une expérience moderne aux joueurs</li>
              </ul>
              
              <h3>Compatibilité avec les systèmes existants</h3>
              <p>
                VP Tech s'intègre avec les plateformes populaires comme <strong>Neop</strong> et <strong>Spartime</strong>, permettant aux clubs d'améliorer leurs systèmes existants. Pour les clubs utilisant d'autres solutions de <strong>gestion de réservation sportive</strong>, nous proposons notre propre système complet ou étudions les possibilités d'intégration personnalisée.
              </p>
              
              <h3>Système de réservation padel en ligne</h3>
              <p>
                Notre <strong>application mobile de réservation padel</strong> offre une expérience utilisateur optimale : visualisation des disponibilités en temps réel, paiement sécurisé, invitation de partenaires, historique des matchs, et accès direct aux terrains. Les joueurs adorent la simplicité et l'autonomie que cela leur procure.
              </p>
              
              <h3>Automatisation éclairage et accès terrain padel</h3>
              <p>
                L'<strong>automatisation de l'éclairage</strong> des terrains de padel représente une économie significative pour les clubs. Les lumières s'allument uniquement pendant les réservations effectives, évitant le gaspillage énergétique. Le <strong>système de contrôle d'accès</strong> par smartphone remplace les clés physiques, simplifiant la gestion et renforçant la sécurité.
              </p>
              
              <h3>Casiers connectés pour location matériel padel</h3>
              <p>
                Les <strong>casiers connectés VP Tech</strong> permettent la <strong>location autonome de raquettes et balles</strong>. Les joueurs réservent le matériel via l'application, le casier se déverrouille à leur arrivée, et le retour est automatiquement vérifié. Un système simple qui génère des revenus additionnels pour le club.
              </p>
              
              <h3>Tableau de bord et statistiques pour gestionnaires</h3>
              <p>
                Notre <strong>interface d'administration</strong> offre une vision complète de l'activité : taux d'occupation, revenus, profils des joueurs, horaires les plus demandés... Ces données permettent d'optimiser la gestion et de prendre des décisions éclairées pour développer le club.
              </p>
              
              <h3>Marketing IA pour clubs de padel</h3>
              <p>
                VP Tech inclut une <strong>solution marketing pilotée par intelligence artificielle</strong> qui aide à attirer de nouveaux joueurs : campagnes ciblées, promotions automatiques sur les créneaux peu remplis, fidélisation des membres... Un outil puissant pour développer votre communauté de joueurs.
              </p>
              
              <h3>Installation rapide et support 7j/7</h3>
              <p>
                L'installation de VP Tech prend seulement 1 à 2 jours. Notre équipe technique s'occupe de tout : configuration du matériel, paramétrage du logiciel, formation des administrateurs. Le <strong>support technique 7j/7</strong> garantit une assistance rapide en cas de besoin, avec la possibilité de résoudre la plupart des problèmes à distance.
              </p>
              
              <p>
                Rejoignez les clubs innovants qui ont déjà adopté VP Tech et constaté une augmentation moyenne de 30% de leurs revenus. Notre solution d'<strong>automatisation de padel</strong> représente l'avenir de ce sport en pleine expansion en France.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "VP Tech - Solution d'automatisation padel",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "iOS, Android, Web",
          "description": "Logiciel de gestion et automatisation pour clubs de padel : réservation en ligne, accès autonome, éclairage intelligent, location matériel automatisée.",
          "offers": [
            {
              "@type": "Offer",
              "name": "Intégration App",
              "price": "0",
              "priceCurrency": "EUR",
              "description": "Intégration gratuite avec Neop et Spartime"
            },
            {
              "@type": "Offer",
              "name": "VP Tech Complet",
              "description": "Solution tout-en-un avec installation et formation - Sur devis"
            }
          ],
          "provider": {
            "@type": "Organization",
            "name": "Village Padel",
            "url": "https://villagepadel.fr",
            "telephone": "+33749157401",
            "email": "contact@villagepadel.fr"
          },
          "featureList": [
            "Réservation en ligne",
            "Accès autonome par smartphone",
            "Éclairage intelligent automatisé",
            "Casiers connectés pour location matériel",
            "Tableau de bord administrateur",
            "Marketing IA intégré",
            "Support technique 7j/7"
          ]
        })}
      </script>
    </div>
  );
};

// Helper components
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default VPTechPage;