# Guide : Ajouter un nouveau club padel sur villagepadel.fr

Ce guide permet à n'importe quelle IA ou développeur de créer une nouvelle page club.

---

## Structure du projet

```
villagepadel.fr/
├── src/
│   ├── App.tsx                    # Routes de l'application
│   ├── pages/
│   │   ├── NosPadels.tsx          # Liste des clubs + carte
│   │   ├── GrisollesPadel.tsx     # Exemple de page club
│   │   ├── CampsasPadel.tsx
│   │   ├── LastoursPadel.tsx
│   │   └── [NouveauClub]Padel.tsx # À créer
```

---

## Informations à collecter avant de commencer

1. **Nom du club** (ex: "Château de Lastours")
2. **Adresse complète** avec code postal
3. **Coordonnées GPS** (latitude, longitude) - Vérifier sur Google Maps !
4. **Prix** (ex: "24€ / 1h30")
5. **Nombre de terrains** (courts)
6. **URL de l'image** (Firebase Storage ou autre)
7. **Particularités** (matériel offert, cadre exceptionnel, etc.)
8. **Villes proches** pour le SEO local

---

## Étape 1 : Créer la page du club

Créer le fichier `src/pages/[NomClub]Padel.tsx`

### Template de base :

```tsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Sparkles, Smartphone, Trees, Download } from 'lucide-react';
import ImageCarousel from '../components/ImageCarousel';

const [NomClub]Images = [
  {
    url: "[URL_IMAGE]",
    alt: "Terrain de padel à [NOM_CLUB]"
  }
];

const [NomClub]Padel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Padel à [NOM_CLUB] - [ACCROCHE] | Village Padel</title>
        <meta
          name="description"
          content="Terrain de padel à [NOM_CLUB] ([DEPARTEMENT]), [REGION]. [PRIX] pour 1h30, [PARTICULARITES]. Réservez en ligne !"
        />
        <meta
          name="keywords"
          content="padel [VILLE], padel [DEPARTEMENT], padel [VILLE_PROCHE_1], padel [VILLE_PROCHE_2], Village Padel"
        />
        <meta property="og:title" content="Padel à [NOM_CLUB] | Village Padel" />
        <meta
          property="og:description"
          content="Terrain de padel à [NOM_CLUB]. [PRIX] pour 1h30. Réservez en ligne !"
        />
        <meta property="og:image" content="[URL_IMAGE]" />
        <meta property="og:url" content="https://villagepadel.fr/[SLUG]" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padel à [NOM_CLUB] | Village Padel" />
        <meta name="twitter:description" content="Terrain de padel à [NOM_CLUB]. [PRIX] pour 1h30." />
        <meta name="twitter:image" content="[URL_IMAGE]" />
        <link rel="canonical" href="https://villagepadel.fr/[SLUG]" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
            [NOM_CLUB]
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-4">
            [SLOGAN_ACCROCHE]
          </p>
          <div className="flex justify-center mb-10">
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
          <ImageCarousel images={[NomClub]Images} />
        </div>
      </div>

      {/* Quick Info Banner */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Terrains</span>
              <span className="text-gray-700">[NB_TERRAINS] terrain(s)</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Prix</span>
              <span className="text-gray-700">[PRIX] / 1h30</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Accès</span>
              <span className="text-gray-700">100% Autonome</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Matériel</span>
              <span className="text-gray-700">[MATERIEL_INFO]</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Adapter selon le club */}
      <div className="container mx-auto px-4 py-12">
        {/* ... Contenu similaire aux autres pages ... */}
      </div>

      {/* Schema.org JSON-LD pour SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          "name": "[NOM_CLUB]",
          "description": "[DESCRIPTION_SEO]",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "[VILLE]",
            "addressRegion": "[DEPARTEMENT]",
            "postalCode": "[CODE_POSTAL]",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "[LATITUDE]",
            "longitude": "[LONGITUDE]"
          },
          "url": "https://villagepadel.fr/[SLUG]",
          "image": "[URL_IMAGE]",
          "priceRange": "[PRIX] pour 1h30"
        })}
      </script>
    </div>
  );
};

export default [NomClub]Padel;
```

