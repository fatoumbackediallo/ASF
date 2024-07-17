import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const Aikido = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  const navigate = useNavigate();

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  const handleNextPageClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/basketball");
  };

  return (
    <div>
      <div className="header aikido">
        <div className="nom-sport">
          <h1>AIKIDO</h1>
        </div>
        <div className="saison">
          <h2>SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2 className="h2">QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>MÉTHODES ENSEIGNÉES</h4>
          <p>
            "La voie de l'union ou de l'harmonie des énergies" : (Aï : union -
            harmonie, Ki : énergie, Do : voie). <br />
            <br />
            L'Aïkido est un art martial qui comporte de nombreuses techniques à
            mains nues, ainsi que des techniques d'armes (sabre-bokken,
            bâton-jo, poignard-tanto). Il consiste à contrôler les attaques de
            ses adversaires, sans opposition ou exercice de la force, en
            utilisant des techniques d'esquive et d'immobilisation.
            <br /> <br />
            Les pratiquants peuvent découvrir un art martial d'autodéfense
            efficace et non violent. Les principes présentés durant les cours
            peuvent déboucher pour certains sur un véritable art de vivre.
            <br />
            <br /> L'Aïkido permet de développer le contrôle de soi. Tout le
            monde peut pratiquer, hommes et femmes, jeunes et adultes. Aucune
            aptitude physique particulière n'est nécessaire pour cet art martial
            en dehors d'une bonne condition générale à une pratique sportive.{" "}
            <br />
            <br />
            L’Aïkido se distingue cependant des autres arts martiaux en
            cherchant à neutraliser l'intention agressive de l'adversaire.
            L'Aïkido étant un art martial avec un objectif de dissuasion, sa
            pratique exclut toute idée de compétition.
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2 className="h2">ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Lundi 09 Septembre 2023
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>MOINS DE 14 ANS</h4>
            <p>
              <b>DOJO </b>
              <br />
              <br />
              Gymnase collège les Ormeaux, <br />
              15 Rue D'Estienne d'Orves, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 16H00-17H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>14-18 ANS</h4>
            <p>
              <b>DOJO </b>
              <br />
              <br />
              Gymnase collège les Ormeaux, <br /> 15 Rue D'Estienne d'Orves,
              92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 17H00-18H00</b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES</h4>
            <p>
              <b>DOJO 1 </b>
              <br />
              Gymnase Jean Fournier <br /> 7 Rue des Potiers, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <b>DOJO 2</b>
              <br />
              Gymnase Jean Fournier <br /> 7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 20H30-22H30
                <br />
                <i className="i-style">(Dojo 1)</i>
                <br />
                <br />
                MERCREDI : 19H00-21H00
                <br />
                <i className="i-style">(Dojo 1)</i>
                <br />
                <br />
                VENDREDI : 20H00-21H00
                <br />
                <i className="i-style">(Dojo 2)</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES GRADÉS</h4>
            <p>
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier <br /> 7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 21H00-22H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ARMES (JO, BOKKEN, TANTO)</h4>
            <p>
              <b>DOJO 2</b>
              <br />
              <br />
              Gymnase Jean Fournier <br />7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI : 21H00-22H00</b>
            </p>
          </div>
        </div>

        <h2 className="h2">COTISATIONS</h2>
        <hr className="ligne-titre"></hr>

        <div className="paiement">
          <h3>MOYENS DE PAIEMENT</h3>
          <div>
            <ul className="ul-paiement">
              <li>
                <h4>CARTE BANCAIRE</h4>
                <p>(en une seule fois)</p>
              </li>
              <li>
                <h4>SEPA (PRÉLÈVEMENTS)</h4>
                <p>(en 3 fois)</p>
              </li>
              <li>
                <h4>Par virement : </h4>
                <p>(en 1 seule fois)</p>
                <ul>
                  <li>Se rapprocher de la section pour obtenir le RIB</li>
                  <li>
                    Se connecter à l'application de votre banque en ligne -
                    Sélectionner virement
                  </li>
                  <li>Ajouter un nouveau bénéficiaire</li>
                  <li>
                    Indiquer <b className="gras">obligatoirement</b> le motif du
                    virement
                  </li>
                  <ul>
                    <li>
                      Section concernée + Nom et Prénom de l'enfant si
                      inscription d'un mineur ou de l'adulte inscrit{" "}
                    </li>
                    <li>
                      Exemple : ASF VOLLEY - enfant AZEERTYUI Noémie ou ASF
                      VOLLEY - adulte AZERTYUI Marc
                    </li>
                  </ul>
                  <li>Effectuer le virement</li>
                </ul>
              </li>
              <li>
                <h4 onClick={handleToggle} className="menu-deroulant">
                  AUTRES PAIEMENTS (Bénéficiaires d'aides, chèques et Espèces)
                  <span>{showOthers ? "v" : ">"}</span>
                </h4>
                {showOthers && (
                  <div className="autres-moyens">
                    <h4>Si Bénéficiaire d'Aides :</h4>
                    <p>
                      ANVC (coupons sport, chèque-vacances), Coup de pouce
                      loisirs (CAF), Pass+, Pass'sport, Chèque sport, Labaz,
                      Coupon Sceaux
                    </p>
                    <p>
                      <i>
                        (Uniquement : Athlétisme, Badminton (en compétition),
                        Gymnastique Rythmique, Gymnastique Artistique, Handball,
                        Rugby, Squash, VolleyBall)
                      </i>
                    </p>

                    <h4>Par chèque(s) :</h4>
                    <p>(5 fois maximum - à l'ordre de l'ASF) </p>

                    <h4>Par espèces : </h4>
                    <p>(en 1 seule fois)</p>
                    <div className="remise">
                      <h4>La remise se fera : </h4>
                    </div>
                    <p>
                      Au Forum des Associations le{" "}
                      <b className="gras"> 08 septembre</b> au Gymnase du Parc
                      entre 10h00 et 18h00
                    </p>
                    <p>OU</p>
                    <p>
                      Auprès de l'Accueil / Secrétariat de l'ASF - 10 place du
                      château Ste Barbe - 2ème Étage - Porte 7
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="cotisations">
          <div className="case-cotisation">
            <p>
              <b>MOINS DE 14 ANS</b>
            </p>
            <p className="prix-cotisation">
              <b>249€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>14-18 ANS</b>
            </p>
            <p className="prix-cotisation">
              <b>284€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>ADULTES</b>
            </p>
            <p className="prix-cotisation">
              <b>354€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>ARMES</b>
            </p>
            <p className="prix-cotisation">
              <b>219€</b>
            </p>
          </div>
        </div>

        <h2 className="h2">INSCRIPTIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="bloc">
          <h4 className="h4">
            GUIDE D'INSCRIPTION À DESTINATION DE NOS ADHÉRENT(E)S :
          </h4>
          <div>
            <span className="lien">
              <a href="https://teamrsport.notion.site/Refonte-du-parcours-d-inscription-sur-le-web-16bd9422267c47d18b69570fd2fe34ab">
                PARCOURS D'INSCRIPTION SUR LE WEB (NOTION.SITE)
              </a>
            </span>
            <p>
              Il s'agit d'une page du site internet de MonClub qui explique aux
              adhérents comment s'inscrire pour la première fois avec MonClub ou
              bien comment se connecter si un compte a déjà été créé.
            </p>
          </div>
        </div>
        <div className="bloc">
          <h4 className="h4">
            DISPOSITIF CERTIFICAT MÉDICAL POUR LE SPORT - INFORMATIONS ADHÉRENT
          </h4>
          <div>
            <h5 className="h5-bloc">Mineur : </h5>
            <p className="p-h5-bloc">
              Questionnaire de santé (à garder par l'adhérent) ou Certificat
              Médical (si + de 3 ans) si nouveau ou souhait de la section.{" "}
            </p>

            <span className="lien-span-h5">
              <a href=" https://admin.sportsregions.fr/media/uploaded/sites/12869/kcupload/files/questionnaire-de-sante-mineurs.pdf">
                CLIQUEZ ICI
              </a>
            </span>
            <br />
            <h5 className="h5-bloc">Majeur : </h5>
            <p className="p-h5-bloc">
              Questionnaire de santé (à garder par l'adhérent) ou Certificat
              Médical (si + de 3 ans) si nouveau ou souhait de la section.{" "}
            </p>

            <span className="lien-span-h5">
              <a href="https://admin.sportsregions.fr/media/uploaded/sites/12869/kcupload/files/Majeur%20-%20Questionnaire%20de%20Sant%C3%A9%202021-2022.pdf">
                CLIQUEZ ICI
              </a>
            </span>
          </div>
        </div>
        <div className="bloc">
          <h4 className="h4">INSCRIPTION EN LIGNE :</h4>
          <div>
            <span className="lien">
              <a href="https://asfontenaisienne.monclub.app/">
                LIEN D'INSCRIPTION
              </a>
            </span>
            <p className="p-inscription">
              Remise de 10% à partir du 2e enfant avec le code Mon Club
              FRATERIE10
            </p>
          </div>
        </div>

        <h2 className="h2">CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PROFESSEUR BENOIT CROZIER</h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> admin.asf.aikido@sfr.fr</span>
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
            <h4 className="h4-button-sportPages">Athlétisme</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aikido;
