import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/sports.css";

const Karate = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div>
      <div className="header karate">
        <div className="nom-sport">
          <h1>KARATE</h1>
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
            « La voie de la main vide »<br />
            <br />
            Le Karaté est un art martial Japonais qui consiste en l’utilisation
            de techniques à la fois offensives et défensives faisant appel à
            toutes les parties du corps : mains, pieds, etc.
            <br />
            <br />
            Le Karaté enfant est un véritable outil d’éveil et d’éducation. Les
            enchainements de techniques lui permettent de développer réflexes,
            coordination et de se repérer dans l’espace. La concentration,
            inhérente au Karaté, permet à l’enfant de canaliser son énergie. Son
            évolution sportive et la socialisation due à la pratique augmente sa
            confiance en lui.
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
              ENFANTS <br />
              <i>(6 - 14 ans)</i>
            </h4>
            <p>
              <b>DOJO 1 </b>
              <br />
              Gymnase Jean Fournier <br />7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 18H00-19H00 <br />
                <br />
                JEUDI : 18H00 - 19H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              ADOS / ADULTES
              <br />
              <i>15 ans et +</i>
            </h4>
            <p>
              <b>DOJO 1</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
            </p>
            <p>
              <b>
                LUNDI : 19H00-20H30
                <br />
                <br />
                JEUDI : 19H00 - 20H30
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
                      a. Section concernée + Nom et Prénom de l'enfant si
                      inscription d'un mineur ou de l'adulte inscrit{" "}
                    </li>
                    <li>
                      b. Exemple : ASF VOLLEY - enfant AZERTYUI Noémie ou ASF
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
                      Au Forum des Associations le{" "}
                      <b className="gras"> 08 septembre</b> au Gymnase du Parc
                      entre 10h00 et 18h00
                    </p>
                    <p>OU</p>
                    <p>En début ou fin de séance d'entraînement.</p>
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
                  ENFANTS
                  <br />
                  <i>(6 - 14 ans)</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>240€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  Ados / Adultes
                  <br />
                  <i>(15 ans et +)</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>260€</b>
              </p>
            </div>
          </div>
          <h4>
            <b>LICENSE COMPRISE: + 40€</b>
          </h4>
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
            <p className="p-inscription">
              Remise de 10% à partir du 2e enfant avec le code Mon Club
              FRATERIE10
            </p>
          </div>
        </div>

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PROFESSEUR : IDIR GUEDJALI </h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> guedjaliidir@yahoo.fr</span>
          </div>
          <br />
          <div>
            <span className="label">Téléphone : </span>
            <span className="email">07 62 18 25 04</span>
          </div>
        </div>
        <div className="contacts">
          <h4>PRESIDENT : PIERRE-MATHIEU BESSI </h4>
          {/* <div>
            <span className="label">Mail : </span>
            <span className="email"> guedjaliidir@yahoo.fr</span>
          </div> */}
          <div>
            <span className="label">Téléphone : </span>
            <span className="email">06 12 04 30 36</span>
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
            <Link to="/kungfu" className="link-button-sportPages">
              <h4 className="h4-button-sportPages">Page suivante</h4>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Karate;
