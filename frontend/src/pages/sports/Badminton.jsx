import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const Badminton = () => {
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
      <div className="header badminton">
        <div className="nom-sport">
          <h1 className="h1-mon-sport">BADMINTON</h1>
        </div>
        <div className="saison">
          <h2 className="h2-saisons">SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2 className="h2">QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>MÉTHODES ENSEIGNÉES</h4>
          <p>
            Le badminton est un sport rapide et dynamique qui allie agilité,
            précision et stratégie. Joué à l'intérieur ou à l'extérieur, ce
            sport de raquette se pratique en simple ou en double, et consiste à
            frapper un volant léger au-dessus d'un filet, avec l'objectif de le
            faire tomber dans le terrain adverse.
            {/* <br />
            Notre section badminton au sein de l'association sportive propose un
            cadre convivial et motivant pour les joueurs de tous niveaux. Nos
            entraîneurs expé-rimentés sont dédiés à développer tant les
            compétences techniques que tac-tiques, tout en encourageant le
            plaisir de jouer et l'esprit sportif.
            <br />
            Nous organisons également des tournois internes et participons à des
            compé-titions départementales, offrant ainsi à nos membres la
            possibilité de se me-surer à d'autres joueurs et de progresser.
            <br />
            Que vous soyez novice souhaitant découvrir les bases du badminton ou
            joueur confirmé cherchant à affiner votre technique et votre jeu
            stratégique, la section badminton vous accueille avec le plus grand
            plaisir.
            <br />
            <br />
            Rejoignez-nous pour partager la passion du badminton et vivre des
            moments sportifs inoubliables ! */}
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2 className="h2">ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  :
                  <br />
                  * Jeunes(8 - 18 ans) : Lundi 02 Septembre 2024
                  <br />* Adultes : Lundi 19 Août 2024
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>
              JEUNES
              <br />
              8-12 ANS
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase du Panorama
              <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 17H00-18H30
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                VENDREDI : 17H00-18H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              JEUNES
              <br />
              12 - 18 ANS
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase du Panorama
              <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 18H30-20H00
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                VENDREDI : 17H00-18H30
              </b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              JEU LIBRE
              <br />
              ADULTES
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase du Panorama
              <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase Collège Les Ormeaux
              <br />
              15 Rue D'Estienne d'Orves, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 20H00-22H30
                <br />
                SAMEDI : 11H30-13H00
                <br />
                DIMANCHE : 10H00-12H00
                <br />
                <br /> <br />
                <br />
                MARDI : 20H15-22H30
                <br />
                VENDREDI : 20H30-22H30
                <br />
                <br /> <br />
                <br />
                JEUDI : 20H30-22H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES CONFIRMES</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Panorama <br /> 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Rosess
            </p>
            <p>
              <br />
              <b>MARDI : 20H15-22H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES COMPETITION</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Collège Les Ormeaux
              <br />
              15 Rue D'Estienne d'Orves, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <br />

              <b>MERCREDI : 20H00-22H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>LOISIRS</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <br />
              <b>VENDREDI : 20H30-22H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES MUSCULATION</h4>
            <p>
              <b>SALLE MUSCULATION</b>
              <br />
              Gymnase du Parc <br /> 7 avenue du Parc 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                <br />
                JEUDI : 18H30-21H30
                <br />
                VENDREDI : 18H30-20H00
              </b>
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
                    <p>(3 fois maximum - à l'ordre de l'ASF) </p>

                    <h4>Par espèces : </h4>
                    <p>(en 1 seule fois)</p>
                    <div className="remise">
                      <h4>La remise se fera : </h4>
                    </div>
                    <p>
                      Au Forum des Associations le
                      <b className="gras"> 08 septembre</b> au Gymnase du Parc
                      entre 10h00 et 18h00
                    </p>
                    <p>OU</p>
                    <p>Lors de la première séance d'entraînement.</p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="cotisations">
          <div className="case-cotisation">
            <p>
              <b>
                JEUNES <br />
                MOINS DE 9 ANS
              </b>
            </p>
            <p className="prix-cotisation">
              <b>155€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>
                JEUNES <br /> 9 À 18 ANS
              </b>
            </p>
            <p>
              <i>1 séance</i>
            </p>
            <p className="prix-cotisation">
              <b>175€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>
                JEUNES <br />9 À 18 ANS
              </b>
            </p>
            <p>
              <i>2 séances</i>
            </p>
            <p className="prix-cotisation">
              <b>220€</b>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>
                ADULTES
                <br /> (uniquement jeu libre)
              </b>
            </p>
            <p className="prix-cotisation">
              <b>200€</b>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>
                ADULTES <br /> (dont 1 entraînement)
              </b>
            </p>
            <p className="prix-cotisation">
              <b>230€</b>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>
                ADULTES <br /> COMPETITION
              </b>
            </p>
            <p className="prix-cotisation">
              <b>250€</b>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>ETUDIANT</b>
            </p>
            <p className="prix-cotisation">
              <b className="b-style-cotisations">
                Réduction de 25€ <br /> sur les tarifs adultes
              </b>
            </p>
          </div>
        </div>

        <h2>INSCRIPTIONS</h2>
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
          </div>
        </div>

        <h2 className="h2">CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          {/* <h4>PRÉSIDENT GOEFFREY GUYOT :</h4> */}

          <span className="label">Mail : </span>
          <span className="email"> bureau@asfb.fr</span>

          <span className="label">Site Web : </span>
          <span className="email"> www.asfb.fr</span>
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
            <h4 className="h4-button-sportPages">Basketball</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Badminton;
