import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const TaeKwonDo = () => {
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
    navigate("/tennis");
  };

  return (
    <div>
      <div className="header taekwondo">
        <div className="nom-sport">
          <h1>TAE KWON DO</h1>
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
            La section ASF Taekwondo a développé une catégorie Baby Taekwondo
            pour les enfants âgés de 3 à 5 ans. À cet âge où l’énergie est
            parfois débordante, le Taekwondo représente une vraie solution. En
            effet, cet art martial permet d’apprendre à se mouvoir plus
            efficacement et aborde les techniques de base du Taekwondo. Ainsi,
            parcours de motricité, assouplissements, premières frappes sur cible
            et légers renforcements musculaires sont au programme des séances
            pour les petits baptisés « Babys ninjas ». Cet Art Martial s'adresse
            aussi aux plus grands, en favorisant l’apprentissage par la
            technique et le combat.
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
              BABY NINJAS
              <br />
              <i>(3 - 5 ANS)</i>
            </h4>
            <p>
              <b>Gymnase de la Roue</b>
              <br />
              10 Rue des Hautes Sorrières, 92260 Fontenay aux Roses
              <br />
              <br />
              <br />
              <b>Gymnase Jean Fournier</b>
              <br />
              7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <br />
              <b>Salle de danse</b>
              <br />
              Ecole du Parc, 6 Av. du Parc, 92260 Fontenay-aux-Roses,
            </p>
            <p>
              <b>
                LUNDI : 17H30-18H30
                <br />
                <i className="i-style">Gymnase de la Roue</i>
                <br />
                <br />
                MERCREDI : 15H-16H
                <br />
                <i className="i-style">Gymnase Jean Fournier</i>
                <br />
                <br />
                MERCREDI : 16H30-17H30
                <br />
                <i className="i-style">Gymnase Jean Fournier</i>
                <br />
                <br />
                SAMEDI : 10H15-11H15
                <br />
                <i className="i-style">Gymnase Jean Fournier</i>
                <br />
                <br />
                SAMEDI : 11H15-12H15
                <br />
                <i className="i-style">Gymnase Jean Fournier</i>
                <br />
                <br />
                JEUDI : 17H-18H
                <br />
                <i className="i-style">Salle de Danse</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              GRANDS NINJAS <br />
              <i>(6 - 10 ANS)</i>
            </h4>
            <p>
              <b>Gymnase de la Roue</b>
              <br />
              10 Rue des Hautes Sorcières, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <br />
              <b>Gymnase Jean Fournier</b>
              7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <br />
              <b>SALLE DE DANSE</b>
              <br />
              Ecole du Parc, 6 Av. du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 18H30-19H30
                <br />
                <i className="i-style">Gymnase de la Roue</i>
                <br />
                <br />
                MERCREDI : 14H-15H
                <br />
                <i className="i-style">Gymnase Jean Fournier</i>
                <br />
                <br />
                MERCREDI 17H30-18H30
                <br />
                <i className="i-style">Gymnase Jean Fournier</i>
                <br />
                <br />
                VENDREDI : 18H30-19H30
                <br />
                <i className="i-style">Gymnase Jean Fournier</i>
                <br />
                <br />
                SAMEDI : 14H00 - 15H00
                <br />
                <i className="i-style">Gymnase Jean Fournier</i>
                <br />
                <br />
                JEUDI : 18H00 - 19H00
                <br />
                <i className="i-style">Salle de danse</i>
              </b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              ADOS
              <br />
              <i>11 - 15 ANS</i>
            </h4>
            <p>
              <b>Gymnase Jean Fournier</b>
              <br />7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI : 18H30-19H30
                <br />
                <br />
                VENDREDI : 19H30-21H00
                <br />
                <br />
                SAMEDI : 15H00-16H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              ADOS - ADULTES
              <br />
              <i>16 ANS ET +</i>
            </h4>
            <p>
              <b>Gymnase de la Roue</b>
              <br />
              10 Rue des Hautes Sorcières, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>Gymnase Jean Fournier</b>
              <br />7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 19H30-21H00
                <br />
                <i className="i-style">Gymnase de la Roue</i>
                <br />
                <br />
                MERCREDI : 19H30-21H00
                <br />
                <i className="i-style">Gymnase Jean Fournier</i>
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
                    <p>
                      Auprès de la section, lors de la première séance
                      d'entraînement.
                    </p>
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
                  BABY NINJA
                  <br />
                  <i>3 À 5 ANS</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>270€</b>
              </p>
              <br />
              <i className="i-style">(1 cours/semaine)</i>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  GRANDS NINJAS
                  <br />
                  <i>6 À 10 ANS</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>270€</b>
              </p>
              <br />
              <i className="i-style">(1 cours/semaine)</i>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  ADOS <br />
                  <i>11 À 15 ANS</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>300€</b>
              </p>
              <br />
              <i className="i-style">(2 cours/semaine)</i>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  ADOS - ADULTES
                  <br />
                  <i>16 ANS ET +</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>330€</b>
              </p>
              <br />
              <i className="i-style">(3 cours/semaine)</i>
            </div>
          </div>
          <h4 className="h4-inscription">
            REMISE DE 10% À PARTIR DU 2EME ENFANT LORS DE L'INSCRIPTION EN LIGNE
            SUR MONCLUB AVEC LE CODE DE REMISE FRATRIE10
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
          </div>
        </div>

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>ASF TAE KWON DO</h4>
          <div>
            <div>
              <span className="label">Mail : </span>
              <span className="email"> asftkd@gmail.com</span>
            </div>
            <br />
            <div>
              <span className="label">Téléphone : </span>
              <span className="email">07 60 62 91 21</span>
            </div>
            <br />
            <div>
              <span className="label">Site Web : </span>
              <span className="email"> www.sptrainingfontenayauxroses.com</span>
            </div>
            <br />
            <div>
              <span className="label">Instagram : </span>
              <span className="email"> asftaekwondo</span>
            </div>
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

export default TaeKwonDo;
