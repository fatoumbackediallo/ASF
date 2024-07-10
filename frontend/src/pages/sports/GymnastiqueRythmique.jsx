import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/sports.css";

const GymnastiqueRythmique = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div>
      <div className="header gymnastiqueRythmique">
        <div className="nom-sport">
          <h1>GYMNASTIQUE RYTHMIQUE</h1>
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
            La Gymnastique Rythmique, discipline esthétique et chorégraphique,
            développe le rythme, l’habilité, la souplesse et la coordination.
            <br />
            Ballons, Cordes, Cerceaux, Rubans et Massues :<br />
            <br />
            La manipulation de ces engins fait appel à la grâce, l’expressivité
            et la créativité.
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Lundi 09 Septembre 2024
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>
              LOISIRS
              <br />
              (4 - 6 ans)
            </h4>
            <p>
              <b>Gymnase Jean Fournier</b>
              <br /> 7 Rue des Portiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 15H30-16H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              LOISIRS
              <br />
              (6 - 8 ans)
            </h4>
            <p>
              <b>Gymnase Jean Fournier</b>
              <br /> 7 Rue des Portiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 14H30-15H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              LOISIRS
              <br />
              (8 ans et +)
            </h4>
            <p>
              <b>Gymnase Jean Fournier</b>
              <br /> 7 Rue des Portiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 13H00-14H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              LOISIRS
              <br />
              (Tous âges)
            </h4>
            <p>
              <b>Gymnase Collège Les Ormeaux</b>
              <br />
              15 Rue d'Estienne d'Orves, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <br />
              <b>MERCREDI : 17H45-18H45</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              COMPETITION <br />7 ans et +
            </h4>
            <p>
              <b>Gymnase Collège Les Ormeaux</b>
              <br />
              15 Rue d'Estienne d'Orves, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>Gymnase du Panorama</b>
              <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 18H30-20H30
                <br /> <i>(Les Ormeaux)</i> <br />
                MERCREDI : 18H30-20H30
                <br /> <i>(Les Ormeaux)</i> <br />
                VENDREDI : 18H30-20H30
                <br />
                <i>(Les Ormeaux)</i>
              </b>
              <br />
              <br />

              <b>
                SAMEDI : 11H00-13H00
                <br /> <i>(Panorama)</i> <br />
                SAMEDI : 13H00-15H00
                <br />
                <i>(Panorama)</i>
              </b>
              <br />
              <br />
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              PRE-COMPÉTITION
              <br />7 ans et +
            </h4>
            <p>
              <b>Gymnase du Panorama</b>
              <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI : 09H00-11H00</b>
            </p>
          </div>
        </div>

        <h2>COTISATIONS</h2>
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
                      Exemple : ASF VOLLEY - enfant AZERTYUI Noémie ou ASF
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

        <div>
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b>
                  LOISIRS (1h) <br /> Licence UFOLEP incluse
                </b>
                <br />
                <i>(4 à 8 ans et +)</i>
              </p>
              <p className="prix-cotisation">
                <b>270€</b>
                <br />
                <i className="i-style-cotisations">
                  (1 Cours) <br /> Fontenaisien
                </i>
                <br /> <br />
                <b>350€</b>
                <br />
                <i className="i-style-cotisations">
                  (2 Cours) <br /> Fontenaisien
                </i>
                <br /> <br />
                <b>290€</b>
                <br />
                <i className="i-style-cotisations">
                  (1 Cours) <br /> Non Fontenaisien
                </i>
                <br /> <br />
                <b>370€</b>
                <br />
                <i className="i-style-cotisations">
                  (2 Cours) <br /> Non Fontenaisien
                </i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  LOISIRS +
                  <br /> (1h30) Licene UFOLEP incluse
                </b>
                <br />
                <i>(8 ans et +)</i>
              </p>
              <p className="prix-cotisation">
                <b>290€</b>
                <br />
                <i className="i-style-cotisations">
                  (1 Cours) <br /> Fontenaisien
                </i>
                <br /> <br />
                <b>310€</b>
                <br />
                <i className="i-style-cotisations">
                  (2 Cours) <br /> Fontenaisien
                </i>
                <br /> <br />
                <b>370€</b>
                <br />
                <i className="i-style-cotisations">
                  (1 Cours) <br /> Non Fontenaisien
                </i>
                <br /> <br />
                <b>390€</b>
                <br />
                <i className="i-style-cotisations">
                  (2 Cours) <br /> Non Fontenaisien
                </i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  PRE-COMPETITION (2h)
                  <br /> Licence FFG incluse
                </b>
                <br />
                <i>
                  (7 ans et +) <br />
                </i>
              </p>
              <p className="prix-cotisation">
                <b>350€</b>
                <br />
                <i className="i-style-cotisations">(Fontenaisien )</i>
                <br /> <br />
                <b>370€</b>
                <br />
                <i className="i-style-cotisations">(Non Fontenaisien )</i>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>
                  LOISIRS + (1 cours - 1h) <br />
                  PRE-COMPETITIONS (1 cours- 2h)
                  <br />
                  Licence FFG incluse
                  <br />
                </b>
                <i> 7 ans et +</i>
              </p>
              <p className="prix-cotisation">
                <b>380€</b>
                <br />
                <i className="i-style-cotisations">(Fontenaisien)</i>
                <br /> <br />
                <b>400€</b>
                <br />
                <i className="i-style-cotisations">(Non Fontenaisien)</i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  COMPETITION (2 cours - 4h) <br /> Licence FFG incluse
                </b>
                <br />
                <i>(7 ans et +)</i>
              </p>
              <p className="prix-cotisation">
                <b>400€</b>
                <br />
                <i className="i-style-cotisations">
                  (2 Cours) <br /> Fontenaisien
                </i>
                <br />
                <br />
                <b>420€</b>
                <br />
                <i className="i-style-cotisations">
                  (2 Cours) <br /> Non Fontenaisien
                </i>
              </p>
            </div>

            {/* <h4>
              Remise de 10% à partir du 2ème enfant lors de l'inscription en
              ligne sur MonClub avec le code de remise FRATERIE10.
            </h4> */}
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

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PRÉSIDENTE : MYRIAM MONTLOUIS </h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> asf92.gym.rythmique@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="box-button-sportPages">
        <div>
          <button className="button-sportPages">
            <Link to="/" className="link-button-sportPages">
              <h4 className="h4-button-sportPages">Retour Accueil</h4>
            </Link>
          </button>
        </div>
        <div>
          <button className="button-sportPages">
            <Link to="/handball" className="link-button-sportPages">
              <h4 className="h4-button-sportPages">Page suivante</h4>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GymnastiqueRythmique;
