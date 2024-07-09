import React from "react";
import Aikido from "./pages/sports/Aikido.jsx";
import Badminton from "./pages/sports/Badminton.jsx";
import BasketBall from "./pages/sports/Basketball.jsx";
import BoxeThailandaise from "./pages/sports/BoxeThailandaise.jsx";
import EcoleDeDanse from "./pages/sports/EcoleDeDanse.jsx";
import Escrime from "./pages/sports/Escrime.jsx";
import Fitness from "./pages/sports/FitnessGymBienetre.jsx";
import GymnastiqueArtistique from "./pages/sports/GymnastiqueArtistique.jsx";
import Handball from "./pages/sports/Handball.jsx";
import Natation from "./pages/sports/Natation.jsx";
import TaeKwonDo from "./pages/sports/TaeKwonDo.jsx";
import Tennis from "./pages/sports/Tennis.jsx";
// import TennisDeTable from "./pages/sports/TennisDeTable.jsx";
import VolleyBall from "./pages/sports/VolleyBall.jsx";
import PageDesactivee from "./components/PageDesactivee.jsx";
import Capoeira from "./pages/sports/Capoeira.jsx";
import Football from "./pages/sports/Football.jsx";
import Rugby from "./pages/sports/Rugby.jsx";
import Athletisme from "./pages/sports/Athletisme.jsx";
import EcoleDesSports from "./pages/sports/EcoleDesSports.jsx";

// Liste des pages désactivées
const disabledPages = [
  "gymnastiquerythmique",
  "judojujitsu",
  "karate",
  "kungfu",
  "parkour",
  "tennisdetable",
  "yoga",
];

// Configuration des routes
const routes = [
  { path: "/aikido", element: <Aikido /> },
  { path: "/athletisme", element: <Athletisme /> },
  { path: "/badminton", element: <Badminton /> },
  { path: "/basketball", element: <BasketBall /> },
  { path: "/boxethailandaise", element: <BoxeThailandaise /> },
  { path: "/capoeira", element: <Capoeira /> },
  { path: "/ecolededanse", element: <EcoleDeDanse /> },
  { path: "/ecoledessports", element: <EcoleDesSports /> },
  { path: "/escrime", element: <Escrime /> },
  { path: "/fitness", element: <Fitness /> },
  { path: "/gymnastiqueartistique", element: <GymnastiqueArtistique /> },
  { path: "/handball", element: <Handball /> },
  { path: "/football", element: <Football /> },
  { path: "/natation", element: <Natation /> },
  { path: "/rugby", element: <Rugby /> },
  { path: "/taekwondo", element: <TaeKwonDo /> },
  { path: "/tennis", element: <Tennis /> },
  // { path: "/tennisdetable", element: <TennisDeTable /> },
  { path: "/volleyball", element: <VolleyBall /> },
  ...disabledPages.map((page) => ({
    path: `/${page}`,
    element: <PageDesactivee />,
  })),
];

export default routes;
