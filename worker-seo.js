// Cloudflare Worker pour meta tags dynamiques + injection body SEO
// villagepadel.fr – Version SEO Body Boost

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

// ─── DATA: clubs avec meta + body content ───────────────────────────────

const clubs = {
  '/tc-muret': {
    hasCustomSeo: true,
    meta: `
    <title>Padel TC Muret | Terrain pas cher près de Toulouse | 8€/pers | Haute-Garonne (31)</title>
    <meta name="description" content="Réservez votre terrain de padel au TC Muret, Complexe Nelson Paillou (31). À partir de 8€/personne, location matériel 4€. Le padel le moins cher au sud de Toulouse ! Proche Portet-sur-Garonne, Seysses, Roques. Sans licence, réservation en ligne instantanée.">
    <meta name="keywords" content="padel Muret, padel Toulouse sud, padel Haute-Garonne, padel 31, padel Portet-sur-Garonne, padel Seysses, padel Roques, padel Villeneuve-Tolosane, padel Pins-Justaret, padel Labarthe-sur-Lèze, padel Eaunes, padel Frouzins, padel pas cher Toulouse, padel extérieur Toulouse, terrain padel Muret, réservation padel Muret, TC Muret padel, padel sans licence Muret, padel pas cher 31, jouer padel Muret, padel Nelson Paillou, padel proche Toulouse, où jouer padel Haute-Garonne, Village Padel Muret, padel Occitanie">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://villagepadel.fr/tc-muret">
    <meta name="geo.region" content="FR-31">
    <meta name="geo.placename" content="Muret">
    <meta name="geo.position" content="43.4614;1.3273">
    <meta name="ICBM" content="43.4614, 1.3273">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Village Padel - TC Muret",
      "description": "Terrain de padel au Complexe Nelson Paillou à Muret. À partir de 8€/personne, location matériel disponible. Réservation en ligne sans licence.",
      "url": "https://villagepadel.fr/tc-muret",
      "image": "https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FPHOTO-2025-12-23-18-27-50.jpg?alt=media&token=b3f0813c-8d56-40f2-b710-7a6dcd9b5cfc",
      "address": {"@type": "PostalAddress", "streetAddress": "90 Avenue Bernard IV, Complexe Nelson Paillou", "addressLocality": "Muret", "postalCode": "31600", "addressRegion": "Occitanie", "addressCountry": "FR"},
      "geo": {"@type": "GeoCoordinates", "latitude": 43.4614, "longitude": 1.3273},
      "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "22:00"},
      "priceRange": "À partir de 8€/personne",
      "currenciesAccepted": "EUR",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Location matériel", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Terrain extérieur", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Réservation en ligne", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Parking gratuit", "value": true}
      ],
      "sport": "Padel",
      "isAccessibleForFree": false,
      "publicAccess": true,
      "areaServed": [
        {"@type": "City", "name": "Muret"},
        {"@type": "City", "name": "Toulouse"},
        {"@type": "City", "name": "Portet-sur-Garonne"},
        {"@type": "City", "name": "Seysses"},
        {"@type": "City", "name": "Roques"},
        {"@type": "City", "name": "Villeneuve-Tolosane"},
        {"@type": "City", "name": "Pins-Justaret"},
        {"@type": "City", "name": "Labarthe-sur-Lèze"},
        {"@type": "City", "name": "Eaunes"},
        {"@type": "City", "name": "Frouzins"}
      ]
    }
    </script>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Village Padel">
    <meta property="og:title" content="Padel TC Muret - Terrain pas cher au sud de Toulouse | 8€/pers">
    <meta property="og:description" content="TC Muret - Terrain de padel au Complexe Nelson Paillou. À partir de 8€/personne ! Proche Toulouse, Portet-sur-Garonne, Seysses. Réservation en ligne sans licence.">
    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FPHOTO-2025-12-23-18-27-50.jpg?alt=media&token=b3f0813c-8d56-40f2-b710-7a6dcd9b5cfc">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/tc-muret">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Padel TC Muret | 8€/pers | Le moins cher au sud de Toulouse">
    <meta name="twitter:description" content="À partir de 8€/personne ! Complexe Nelson Paillou, Muret (31). Réservation en ligne sans licence.">
    <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FPHOTO-2025-12-23-18-27-50.jpg?alt=media&token=b3f0813c-8d56-40f2-b710-7a6dcd9b5cfc">`,
    body: `<h1>TC MURET - Terrain de Padel à Muret (31)</h1>
    <p>Terrain de padel au Complexe Nelson Paillou, Haute-Garonne. Le padel le moins cher au sud de Toulouse !</p>
    <h2>Tarifs</h2><p>À partir de 8€ par personne. Location matériel : 4€ (raquettes + balles).</p>
    <h2>Caractéristiques</h2>
    <ul><li>Complexe sportif de qualité - Complexe Nelson Paillou</li><li>Réservation en ligne via l'application Village Padel (iOS et Android)</li><li>Location de matériel : raquettes et balles pour 4€</li><li>Parking gratuit sur place</li></ul>
    <h2>Pourquoi choisir TC Muret ?</h2>
    <ul><li>Emplacement idéal : 20 min au sud de Toulouse</li><li>Tarif compétitif : à partir de 8€/personne</li><li>Réservation facile en quelques clics</li><li>Matériel disponible sur place</li></ul>
    <h2>Localisation</h2><p>Adresse : Complexe Nelson Paillou, 90 Avenue Bernard IV, 31600 Muret. Proche Portet-sur-Garonne, Seysses, Roques, Villeneuve-Tolosane.</p>
    <h2>Comment réserver ?</h2>
    <ol><li>Téléchargez l'app Village Padel</li><li>Sélectionnez TC MURET</li><li>Choisissez votre créneau</li><li>Ajoutez le matériel si besoin (+4€)</li><li>Payez en ligne</li></ol>
    <p><a href="https://apps.apple.com/fr/app/village-padel/id6504023084">Télécharger sur App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr">Télécharger sur Google Play</a></p>`
  },

  '/lastours': {
    hasCustomSeo: true,
    meta: `
    <title>Padel Château de Lastours | Terrain près de Narbonne, Béziers | Matériel OFFERT | Aude (11)</title>
    <meta name="description" content="Réservez votre terrain de padel au Château de Lastours à Portel-des-Corbières (11). Cadre exceptionnel, matériel OFFERT, éclairage nocturne. 24€/1h30 pour 4 joueurs. Proche Narbonne (15min), Lézignan-Corbières, Béziers, Gruissan. Sans licence, réservation en ligne instantanée.">
    <meta name="keywords" content="padel Narbonne, padel Aude, padel Béziers, padel Lézignan-Corbières, padel Gruissan, padel Sigean, padel Port-la-Nouvelle, padel Portel-des-Corbières, padel Corbières, padel château, padel extérieur Narbonne, terrain padel Aude, réservation padel Narbonne, padel pas cher Narbonne, padel sans licence Narbonne, padel 11, padel extérieur Aude, terrain padel Corbières, padel nocturne Narbonne, padel matériel gratuit, jouer padel Narbonne, Village Padel Lastours, où jouer padel Aude, padel proche Narbonne, padel Occitanie">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://villagepadel.fr/lastours">
    <meta name="geo.region" content="FR-11">
    <meta name="geo.placename" content="Portel-des-Corbières">
    <meta name="geo.position" content="43.0467;2.9003">
    <meta name="ICBM" content="43.0467, 2.9003">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Village Padel - Château de Lastours",
      "description": "Terrain de padel dans un cadre exceptionnel au Château de Lastours. Matériel OFFERT, éclairage nocturne, réservation en ligne sans licence.",
      "url": "https://villagepadel.fr/lastours",
      "image": "https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FLastours.jpg?alt=media&token=f0494ccb-96f1-47b6-87a0-aa0a2e06db9a",
      "address": {"@type": "PostalAddress", "streetAddress": "Château de Lastours", "addressLocality": "Portel-des-Corbières", "postalCode": "11490", "addressRegion": "Occitanie", "addressCountry": "FR"},
      "geo": {"@type": "GeoCoordinates", "latitude": 43.0467, "longitude": 2.9003},
      "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "21:00"},
      "priceRange": "24€/1h30",
      "currenciesAccepted": "EUR",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Matériel OFFERT", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Éclairage nocturne", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Terrain extérieur", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Réservation en ligne", "value": true}
      ],
      "sport": "Padel",
      "isAccessibleForFree": false,
      "publicAccess": true,
      "areaServed": [
        {"@type": "City", "name": "Narbonne"},
        {"@type": "City", "name": "Lézignan-Corbières"},
        {"@type": "City", "name": "Béziers"},
        {"@type": "City", "name": "Gruissan"},
        {"@type": "City", "name": "Sigean"},
        {"@type": "City", "name": "Port-la-Nouvelle"},
        {"@type": "City", "name": "Portel-des-Corbières"}
      ]
    }
    </script>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Village Padel">
    <meta property="og:title" content="Padel au Château de Lastours - Cadre d'Exception près de Narbonne | Aude">
    <meta property="og:description" content="Terrain de padel exceptionnel ! 24€/1h30 + matériel OFFERT. Proche Narbonne, Béziers, Lézignan-Corbières. Réservation en ligne sans licence.">
    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FLastours.jpg?alt=media&token=f0494ccb-96f1-47b6-87a0-aa0a2e06db9a">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/lastours">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Padel Château de Lastours | Matériel OFFERT | près de Narbonne">
    <meta name="twitter:description" content="24€/1h30, matériel OFFERT, cadre exceptionnel. Proche Narbonne, Béziers, Lézignan-Corbières. Réservez en ligne !">
    <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FLastours.jpg?alt=media&token=f0494ccb-96f1-47b6-87a0-aa0a2e06db9a">`,
    body: `<h1>Padel au Château de Lastours - Terrain près de Narbonne (11)</h1>
    <p>Terrain de padel dans un cadre exceptionnel au Château de Lastours, Portel-des-Corbières. Matériel OFFERT, éclairage nocturne. 24€/1h30 pour 4 joueurs.</p>
    <h2>Tarifs</h2><p>24€ pour 1h30 (4 joueurs). Matériel OFFERT (raquettes et balles incluses).</p>
    <h2>Caractéristiques</h2>
    <ul><li>Cadre exceptionnel au Château de Lastours</li><li>Matériel OFFERT sur place</li><li>Éclairage nocturne pour jouer en soirée</li><li>Terrain extérieur</li><li>Réservation en ligne sans licence</li></ul>
    <h2>Localisation</h2><p>Château de Lastours, Portel-des-Corbières, 11490. Proche Narbonne (15min), Lézignan-Corbières, Béziers, Gruissan, Sigean.</p>
    <p><a href="https://apps.apple.com/fr/app/village-padel/id6504023084">Réserver sur App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr">Réserver sur Google Play</a></p>`
  },

  '/capvern': {
    hasCustomSeo: true,
    meta: `
    <title>CAP'PADEL CAPVERN - Terrain 100% Autonome | Hautes-Pyrénées (65)</title>
    <meta name="description" content="CAP'PADEL CAPVERN - Terrain de padel 100% autonome à Capvern (65), Hautes-Pyrénées. 6€/personne, matériel 4€. Proche Lannemezan, Bagnères-de-Bigorre, Tarbes. Réservez en ligne !">
    <meta name="keywords" content="padel Capvern, padel Hautes-Pyrénées, padel 65, padel Lannemezan, padel Bagnères-de-Bigorre, padel Tarbes, padel autonome, terrain padel Capvern, Cap Padel, Village Padel, réservation padel Capvern, padel pas cher 65">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://villagepadel.fr/capvern">
    <meta name="geo.region" content="FR-65">
    <meta name="geo.placename" content="Capvern">
    <meta name="geo.position" content="43.0974;0.3294">
    <meta name="ICBM" content="43.0974, 0.3294">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Village Padel - CAP'PADEL CAPVERN",
      "description": "Terrain de padel 100% autonome à Capvern (65), Hautes-Pyrénées. 6€/personne, matériel 4€. Accès automatisé via smartphone.",
      "url": "https://villagepadel.fr/capvern",
      "image": "https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FCapvern.webp?alt=media&token=325155a7-6dd0-40c4-bb04-86d4ba7ea3f4",
      "address": {"@type": "PostalAddress", "addressLocality": "Capvern", "postalCode": "65130", "addressRegion": "Occitanie", "addressCountry": "FR"},
      "geo": {"@type": "GeoCoordinates", "latitude": 43.0974, "longitude": 0.3294},
      "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "22:00"},
      "priceRange": "6€/personne",
      "currenciesAccepted": "EUR",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Accès 100% autonome", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Location matériel 4€", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Terrain outdoor", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Réservation en ligne", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Parking disponible", "value": true}
      ],
      "sport": "Padel",
      "isAccessibleForFree": false,
      "publicAccess": true,
      "areaServed": [
        {"@type": "City", "name": "Capvern"},
        {"@type": "City", "name": "Lannemezan"},
        {"@type": "City", "name": "Bagnères-de-Bigorre"},
        {"@type": "City", "name": "Tarbes"},
        {"@type": "City", "name": "Saint-Laurent-de-Neste"}
      ]
    }
    </script>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Village Padel">
    <meta property="og:title" content="CAP'PADEL CAPVERN - Terrain 100% Autonome | Hautes-Pyrénées">
    <meta property="og:description" content="Terrain de padel 100% autonome à Capvern (65). 6€/personne, matériel 4€. Réservez en ligne !">
    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FCapvern.webp?alt=media&token=325155a7-6dd0-40c4-bb04-86d4ba7ea3f4">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/capvern">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="CAP'PADEL CAPVERN - Terrain 100% Autonome | Hautes-Pyrénées">
    <meta name="twitter:description" content="Terrain de padel 100% autonome à Capvern (65). 6€/personne, matériel 4€. Réservez en ligne !">
    <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FCapvern.webp?alt=media&token=325155a7-6dd0-40c4-bb04-86d4ba7ea3f4">`,
    body: `<h1>CAP'PADEL CAPVERN - Terrain de Padel 100% Autonome (65)</h1>
    <p>Terrain de padel 100% autonome à Capvern, Hautes-Pyrénées. 6€/personne, matériel 4€. Accès automatisé via smartphone.</p>
    <h2>Tarifs</h2><p>6€ par personne. Location matériel : 4€ (raquettes + balles).</p>
    <h2>Caractéristiques</h2>
    <ul><li>Terrain 100% autonome - accès via smartphone</li><li>Outdoor, au cœur des Hautes-Pyrénées</li><li>Location de matériel : 4€</li><li>Parking disponible</li></ul>
    <h2>Localisation</h2><p>Capvern, 65130 Hautes-Pyrénées. Proche Lannemezan, Bagnères-de-Bigorre, Tarbes.</p>
    <p><a href="https://apps.apple.com/fr/app/village-padel/id6504023084">Réserver sur App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr">Réserver sur Google Play</a></p>`
  },

  '/grisolles': {
    hasCustomSeo: true,
    meta: `
    <title>Padel de Grisolles - Terrain Outdoor Premium | Tarn-et-Garonne (82) | Village Padel</title>
    <meta name="description" content="Terrain de padel outdoor premium à Grisolles (82), Tarn-et-Garonne. À partir de 20€/h, ouvert 7j/7 de 8h à 22h. Accès automatisé, communauté WhatsApp active. Proche Montauban, Toulouse. Réservation en ligne sans licence.">
    <meta name="keywords" content="padel Grisolles, padel Tarn-et-Garonne, padel 82, padel Montauban, padel Toulouse nord, terrain padel Grisolles, padel outdoor, réservation padel Grisolles, padel pas cher 82, Village Padel Grisolles, padel entre Montauban et Toulouse">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://villagepadel.fr/grisolles">
    <meta name="geo.region" content="FR-82">
    <meta name="geo.placename" content="Grisolles">
    <meta name="geo.position" content="43.8295;1.2962">
    <meta name="ICBM" content="43.8295, 1.2962">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Village Padel - Terrain de Padel de Grisolles",
      "description": "Terrain de padel outdoor premium à Grisolles (82). 20€/h, ouvert 7j/7 de 8h à 22h. Accès automatisé, communauté WhatsApp active.",
      "url": "https://villagepadel.fr/grisolles",
      "image": "https://res.cloudinary.com/damfvriyn/image/upload/v1736010730/IMG_2452_s9pdqn_2e82be.jpg",
      "address": {"@type": "PostalAddress", "addressLocality": "Grisolles", "postalCode": "82170", "addressRegion": "Occitanie", "addressCountry": "FR"},
      "geo": {"@type": "GeoCoordinates", "latitude": 43.8295, "longitude": 1.2962},
      "telephone": "+33749157401",
      "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "22:00"},
      "priceRange": "À partir de 20€/h",
      "currenciesAccepted": "EUR",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Terrain outdoor premium", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Accès automatisé", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Réservation en ligne", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Communauté WhatsApp", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Parking gratuit", "value": true}
      ],
      "sport": "Padel",
      "isAccessibleForFree": false,
      "publicAccess": true,
      "areaServed": [
        {"@type": "City", "name": "Grisolles"},
        {"@type": "City", "name": "Montauban"},
        {"@type": "City", "name": "Toulouse"},
        {"@type": "City", "name": "Verdun-sur-Garonne"},
        {"@type": "City", "name": "Castelnau-d'Estrétefonds"},
        {"@type": "City", "name": "Pompignan"}
      ]
    }
    </script>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Village Padel">
    <meta property="og:title" content="Padel de Grisolles - Terrain Outdoor Premium | Tarn-et-Garonne">
    <meta property="og:description" content="Terrain de padel outdoor premium à Grisolles (82). 20€/h, ouvert 7j/7 de 8h à 22h. Réservation en ligne !">
    <meta property="og:image" content="https://res.cloudinary.com/damfvriyn/image/upload/v1736010730/IMG_2452_s9pdqn_2e82be.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/grisolles">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Padel de Grisolles | Terrain Outdoor Premium | Tarn-et-Garonne">
    <meta name="twitter:description" content="Terrain de padel outdoor premium à Grisolles (82). 20€/h, 7j/7 de 8h à 22h. Réservez en ligne !">
    <meta name="twitter:image" content="https://res.cloudinary.com/damfvriyn/image/upload/v1736010730/IMG_2452_s9pdqn_2e82be.jpg">`,
    body: `<h1>Padel de Grisolles - Terrain Outdoor Premium (82)</h1>
    <p>Terrain de padel outdoor premium à Grisolles, Tarn-et-Garonne. Ouvert 7j/7 de 8h à 22h, accès automatisé. À partir de 20€/h.</p>
    <h2>Tarifs</h2><p>À partir de 20€ par heure.</p>
    <h2>Caractéristiques</h2>
    <ul><li>Terrain outdoor premium - gazon synthétique dernière génération</li><li>Ouvert 7j/7 de 8h à 22h</li><li>Accès automatisé via l'app Village Padel</li><li>Communauté WhatsApp active</li><li>Parking gratuit</li></ul>
    <h2>Localisation</h2><p>Grisolles, 82170 Tarn-et-Garonne. Entre Montauban et Toulouse.</p>
    <p><a href="https://apps.apple.com/fr/app/village-padel/id6504023084">Réserver sur App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr">Réserver sur Google Play</a></p>`
  },

  '/campsas': {
    hasCustomSeo: true,
    meta: `
    <title>Padel à Campsas - Terrain 100% Autonome | Tarn-et-Garonne (82) | Village Padel</title>
    <meta name="description" content="Terrain de padel 100% autonome à Campsas (82), près de Montauban. Accès et matériel automatisés, ouvert 7j/7 de 9h à 22h. 24€ pour 1h30. Tennis Padel Avenir Campsanais. Réservation en ligne sans licence.">
    <meta name="keywords" content="padel Campsas, padel autonome, padel Montauban, padel 82, padel Tarn-et-Garonne, Tennis Padel Avenir Campsanais, réservation padel Campsas, padel pas cher Montauban, terrain padel autonome 82, Village Padel Campsas">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://villagepadel.fr/campsas">
    <meta name="geo.region" content="FR-82">
    <meta name="geo.placename" content="Campsas">
    <meta name="geo.position" content="43.8591;1.3734">
    <meta name="ICBM" content="43.8591, 1.3734">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Village Padel - Tennis Padel Avenir Campsanais",
      "description": "Terrain de padel 100% autonome à Campsas (82). Accès et matériel automatisés via smartphone, 24€ pour 1h30. Ouvert 7j/7 de 9h à 22h.",
      "url": "https://villagepadel.fr/campsas",
      "image": "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg",
      "address": {"@type": "PostalAddress", "streetAddress": "Stade Christian Thédié, Route d'Auch", "addressLocality": "Campsas", "postalCode": "82370", "addressRegion": "Occitanie", "addressCountry": "FR"},
      "geo": {"@type": "GeoCoordinates", "latitude": 43.8591, "longitude": 1.3734},
      "telephone": "+33749157401",
      "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "09:00", "closes": "22:00"},
      "priceRange": "24€/1h30",
      "currenciesAccepted": "EUR",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Accès 100% autonome", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Casier matériel connecté", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Éclairage soirée", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Réservation en ligne", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Parking gratuit", "value": true}
      ],
      "sport": "Padel",
      "isAccessibleForFree": false,
      "publicAccess": true,
      "areaServed": [
        {"@type": "City", "name": "Campsas"},
        {"@type": "City", "name": "Montauban"},
        {"@type": "City", "name": "Grisolles"},
        {"@type": "City", "name": "Castelsarrasin"},
        {"@type": "City", "name": "Montech"}
      ]
    }
    </script>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Village Padel">
    <meta property="og:title" content="Padel à Campsas - Terrain 100% Autonome | Tarn-et-Garonne">
    <meta property="og:description" content="Terrain de padel 100% autonome à Campsas (82). 24€/1h30, accès automatisé, ouvert 7j/7. Réservation en ligne !">
    <meta property="og:image" content="https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/campsas">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Padel à Campsas | Terrain 100% Autonome | près de Montauban">
    <meta name="twitter:description" content="Terrain de padel 100% autonome à Campsas (82). 24€/1h30, accès automatisé. Réservez en ligne !">
    <meta name="twitter:image" content="https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg">`,
    body: `<h1>Padel à Campsas - Terrain 100% Autonome (82)</h1>
    <p>Terrain de padel 100% autonome à Campsas, Tarn-et-Garonne. Tennis Padel Avenir Campsanais. Accès et matériel automatisés, 24€ pour 1h30.</p>
    <h2>Tarifs</h2><p>24€ pour 1h30. Matériel disponible via l'application.</p>
    <h2>Caractéristiques</h2>
    <ul><li>Terrain 100% autonome - accès via smartphone</li><li>Outdoor, 7j/7 de 9h à 22h</li><li>Matériel automatisé (raquettes et balles dans casier connecté)</li><li>Éclairage pour jouer en soirée</li><li>Parking gratuit</li></ul>
    <h2>Localisation</h2><p>Stade Christian Thédié, Route d'Auch, 82370 Campsas. À 15 min de Montauban.</p>
    <p><a href="https://apps.apple.com/fr/app/village-padel/id6504023084">Réserver sur App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr">Réserver sur Google Play</a></p>`
  },

  '/baraqueville': {
    hasCustomSeo: true,
    meta: `
    <title>Padel à Baraqueville - Terrain 100% Autonome | Aveyron (12) | Village Padel</title>
    <meta name="description" content="Terrain de padel 100% autonome à Baraqueville (12), Aveyron. 20€ jour / 24€ soirée pour 1h30. Casier matériel 4€. Tennis Padel Club de Baraqueville, club FFT. Proche Rodez. Réservation en ligne sans licence.">
    <meta name="keywords" content="padel Baraqueville, padel Aveyron, padel 12, padel Rodez, padel Villefranche-de-Rouergue, Tennis Padel Club Baraqueville, réservation padel Aveyron, padel autonome 12, terrain padel Aveyron, Village Padel Baraqueville, padel pas cher Aveyron">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://villagepadel.fr/baraqueville">
    <meta name="geo.region" content="FR-12">
    <meta name="geo.placename" content="Baraqueville">
    <meta name="geo.position" content="44.2752;2.4350">
    <meta name="ICBM" content="44.2752, 2.4350">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Village Padel - Tennis Padel Club de Baraqueville",
      "description": "Terrain de padel 100% autonome à Baraqueville (12), Aveyron. Club FFT, casier matériel 4€, 20€ jour / 24€ soirée. Accès automatisé via smartphone.",
      "url": "https://villagepadel.fr/baraqueville",
      "image": "https://villagepadel.fr/images/baraq1.jpg",
      "address": {"@type": "PostalAddress", "streetAddress": "Rue de la Vall. du Viaur", "addressLocality": "Baraqueville", "postalCode": "12160", "addressRegion": "Occitanie", "addressCountry": "FR"},
      "geo": {"@type": "GeoCoordinates", "latitude": 44.2752, "longitude": 2.4350},
      "telephone": "+33684197198",
      "email": "tcbaraqueville@fft.fr",
      "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "22:00"},
      "priceRange": "20€ jour / 24€ soirée",
      "currenciesAccepted": "EUR",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Accès 100% autonome", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Casier matériel sécurisé 4€", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Éclairage LED", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Réservation en ligne", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Parking gratuit", "value": true}
      ],
      "sport": "Padel",
      "isAccessibleForFree": false,
      "publicAccess": true,
      "parentOrganization": {"@type": "SportsOrganization", "name": "Tennis Padel Club de Baraqueville", "memberOf": "Fédération Française de Tennis"},
      "areaServed": [
        {"@type": "City", "name": "Baraqueville"},
        {"@type": "City", "name": "Rodez"},
        {"@type": "City", "name": "Villefranche-de-Rouergue"},
        {"@type": "City", "name": "Naucelle"},
        {"@type": "City", "name": "Rieupeyroux"}
      ]
    }
    </script>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Village Padel">
    <meta property="og:title" content="Padel à Baraqueville - Terrain 100% Autonome | Aveyron">
    <meta property="og:description" content="Terrain de padel 100% autonome à Baraqueville (12). 20€ jour / 24€ soirée, casier matériel 4€. Réservation en ligne !">
    <meta property="og:image" content="https://villagepadel.fr/images/baraq1.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/baraqueville">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Padel à Baraqueville | Terrain Autonome | Aveyron (12)">
    <meta name="twitter:description" content="Terrain de padel 100% autonome à Baraqueville (12). 20€ jour / 24€ soirée. Réservez en ligne !">
    <meta name="twitter:image" content="https://villagepadel.fr/images/baraq1.jpg">`,
    body: `<h1>Padel à Baraqueville - Terrain 100% Autonome en Aveyron (12)</h1>
    <p>Terrain de padel 100% autonome du Tennis Padel Club de Baraqueville, Aveyron. Club FFT avec plus de 80 licenciés.</p>
    <h2>Tarifs</h2><p>Journée : 20€/1h30. Soirée : 24€/1h30. Casier matériel : 4€ (raquettes + balles).</p>
    <h2>Caractéristiques</h2>
    <ul><li>Terrain 100% autonome - accès via smartphone</li><li>Outdoor avec éclairage LED pour les soirées</li><li>Casier matériel sécurisé automatisé</li><li>Club FFT historique, +80 licenciés</li><li>Parking gratuit</li></ul>
    <h2>Localisation</h2><p>Rue de la Vall. du Viaur, 12160 Baraqueville. Proche Rodez, Villefranche-de-Rouergue.</p>
    <p><a href="https://apps.apple.com/fr/app/village-padel/id6504023084">Réserver sur App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr">Réserver sur Google Play</a></p>`
  },

  '/port-la-nouvelle': {
    hasCustomSeo: true,
    meta: `
    <title>Padel à Port-La Nouvelle - 2 Terrains 100% Autonomes | Aude (11) | Village Padel</title>
    <meta name="description" content="2 terrains de padel 100% autonomes à Port-La Nouvelle (11), Aude. 24€ pour 1h30, matériel disponible. TC Nouvellois. Proche Narbonne, Sigean, Leucate. Réservation en ligne sans licence.">
    <meta name="keywords" content="padel Port-La Nouvelle, padel Aude, padel 11, padel Narbonne, padel Sigean, padel Leucate, TC Nouvellois, réservation padel Port-la-Nouvelle, terrain padel Aude, padel autonome Aude, Village Padel, padel Méditerranée">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://villagepadel.fr/port-la-nouvelle">
    <meta name="geo.region" content="FR-11">
    <meta name="geo.placename" content="Port-La Nouvelle">
    <meta name="geo.position" content="43.0146;3.0510">
    <meta name="ICBM" content="43.0146, 3.0510">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Village Padel - TC Nouvellois Port-La Nouvelle",
      "description": "2 terrains de padel 100% autonomes à Port-La Nouvelle (11), Aude. 24€ pour 1h30, matériel disponible via l'application. Accès automatisé.",
      "url": "https://villagepadel.fr/port-la-nouvelle",
      "image": "https://villagepadel.fr/images/port2.png",
      "address": {"@type": "PostalAddress", "addressLocality": "Port-La Nouvelle", "postalCode": "11210", "addressRegion": "Occitanie", "addressCountry": "FR"},
      "geo": {"@type": "GeoCoordinates", "latitude": 43.0146, "longitude": 3.0510},
      "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "22:00"},
      "priceRange": "24€/1h30",
      "currenciesAccepted": "EUR",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "2 terrains de padel", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Accès 100% autonome", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Matériel via application", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Réservation en ligne", "value": true}
      ],
      "sport": "Padel",
      "isAccessibleForFree": false,
      "publicAccess": true,
      "parentOrganization": {"@type": "SportsOrganization", "name": "TC Nouvellois"},
      "areaServed": [
        {"@type": "City", "name": "Port-La Nouvelle"},
        {"@type": "City", "name": "Narbonne"},
        {"@type": "City", "name": "Sigean"},
        {"@type": "City", "name": "Leucate"},
        {"@type": "City", "name": "Gruissan"},
        {"@type": "City", "name": "Perpignan"}
      ]
    }
    </script>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Village Padel">
    <meta property="og:title" content="Padel à Port-La Nouvelle - 2 Terrains Autonomes | Aude">
    <meta property="og:description" content="2 terrains de padel 100% autonomes à Port-La Nouvelle (11). 24€/1h30. Réservation en ligne !">
    <meta property="og:image" content="https://villagepadel.fr/images/port2.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/port-la-nouvelle">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Padel Port-La Nouvelle | 2 Terrains Autonomes | Aude (11)">
    <meta name="twitter:description" content="2 terrains de padel 100% autonomes à Port-La Nouvelle (11). 24€/1h30. Réservez en ligne !">
    <meta name="twitter:image" content="https://villagepadel.fr/images/port2.png">`,
    body: `<h1>Padel à Port-La Nouvelle - 2 Terrains 100% Autonomes (11)</h1>
    <p>2 terrains de padel 100% autonomes au TC Nouvellois, Port-La Nouvelle, Aude. 24€ pour 1h30, matériel disponible.</p>
    <h2>Tarifs</h2><p>24€ pour 1h30. Matériel disponible via l'application.</p>
    <h2>Caractéristiques</h2>
    <ul><li>2 terrains de padel modernes</li><li>100% autonome - accès via smartphone</li><li>Matériel disponible via l'app</li><li>Proche de la Méditerranée</li><li>Stationnement à proximité</li></ul>
    <h2>Localisation</h2><p>Port-La Nouvelle, 11210 Aude. Proche Narbonne, Sigean, Leucate.</p>
    <p><a href="https://apps.apple.com/fr/app/village-padel/id6504023084">Réserver sur App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr">Réserver sur Google Play</a></p>`
  },

  '/chis': {
    hasCustomSeo: true,
    meta: `
    <title>Padel à Chis - Tennis Club Pyrénées Bigorre | Hautes-Pyrénées (65) | Village Padel</title>
    <meta name="description" content="Terrain de padel extérieur à Chis (65), Hautes-Pyrénées. 20€ jour / 24€ soirée pour 1h30. Club house, vestiaires, bar, location raquettes 2€. Tennis Club Pyrénées Bigorre. Proche Tarbes, Lourdes. Réservation en ligne.">
    <meta name="keywords" content="padel Chis, padel Hautes-Pyrénées, padel 65, padel Tarbes, padel Lourdes, Tennis Club Pyrénées Bigorre, réservation padel Chis, terrain padel 65, padel pas cher Tarbes, Village Padel Chis, padel club house">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://villagepadel.fr/chis">
    <meta name="geo.region" content="FR-65">
    <meta name="geo.placename" content="Chis">
    <meta name="geo.position" content="43.2937;0.1214">
    <meta name="ICBM" content="43.2937, 0.1214">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SportsActivityLocation",
      "name": "Village Padel - Tennis Club Pyrénées Bigorre (Chis)",
      "description": "Terrain de padel extérieur à Chis (65). Club house, vestiaires, bar. 20€ jour / 24€ soirée, location raquettes 2€. Proche Tarbes et Lourdes.",
      "url": "https://villagepadel.fr/chis",
      "image": "https://villagepadel.fr/images/bigorre.jpg",
      "address": {"@type": "PostalAddress", "addressLocality": "Chis", "postalCode": "65800", "addressRegion": "Occitanie", "addressCountry": "FR"},
      "geo": {"@type": "GeoCoordinates", "latitude": 43.2937, "longitude": 0.1214},
      "openingHoursSpecification": {"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "08:00", "closes": "22:00"},
      "priceRange": "20€ jour / 24€ soirée",
      "currenciesAccepted": "EUR",
      "amenityFeature": [
        {"@type": "LocationFeatureSpecification", "name": "Terrain extérieur", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Club house avec bar", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Vestiaires avec douches", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Location raquettes 2€", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Réservation en ligne", "value": true},
        {"@type": "LocationFeatureSpecification", "name": "Parking gratuit", "value": true}
      ],
      "sport": "Padel",
      "isAccessibleForFree": false,
      "publicAccess": true,
      "parentOrganization": {"@type": "SportsOrganization", "name": "Tennis Club Pyrénées Bigorre"},
      "areaServed": [
        {"@type": "City", "name": "Chis"},
        {"@type": "City", "name": "Tarbes"},
        {"@type": "City", "name": "Lourdes"},
        {"@type": "City", "name": "Bagnères-de-Bigorre"},
        {"@type": "City", "name": "Aureilhan"},
        {"@type": "City", "name": "Séméac"}
      ]
    }
    </script>
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Village Padel">
    <meta property="og:title" content="Padel à Chis - Tennis Club Pyrénées Bigorre | Hautes-Pyrénées">
    <meta property="og:description" content="Terrain de padel extérieur à Chis (65). 20€ jour / 24€ soirée. Club house, vestiaires, bar. Réservez en ligne !">
    <meta property="og:image" content="https://villagepadel.fr/images/bigorre.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/chis">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Padel à Chis | Tennis Club Pyrénées Bigorre | Hautes-Pyrénées">
    <meta name="twitter:description" content="Terrain de padel à Chis (65). 20€ jour / 24€ soirée. Club house, bar, vestiaires. Réservez en ligne !">
    <meta name="twitter:image" content="https://villagepadel.fr/images/bigorre.jpg">`,
    body: `<h1>Padel à Chis - Tennis Club Pyrénées Bigorre (65)</h1>
    <p>Terrain de padel extérieur au Tennis Club Pyrénées Bigorre, Chis, Hautes-Pyrénées. Club house, vestiaires, bar et matériel sur place.</p>
    <h2>Tarifs</h2><p>Journée : 20€/1h30. Soirée : 24€/1h30. Location raquettes : 2€ pièce. Balles neuves en vente.</p>
    <h2>Services</h2>
    <ul><li>Terrain de padel extérieur</li><li>Club house avec bar</li><li>Vestiaires équipés avec douches</li><li>Location raquettes à 2€</li><li>Vente de balles neuves</li><li>Parking gratuit</li></ul>
    <h2>Le club</h2><p>100 membres, ambiance familiale. Multi-sports : padel, tennis, beach tennis, pétanque.</p>
    <h2>Localisation</h2><p>Chis, 65800 Hautes-Pyrénées. Proche Tarbes et Lourdes.</p>
    <p><a href="https://apps.apple.com/fr/app/village-padel/id6504023084">Réserver sur App Store</a> | <a href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr">Réserver sur Google Play</a></p>`
  },

  '/vp-tech': {
    hasCustomSeo: true,
    meta: `
    <title>Automatisation Terrain Padel | Padel Autonome & Application Réservation | VP Tech</title>
    <meta name="description" content="VP Tech : solution d'automatisation terrain de padel et padel autonome. Application de réservation padel en ligne, accès autonome par smartphone, éclairage intelligent. L'app padel tout-en-un pour clubs et joueurs.">
    <meta name="keywords" content="automatisation padel, padel autonome, application réservation padel, terrain padel autonome, réserver padel en ligne, app padel, logiciel gestion padel, réservation padel en ligne, accès automatique padel, système réservation padel, gestion club padel, padel automatisé, VP Tech, Village Padel, logiciel club tennis padel, solution digitale padel, padel connecté, casier matériel padel, éclairage automatique padel, club padel sans personnel, padel 24h/24">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://villagepadel.fr/vp-tech">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Village Padel">
    <meta property="og:title" content="VP Tech - Automatisation Padel, Padel Autonome & App Réservation">
    <meta property="og:description" content="Solution d'automatisation et de padel autonome : application de réservation padel en ligne, accès autonome smartphone, éclairage intelligent. Rendez votre terrain 100% autonome.">
    <meta property="og:image" content="https://villagepadel.fr/images/autonom_hero.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/vp-tech">
    <meta property="og:locale" content="fr_FR">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="VP Tech - Automatisation Padel & Application Réservation Padel">
    <meta name="twitter:description" content="Application de réservation padel et solution de padel autonome. Réservez, accédez et jouez sans personnel sur site.">
    <meta name="twitter:image" content="https://villagepadel.fr/images/autonom_hero.jpg">`,
    body: `<h1>VP Tech - Automatisation Terrain de Padel & Application de Réservation</h1>
    <p>VP Tech par Village Padel : la solution complète d'automatisation de terrains de padel. Application de réservation en ligne, accès autonome par smartphone, éclairage intelligent.</p>
    <h2>Solution de padel autonome</h2>
    <ul><li>Application de réservation padel en ligne (iOS et Android)</li><li>Accès autonome au terrain par smartphone</li><li>Éclairage automatique intelligent</li><li>Casier matériel connecté</li><li>Club padel sans personnel 24h/24</li></ul>
    <h2>Pour les clubs</h2><p>Rendez votre terrain 100% autonome. Gestion digitale complète, augmentation des revenus, zéro personnel nécessaire sur site.</p>
    <p><a href="https://villagepadel.fr/demande-devis">Demander un devis</a></p>`
  }
}

