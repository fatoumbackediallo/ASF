import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const BoxeThailandaise = () => {
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
    navigate("/capoeira");
  };

  return (
    <div>
      <div className="header boxe-thailandaise">
        <div className="nom-sport">
          <h1 className="h1-mon-sport">BOXE THAILANDAISE</h1>
        </div>
        <div className="saison">
          <h2 className="h2-saisons">SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2 className="h2">QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>COURS ENSEIGNÉS</h4>
          <p>
            Cet Art Martial associant des techniques de coups de pieds et de
            coups de poings est la boxe la plus complète pour vous défouler et
            apprendre à vous défendre dans n'importe quelle situation. <br />
            Cet Art Martial permet d'avoir des enchaînements très variés et un
            art du combat à la fois dense et complet.
            {/* <br />
            La section s'adresse à tous les sportifs souhaitant apprendre la
            discipline dans une ambiance conviviale. Débutants ou confirmés,
            tous les cours sont mixtes et adaptés au niveau de chacun */}
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2 className="h2">ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Mardi 10 Septembre 2024
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>
              ADOS/ADULTES
              <br /> 12 ANS et +
            </h4>
            <p>
              <b>Gymnase Jean Fournier</b>
              <br />7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI : 20H00-21H30
                <br />
                <br />
                SAMEDI : 16H00 - 17H30
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
                      b. Exemple : ASF VOLLEY - enfant AZEERTYUI Noémie ou ASF
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
              <b>ADOS / ADULTES</b>
            </p>
            <p>
              <i>(12 ans et +)</i>
            </p>
            <p className="prix-cotisation">
              <b>300€</b>
            </p>
            <i>2 cours / semaine</i>
          </div>
        </div>
        <h4 className="h4-inscription">
          Remise de 10% à partir du 2ème enfant lors de l'inscription en ligne
          sur MonClub avec le code de remise FRATERIE10
        </h4>

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
          <h4>ASF ATHLÉTISME</h4>
          <div className="infos-contact">
            <span className="label">Mail : </span>
            <span className="email">
              asftkd@gmail.com <br />
              <br />
            </span>

            <span className="label">Téléphone : </span>
            <span className="email">
              07 60 62 91 21
              <br />
              <br />
            </span>

            <span className="label">Site Web : </span>
            <span className="email">
              www.sptrainingfontenayauxroses.com
              <br />
              <br />
            </span>

            <span className="label">Instagram : </span>
            <span className="email"> asftaekwondo</span>
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
            <h4 className="h4-button-sportPages">Capoeira</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxeThailandaise;
