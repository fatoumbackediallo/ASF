import React from "react";
import Aikido from "./pages/sports/Aikido.jsx";
import Badminton from "./pages/sports/Badminton.jsx";
import BasketBall from "./pages/sports/Basketball.jsx";
import BoxeThailandaise from "./pages/sports/BoxeThailandaise.jsx";
import EcoleDeDanse from "./pages/sports/EcoleDeDanse.jsx";
import Escrime from "./pages/sports/Escrime.jsx";
import Fitness from "./pages/sports/FitnessGymBienetre.jsx";
import GymnastiqueArtistique from "./pages/sports/GymnastiqueArtistique.jsx";
import GymnastiqueRythmique from "./pages/sports/GymnastiqueRythmique.jsx";
import Handball from "./pages/sports/Handball.jsx";
import Karate from "./pages/sports/Karate.jsx";
import KungFu from "./pages/sports/KungFu.jsx";
import Natation from "./pages/sports/Natation.jsx";
import Parkour from "./pages/sports/Parkour.jsx";
import TaeKwonDo from "./pages/sports/TaeKwonDo.jsx";
import Tennis from "./pages/sports/Tennis.jsx";
import TennisDeTable from "./pages/sports/TennisDeTable.jsx";
import VolleyBall from "./pages/sports/VolleyBall.jsx";
import PageDesactivee from "./components/PageDesactivee.jsx";
import Capoeira from "./pages/sports/Capoeira.jsx";
import Football from "./pages/sports/Football.jsx";
import Rugby from "./pages/sports/Rugby.jsx";
import Athletisme from "./pages/sports/Athletisme.jsx";
import EcoleDesSports from "./pages/sports/EcoleDesSports.jsx";
import Squash from "./pages/sports/Squash.jsx";
import Yoga from "./pages/sports/Yoga.jsx";
// import JudoJuJitsu from "./pages/sports/JudoJuJitsu.jsx";

// Liste des pages désactivées
const disabledPages = ["judojujitsu"];

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
  { path: "/escrimesabrelaser", element: <Escrime /> },
  { path: "/fitness", element: <Fitness /> },
  { path: "/football", element: <Football /> },
  { path: "/gymnastiqueartistique", element: <GymnastiqueArtistique /> },
  { path: "/gymnastiquerythmique", element: <GymnastiqueRythmique /> },
  { path: "/handball", element: <Handball /> },
  // { path: "/judojujitsu", element: <JudoJuJitsu /> },
  { path: "/karate", element: <Karate /> },
  { path: "/kungfu", element: <KungFu /> },
  { path: "/natation", element: <Natation /> },
  { path: "/parkour", element: <Parkour /> },
  { path: "/rugby", element: <Rugby /> },
  { path: "/squash", element: <Squash /> },
  { path: "/taekwondo", element: <TaeKwonDo /> },
  { path: "/tennis", element: <Tennis /> },
  { path: "/tennisdetable", element: <TennisDeTable /> },
  { path: "/volleyball", element: <VolleyBall /> },
  { path: "/yoga", element: <Yoga /> },
  ...disabledPages.map((page) => ({
    path: `/${page}`,
    element: <PageDesactivee />,
  })),
];

export default routes;