---

## Étape 2 : Ajouter la route dans App.tsx

### 2.1 Ajouter l'import en haut du fichier :

```tsx
import [NomClub]Padel from './pages/[NomClub]Padel';
```

### 2.2 Ajouter la route dans le composant Routes :

```tsx
<Route path="/[slug]" element={<[NomClub]Padel />} />
```

---

## Étape 3 : Ajouter le club dans NosPadels.tsx

Ajouter l'objet dans le tableau `terrains` :

```tsx
{
  id: "[slug]",
  name: "[NOM_CLUB]",
  position: [[LATITUDE], [LONGITUDE]],  // IMPORTANT: Vérifier les coordonnées !
  address: "[ADRESSE_COMPLETE]",
  courts: [NB_TERRAINS],  // Nombre de terrains (important pour le compteur)
  image: "[URL_IMAGE]",
  link: "/[slug]",
},
```

---

## Étape 4 : Mettre à jour le Cloudflare Worker

Ajouter ce bloc dans le worker (avant le `else` final) :

```javascript
else if (path.startsWith('/[slug]')) {
  metaTags = `
  <title>Padel à [NOM_CLUB] | [ACCROCHE] | [DEPARTEMENT]</title>
  <meta name="description" content="[DESCRIPTION_COMPLETE_AVEC_VILLES_PROCHES]">
  <meta name="keywords" content="padel [VILLE], padel [DEPARTEMENT], padel [VILLE_PROCHE_1], padel [VILLE_PROCHE_2], Village Padel">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://villagepadel.fr/[slug]">

  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Village Padel">
  <meta property="og:title" content="Padel à [NOM_CLUB] | Village Padel">
  <meta property="og:description" content="[DESCRIPTION_COURTE]">
  <meta property="og:image" content="[URL_IMAGE]">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:url" content="https://villagepadel.fr/[slug]">
  <meta property="og:locale" content="fr_FR">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Padel à [NOM_CLUB] | Village Padel">
  <meta name="twitter:description" content="[DESCRIPTION_COURTE]">
  <meta name="twitter:image" content="[URL_IMAGE]">
  `
}
```

---

## Étape 5 : Git & Déploiement

```bash
# Dans le dossier villagepadel.fr
cd /Users/olivierdagnac/Padel/villagepadel.fr

# Vérifier les changements
git status

# Ajouter les fichiers modifiés
git add src/pages/[NomClub]Padel.tsx src/App.tsx src/pages/NosPadels.tsx

# Commit avec message clair
git commit -m "Add [NOM_CLUB] padel page

- New club page with [PARTICULARITES]
- [PRIX] for 1h30
- Added route /[slug]
- Added to NosPadels map

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>"

# Push vers GitHub
git push origin main
```

Le déploiement Cloudflare se fait automatiquement après le push.

---

## Checklist finale

- [ ] Page créée avec SEO complet
- [ ] Coordonnées GPS vérifiées sur Google Maps
- [ ] Route ajoutée dans App.tsx
- [ ] Club ajouté dans NosPadels.tsx avec bon nombre de `courts`
- [ ] Worker Cloudflare mis à jour (manuellement dans le dashboard Cloudflare)
- [ ] Commit et push effectués
- [ ] Vérifier la page live après déploiement

---

## Notes importantes

1. **Coordonnées GPS** : Toujours vérifier avec Google Maps ! Erreur fréquente.
2. **SEO local** : Inclure les villes proches dans les keywords
3. **Compteur de terrains** : Le champ `courts` dans NosPadels.tsx sert à compter le total
4. **Images** : Utiliser Firebase Storage ou URLs stables
5. **Worker Cloudflare** : À mettre à jour manuellement dans le dashboard Cloudflare Workers

---

## Exemple de clubs existants à s'inspirer

- `LastoursPadel.tsx` - Cadre exceptionnel, matériel offert
- `PortLaNouvellePadel.tsx` - 2 terrains
- `CampsasPadel.tsx` - Terrain standard avec composants météo

---

## Contact

Repo GitHub : https://github.com/Olive06/villagepadel.fr_cloudflare
