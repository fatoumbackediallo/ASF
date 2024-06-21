import React from "react";
import { Link } from "react-router-dom";
import "../styles/pageDesactivee.css";
import BandeauConstruction from "../images/Construction/bandeau-construction.png";

const PageDesactivee = () => {
  return (
    <div>
      <div className="header-construction">
        <img src={BandeauConstruction} alt="bandeau"></img>
      </div>
      <div className="contenu-contruction">
        <h1>Page en cours d'actualisation</h1>
        <p className="p-contruction">Nous faisons vite!</p>
        <button className="bouton-construction">
          <Link to="/">
            <b>RETOUR À L'ACCUEIL</b>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PageDesactivee;