// ─── HANDLER ────────────────────────────────────────────────────────────

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname

  const response = await fetch(request)

  const contentType = response.headers.get('content-type')
  if (!contentType || !contentType.includes('text/html')) {
    return response
  }

  let html = await response.text()
  let metaTags = ''
  let bodyContent = ''
  let hasCustomSeo = false

  // Arena (pas de body, juste OG pour le partage)
  if (path.startsWith('/arena/')) {
    metaTags = `
    <meta property="og:type" content="website">
    <meta property="og:title" content="Rejoindre mon Match Village Padel">
    <meta property="og:description" content="Votre défi vous attend ! Rejoignez votre match et affrontez d'autres passionnés de padel.">
    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2Farena_good.jpeg?alt=media&token=2f6063bc-98f5-4522-a718-6ef320690854">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Match Village Padel - Arena">
    <meta property="og:url" content="${url.href}">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Rejoindre mon Match Village Padel">
    <meta name="twitter:description" content="Votre défi Arena vous attend ! Rejoignez votre match et affrontez d'autres passionnés de padel.">
    <meta name="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2Farena_good.jpeg?alt=media&token=2f6063bc-98f5-4522-a718-6ef320690854">`
  }
  // Club pages & vp-tech
  else {
    const clubKey = Object.keys(clubs).find(key => path.startsWith(key))
    if (clubKey) {
      const club = clubs[clubKey]
      hasCustomSeo = club.hasCustomSeo
      metaTags = club.meta
      bodyContent = club.body || ''
    } else {
      // Homepage & autres pages
      metaTags = `
    <meta property="og:type" content="website">
    <meta property="og:title" content="Village Padel - Application Réservation Padel & Padel Autonome">
    <meta property="og:description" content="Application de réservation padel en ligne et solution de padel autonome. Automatisation des terrains, accès connecté par smartphone. La meilleure expérience padel.">
    <meta property="og:image" content="https://res.cloudinary.com/damfvriyn/image/upload/v1736002528/cjeyubfsyydtcdwkkxaw.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:url" content="https://villagepadel.fr/">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Village Padel - Application Réservation Padel & Padel Autonome">
    <meta name="twitter:description" content="La solution padel complète : application de réservation, padel autonome, accès digital et automatisation tout-en-un.">
    <meta name="twitter:image" content="https://res.cloudinary.com/damfvriyn/image/upload/v1736002528/cjeyubfsyydtcdwkkxaw.jpg">`
    }
  }

  // CRITICAL FIX: Remove existing base tags BEFORE injecting custom ones
  if (hasCustomSeo) {
    html = html.replace(/<title>[^<]*<\/title>/, '')
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/, '')
    html = html.replace(/<meta\s+name="keywords"\s+content="[^"]*"\s*\/?\s*>/, '')
  }

  // Inject meta tags before </head>
  html = html.replace('</head>', `${metaTags}\n</head>`)

  // Inject body content inside #root (React will replace it on mount)
  if (bodyContent) {
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root"><div id="seo-content" style="position:absolute;left:-9999px" aria-hidden="true">${bodyContent}</div></div>`
    )
  }

  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  })
}
