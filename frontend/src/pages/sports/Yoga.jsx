import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const Yoga = () => {
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
    navigate("/aikido");
  };

  return (
    <div>
      <div className="header yoga">
        <div className="nom-sport">
          <h1>YOGA</h1>
        </div>
        <div className="saison">
          <h2>SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2>QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>COURS ENSEIGNÉS </h4>
          <p>
            Hatha yoga dans la lignée de Madras (Professeur diplômée FNEY)
            <br />
            <br />
            La séance (1h15) débute par une mise en route musculaire et
            respiratoire progressive, sur le chemin du lâcher-prise.
            <br />
            Elle se poursuit par la pratique posturale qui mobilise les cinq
            sens de la colonne vertébrale de façon dynamique et statique, dans
            le respect de chaque pratiquant.
            <br />
            <br />
            L'accent est mis sur l'attention permanente au souffle et au
            ressenti.
            <br />
            Les bénéfices de cette séquence d'exercices sont pleinement intégrés
            lors de la détente.
            <br />
            Puis le travail respiratoire est le prélude à l'assise, grâce au
            calme intérieur et à la verticalité que la séance a permis
            d'apprivoiser.
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Vendredi 13 Septembre 2024
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>18 ANS ET +</h4>
            <p>
              <b>SALLE BIEN ÊTRE</b>
              <br />
              Gymnase du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI : 18H30-19H45 <br />
                <br />
                MARDI : 20H00-21H45 <br />
                <br />
                MERCREDI : 12H15-13H30 <br />
                <br />
                JEUDI : 10H30-11H45 <br />
                <br />
                VENDREDI : 17H30-18H45 <br />
                <br />
                VENDREDI : 19H00-20H15 <br />
              </b>
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

        <div className="cotisations">
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b> + 25 ans</b>
                <br />
                <i>Yoga simple (1h/semaine)</i>
              </p>
              <p className="prix-cotisation">
                <b>290€</b>
                <br />
                <i className="i-style-cotisations">Fontenaisien</i>
                <br />
                <br />
                <b>310€</b>
                <br />
                <i className="i-style-cotisations"> Non Fontenaisien</i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b> + 25 ans</b>
                <br />
                <i>
                  Yoga simple (1h/semaine) <br />+ cours avancés (1/mois)
                </i>
              </p>
              <p className="prix-cotisation">
                <b>350€</b>
                <br />
                <i className="i-style-cotisations">Fontenaisien</i>
                <br />
                <br />
                <b>370€</b>
                <br />
                <i className="i-style-cotisations"> Non Fontenaisien</i>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>- 25 ans</b>
                <br />
                <i>Yoga simple (1h/semaine)</i>
              </p>
              <p className="prix-cotisation">
                <b>235€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>- 25 ans</b>
                <br />
                <i>
                  Yoga simple (1h/semaine)
                  <br /> + cours avancés (1/mois)
                </i>
              </p>
              <p className="prix-cotisation">
                <b>300€</b>
              </p>
            </div>
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
            {/* <h5 className="h5-bloc">Mineur : </h5>
            <p className="p-h5-bloc">
              Questionnaire de santé (à garder par l'adhérent) ou Certificat
              Médical (si + de 3 ans) si nouveau ou souhait de la section.{" "}
            </p>

            <span className="lien-span-h5">
              <a href=" https://admin.sportsregions.fr/media/uploaded/sites/12869/kcupload/files/questionnaire-de-sante-mineurs.pdf">
                CLIQUEZ ICI
              </a>
            </span>
            <br /> */}
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
          <h4>PRÉSIDENT : JEAN-FRANCOIS BRESSE</h4>
          <span className="label">Mail : </span>
          <span className="email"> jeff.bresse@orange.fr</span>
        </div>
        <div className="contacts">
          <h4>PROFESSEUR (DIPLÔMÉE FNEY) : MME VERNARDET </h4>
          <span className="label">Mail : </span>
          <span className="email"> av_vernardet@sfr.fr</span>
        </div>
        <div className="contacts">
          <h4>
            POUR D'AUTRES RENSEIGNEMENTS OU FAIRE UNE SÉANCE D'ESSAI, ENVOYEZ UN
            MAIL À L'ADRESSE :
          </h4>
          <span className="label">Mail : </span>
          <span className="email"> fontyoga@gmail.com</span>
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

export default Yoga;
