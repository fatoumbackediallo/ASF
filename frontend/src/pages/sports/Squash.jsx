import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const Squash = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  const handleNextPageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/taekwondo");
  };

  return (
    <div>
      <div className="header squash">
        <div className="nom-sport">
          <h1>SQUASH</h1>
        </div>
        <div className="saison">
          <h2>SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2>QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>COURS ENSEIGNÉS</h4>
          <p>
            Le squash est un sport de raquette qui se joue sur un terrain de jeu
            entièrement entouré de murs. Il consiste à frapper une petite balle
            noire en caoutchouc, de telle sorte que son adversaire ne puisse pas
            la reprendre. À durées égales, le squash est l'un des sports les
            plus dépensiers en calories. L'autre particularité de ce sport est
            que les deux joueurs partagent et défendent alternativement la même
            surface de jeu. Cette spécificité met parfois les deux joueurs en
            interférence, on dit qu'il y a alors une situation de let.
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Lundi 02 Septembre 2023
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>Sessions de 45 minutes</h4>
            <p>
              <b>Stade du Panorama</b>
              <br /> 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                DU LUNDI AU SAMEDI :
                <br />
                09H00 - 21H45
              </b>
              <br />
              <br />
              <b>
                DIMANCHE : <br /> 09H00-19H30
              </b>
            </p>
          </div>
          {/* <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>2.</h4>
            <p>
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                DIMANCHE 9H00-19H30
                <br /> OU SAMEDI 10H15 - 12H00
              </b>
            </p>
          </div> */}

          <h4>
            L'Association ne prête pas de matériel. <br />
            Les joueurs devront se présenter avec leurs raquettes et balles.
          </h4>
          <br />
          <h4>
            (Se présenter auprès du gardien pour l'ouverture de la salle et du
            vestiaire.)
          </h4>
        </div>
        <h2>INSCRIPTIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="inscription">
          <h4>INSCRIPTION ET RESERVATION VIA LE LIEN SUIVANT :</h4>
          <span className="lien">
            <a href="https://asfontenaisienne.monclub.app/">
              LIEN D'INSCRIPTION
            </a>
          </span>
        </div>

        <h2>COTISATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div>
          <h4>RESERVATION D'UN TERRAIN POUR 2 JOUEURS</h4>
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b>A LA CARTE</b>
              </p>
              <p className="prix-cotisation">
                <b>10€</b>
                <br />
                <i className="i-style-cotisations">1 séance</i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>A LA CARTE</b>
              </p>
              <p className="prix-cotisation">
                <b>90€</b>
                <br />
                <i className="i-style-cotisations">10 séances</i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>ANNUELLE ILLIMITÉE</b>
              </p>
              <p className="prix-cotisation">
                <b>230€</b>
                <br /> <br />
                <i className="i-style-cotisations">CEA</i>
                <br />
                <b>200€</b>
              </p>
            </div>
          </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>SECRETARIAT ASF</h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> I.latarse@as-fontenay.fr</span>
          </div>
          <div>
            <span className="label">Téléphone : </span>
            <span className="email"> 01 46 01 98 01</span>
          </div>
        </div>
      </div>

      <div className="box-button-sportPages">
        <div>
          <button className="button-sportPages" onClick={handleHomeClick}>
            <h4 className="h4-button-sportPages">Retour Accueil</h4>
          </button>
        </div>
        <div>
          <button className="button-sportPages" onClick={handleNextPageClick}>
            <h4 className="h4-button-sportPages">Page suivante</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Squash;
