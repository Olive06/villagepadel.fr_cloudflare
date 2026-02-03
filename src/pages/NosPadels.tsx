import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import L from "leaflet";
import "../NosPadels.css"; // Assurez-vous que le fichier est bien ici

// ✅ Icône personnalisée pour les marqueurs
const padelIcon = new L.Icon({
  iconUrl:
    "https://res.cloudinary.com/damfvriyn/image/upload/v1741120072/-Village_Padel_LOGO_LOLA_Bon__1_sansfond.qpng_kkjnua.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
  popupAnchor: [0, -50],
});

// 📍 Données des terrains de padel avec les nouvelles coordonnées
const terrains = [
  {
    id: "grisolles",
    name: "Padel de Grisolles",
    position: [43.821025628963014, 1.287244646725756],
    address: "120 Chem. de la Belle Gabrielle, 82170 Grisolles",
    courts: 1,
    image:
      "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/481270219_122142807104570408_784936930886099981_n_yoayxg.jpg",
    link: "/grisolles",
  },
  {
    id: "campsas",
    name: "TENNIS PADEL AVENIR CAMPSANAIS",
    position: [43.89817203012283, 1.3185011967391125],
    address: "Rte d'Auch, 82370 Campsas",
    courts: 1,
    image:
      "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg",
    link: "/campsas",
  },
  {
    id: "baraqueville",
    name: "Tennis Padel Club de Baraqueville",
    position: [44.2751913, 2.4349727],
    address: "Rue de la Vall. du Viaur, 12160 Baraqueville",
    courts: 1,
    image: "https://olive06.github.io/villagepadel.fr/images/baraq1.jpg",
    link: "/baraqueville",
  },
  {
    id: "capvern",
    name: "CAP'PADEL CAPVERN",
    position: [43.097394, 0.329371],
    address: "65130 Capvern, Hautes-Pyrénées",
    courts: 1,
    image: "https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FCapvern.webp?alt=media&token=325155a7-6dd0-40c4-bb04-86d4ba7ea3f4",
    link: "/capvern",
  },
  {
    id: "port-la-nouvelle",
    name: "TC Nouvellois - Port-La Nouvelle",
    position: [43.0146315, 3.0509743],
    address: "11210 Port-La Nouvelle",
    courts: 2,
    image: "https://olive06.github.io/villagepadel.fr/images/port1.png",
    link: "/port-la-nouvelle",
  },
  {
    id: "chis",
    name: "Tennis Club Pyrénées Bigorre",
    position: [43.293837, 0.111647],
    address: "3 Chem. de Saint-Ferréol, 65800 Chis",
    courts: 1,
    image: "https://olive06.github.io/villagepadel.fr/images/bigorre.jpg",
    link: "/chis",
  },
  {
    id: "tc-muret",
    name: "TC MURET",
    position: [43.472792, 1.338952],
    address: "Complexe Nelson Paillou, Av. Bernard IV, 31600 Muret",
    courts: 1,
    image: "https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FPHOTO-2025-12-23-18-27-50.jpg?alt=media&token=b3f0813c-8d56-40f2-b710-7a6dcd9b5cfc",
    link: "/tc-muret",
  },
  {
    id: "lastours",
    name: "Château de Lastours",
    position: [43.3356, 2.3785],
    address: "11600 Lastours, Aude",
    courts: 1,
    image: "https://firebasestorage.googleapis.com/v0/b/padeldupeuple.appspot.com/o/Terrains_images%2FLastours.jpg?alt=media&token=f0494ccb-96f1-47b6-87a0-aa0a2e06db9a",
    link: "/lastours",
  },
];

const NosPadels = () => {
  const [search, setSearch] = useState("");

  // 🔎 Filtrer les terrains selon la recherche
  const filteredTerrains = terrains.filter((terrain) =>
    terrain.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen">
      {/* 📝 Panneau latéral gauche (widgets) - Pleine largeur et hauteur sur mobile */}
      <div className="w-full lg:w-1/3 bg-white p-6 overflow-y-auto shadow-lg z-10 min-h-screen lg:h-full">
        <h2 className="text-2xl font-bold mb-4">Rechercher un Padel</h2>
        <input
          type="text"
          placeholder="Rechercher par nom..."
          className="w-full p-2 mb-4 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className="text-sm text-gray-500 mb-2">
          {filteredTerrains.length} terrains trouvés
        </p>

        {filteredTerrains.map((terrain) => (
          <div
            key={terrain.id}
            className="bg-gray-100 p-4 rounded-lg shadow-md mb-4"
          >
            <img
              src={terrain.image}
              alt={terrain.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold">{terrain.name}</h3>
            <p className="text-sm text-gray-500">{terrain.address}</p>
            <Link
              to={terrain.link}
              className="mt-2 block bg-brand-orange text-white px-4 py-2 rounded-lg text-center hover:bg-brand-orange-dark transition"
            >
              Voir plus
            </Link>
          </div>
        ))}
      </div>

      {/* 🗺️ Carte interactive - Cachée sur mobile */}
      <div className="hidden lg:block lg:w-2/3 w-full flex-grow h-full">
        <MapContainer center={[43.5, 2.2]} zoom={8} className="h-full w-full">
          {/* 🌍 Fond de carte stylisé */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />

          {/* 📍 Clustering des marqueurs */}
          <MarkerClusterGroup>
            {terrains.map((terrain) => (
              <Marker key={terrain.id} position={terrain.position} icon={padelIcon}>
                <Popup>
                  <div className="text-center">
                    <h3 className="text-lg font-bold">{terrain.name}</h3>
                    <p className="text-sm text-gray-500">{terrain.address}</p>
                    <p className="text-sm">Terrains disponibles : {terrain.courts}</p>
                    <Link
                      to={terrain.link}
                      className="mt-2 inline-block bg-brand-orange text-white px-4 py-2 rounded-lg hover:bg-brand-orange-dark transition"
                    >
                      Voir plus
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default NosPadels;