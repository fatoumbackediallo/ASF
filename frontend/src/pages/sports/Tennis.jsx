import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const Tennis = () => {
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
    navigate("/tennisdetable");
  };

  return (
    <div>
      <div className="header tennis">
        <div className="nom-sport">
          <h1>TENNIS</h1>
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
            Le tennis est un sport de raquette populaire et polyvalent qui se
            joue en simple ou en double sur des terrains en dur, en gazon ou en
            terre battue. Ce sport combine technique, endurance et stratégie,
            avec pour objectif de frapper une balle au-dessus d’un filet pour
            qu’elle atterrisse dans le terrain adverse, rendant la balle
            difficile à retourner pour l’adversaire.
            <br />
            <br />
            Notre section de tennis au sein de l'association sportive offre un
            environnement accueillant et dynamique pour tous les âges et
            niveaux. Nos entraîneurs qualifiés sont dédiés à développer les
            compétences techniques, la condition physique et la stratégie de
            jeu, tout en encourageant le fair-play et la passion pour le tennis.
            <br />
            <br />
            Les séances d'entraînement sont conçues pour progresser
            individuellement, avec des exercices adaptés pour améliorer le
            service, le coup droit, le revers, et le jeu de jambes. Nous
            organisons également des tournois internes et participons à des
            compétitions locales et régionales, offrant ainsi à nos membres
            l'opportunité de se mesurer à d'autres joueurs et de progresser.
            <br />
            <br />
            Que vous soyez débutant cherchant à découvrir les bases du tennis ou
            joueur expérimenté visant à perfectionner votre technique et votre
            stratégie, notre section de tennis vous propose des programmes
            adaptés à vos besoins et objectifs. Rejoignez-nous pour partager la
            passion du tennis et vivre des moments sportifs inoubliables sur le
            court !
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
            <h4>TOUTES LES CATÉGORIES</h4>
            <p>
              <b>COURTS COUVERTS PANORAMA</b>
              <br />
              27 Avenue du General LECLERC, 92260 Fontenay-aux-Roses
              <br />
              <br /> <br /> <br />
              <b>TENNIS MUNICIPAUX</b>
              <br />
              27 Avenue du General LECLERC, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 17H00-22H00
                <br /> <br />
                MARDI : 17H00-22H00
                <br /> <br />
                JEUDI : 17H00-22H00
                <br /> <br />
                VENDREDI : 17H00-22H00
                <br /> <br />
                MERCREDI : 09H00-22H00
                <br /> <br />
                SAMEDI : 09H00-18H00
                <br />
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>MINI TENNIS</h4>
            <p>
              <b>SALLE DE TENNIS DE TABLE</b>
              <br />
              Stade du Panorama <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI : 09H45-11H45</b>
            </p>
          </div>
        </div>

        <h2>COTISATIONS</h2>
        <hr className="ligne-titre"></hr>

        <div className="paiement">
          <h3>MOYENS DE PAIEMENT</h3>
          <div>
            <ul className="ul-paiement">
              {/* <li>
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
              </li> */}
              <li>
                <h4 onClick={handleToggle} className="menu-deroulant">
                  PAIEMENTS (Bénéficiaires d'aides) - PAIEMENT UNIQUEMENT PAR
                  CHEQUES OU ESPECES AUPRES DE LA SECTION !
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
                    <p>Auprès de la section aux Tennis Municipaux.</p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="cotisations">
          <h4>
            TOUTES LES INFORMATIONS SONT DISPONIBLES SUR LE SITE DE L'ASF TENNIS
            https.//www.asftennis.com
          </h4>
        </div>

        <h2>INSCRIPTIONS</h2>
        <hr className="ligne-titre"></hr>
        {/* <div className="bloc">
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
        </div> */}
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
              <a href="https://www.asftennis.com/preinscriptions">
                LIEN D'INSCRIPTION
              </a>
            </span>
          </div>
        </div>

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>RESPONSABLE ADMINISTRATIVE : </h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> contact@asftennis.com</span>
          </div>
          <div>
            <span className="label"> Téléphone : </span>
            <span className="email"> 01 46 60 86 21</span>
          </div>
          <div>
            <span className="label">Site Web : </span>
            <span className="email"> www.asftennis.com</span>
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

export default Tennis;
