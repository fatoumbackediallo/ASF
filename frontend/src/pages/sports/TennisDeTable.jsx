import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const TennisDeTable = () => {
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
    navigate("/volleyball");
  };

  return (
    <div>
      <div className="header tennisDeTable">
        <div className="nom-sport">
          <h1>TENNIS DE TABLE</h1>
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
            Le tennis de table, également connu sous le nom de ping-pong, est un
            sport de raquette rapide et précis qui se joue en simple ou en
            double sur une table divisée par un filet. Les joueurs utilisent des
            raquettes pour frapper une petite balle légère, avec pour objectif
            de marquer des points en rendant la balle difficile à retourner pour
            l'adversaire.
            <br />
            <br />
            Notre section de tennis de table au sein de l'association sportive
            offre un environnement convivial et stimulant pour tous les âges et
            niveaux. Nos entraîneurs expérimentés sont dédiés à développer les
            compétences techniques, la rapidité et la stratégie de jeu, tout en
            favorisant le plaisir et l'esprit sportif.
            <br />
            <br />
            Les séances d'entraînement sont conçues pour améliorer la précision
            des coups, la coordination et la réactivité, avec des exercices
            adaptés pour maîtriser les différents types de frappes et les
            déplacements. Nous organisons également des tournois internes et
            participons à des compétitions locales et régionales, offrant ainsi
            à nos membres l'opportunité de se mesurer à d'autres joueurs et de
            progresser.
            <br />
            <br />
            Que vous soyez débutant souhaitant découvrir les bases du tennis de
            table ou joueur confirmé cherchant à perfectionner votre technique
            et votre stratégie, notre section de tennis de table vous propose
            des programmes adaptés à vos besoins et objectifs. Rejoignez-nous
            pour partager la passion du tennis de table et vivre des moments
            sportifs inoubliables autour de la table !
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Lundi 16 Septembre 2024
                </b>
              </p>
            </div>
          </div>

          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>LIBRE TOUS PUBLICS</h4>
            <p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <b>SALLE TENNIS DE TABLE</b>
              <br />
              Stade du Panorama <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 10H00-17H00
                <br /> <br />
                MARDI : 10H00-13H30
                <br /> <br />
                MARDI : 16H00-22H30
                <br />
                <i className="i-style">
                  (Sauf si compétition CORPO : Entrainement de 16h00 à 18h00 -
                  voir planning affiché en salle)
                </i>
                <br /> <br />
                MERCREDI : 12H00-13H30
                <br /> <br />
                MERCREDI : 18H00-20H30
                <br /> <br />
                MERCREDI : 20H30-22H30
                <br />
                <i className="i-style">(Sur 1/3 de la salle)</i>
                <br /> <br />
                JEUDI : 10H00-18H00
                <br /> <br />
                JEUDI : 18H00-22H30
                <br />
                <i className="i-style">
                  (Sauf si compétition CORPO : Entrainement de 18h00 à 19h30 -
                  voir planning affiché en salle)
                </i>
                <br /> <br />
                VENDREDI : 10H00-17H00
                <br /> <br />
                VENDREDI : 19H30-22H30
                <br />
                <i className="i-style">
                  (Sauf si compétition LIBRE - Voir planning affiché en salle)
                </i>
                <br /> <br />
                SAMEDI : 08H00-12H00
                <br />
                <i className="i-style">(Sur 1/3 de la salle)</i>
                <br /> <br />
                SAMEDI : 12H00-22H30
                <br />
                <i className="i-style">
                  (Sauf si compétition JEUNES : Entrainement de 20h00 à 22h30 -
                  voir planning affiché en salle)
                </i>
                <br />
                <br />
                <b>DIMANCHE : 08H00-19H30</b>
                <br />
                <i className="i-style">
                  (Sauf si compétition JEUNES ou compétition ADULTES :
                  Entrainement de 15h00 à 19h30 - voir planning affiché en
                  salle)
                </i>
              </b>
            </p>
          </div>

          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>
              DIRIGE JEUNES
              <br />
              <i>Selon niveau défini par l'éducateur</i>
            </h4>
            <p>
              <b>SALLE TENNIS DE TABLE</b>
              <br />
              Gymnase du Panorama <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 17H30-19H30</b>
              <br />
              <br />
              <b>MERCREDI : 13H30-15H00</b>
              <br />
              <br />
              <b>MERCREDI : 15H30-16H30</b>
              <br />
              <br />
              <b>MERCREDI : 16H30-18H00</b>
              <br />
              <br />
              <b>VENDREDI : 17H30-19H30</b>
            </p>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>
              DIRIGE DEBUTANTS
              <br />
              ET PERFECTIONNEMENTS ADULTES{" "}
            </h4>
            <p>
              <b>SALLE TENNIS DE TABLE</b>
              <br />
              Gymnase du Panorama <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 20H30-22H30</b>
            </p>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>
              DIRIGE <br />
              ADULTES COMPETITION
            </h4>
            <p>
              <b>SALLE TENNIS DE TABLE</b>
              <br />
              Gymnase du Panorama <br /> 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 20H30-22H30</b>
              <br />
              <i> ( sur 2/3 de la salle)</i>
            </p>
          </div>

          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>LOISIRS FAMILIAL </h4>
            <p>
              <b>SALLE TENNIS DE TABLE</b>
              <br />
              Gymnase du Panorama <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                SAMEDI : 12H00-22H30
                <br />
                <i className="i-style">
                  (Sauf si compétition JEUNES : Entrainement de 20h00 à 22h30 -
                  voir planning affiché en salle)
                </i>
                <br />
                <br />
                DIMANCHE : 08H00-19H30
                <br />
                <i className="i-style">
                  (Sauf si compétition JEUNES ou compétition ADULTES :
                  Entrainement de 15h00 à 19h30 - voir planning affiché en
                  salle)
                </i>
              </b>
            </p>
          </div>

          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>
              HANDI'SPORT <br />
              <i>(Spécifique Accueil de l'Hôpital de jour de Montrouge)</i>
            </h4>
            <p>
              <b>SALLE TENNIS DE TABLE</b>
              <br />
              Gymnase du Panorama <br /> 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI : 14H00-15H30</b>
            </p>
          </div>
          {/* <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>COMPÉTITIONS CORPORATIVES</h4>
            <p>
              <b>SALLE TENNIS DE TABLE, 1ER ÉTAGE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI 18H30-22H20</b>
            </p>
          </div> */}
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
              </li> */}
              <li>
                <h4 onClick={handleToggle} className="menu-deroulant">
                  PAIEMENTS (Bénéficiaires d'aides, chèques et Espèces)
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
                    <p>
                      (En plusieurs fois voir avec la section - à l'ordre de
                      l'ASF)
                    </p>

                    <h4>Par espèces : </h4>
                    <p>(en plusieurs fois, voir avec la section)</p>
                    <div className="remise">
                      <h4>
                        La remise se fera sur place auprès des bénévoles de la
                        section :
                      </h4>
                    </div>
                    <p>
                      Lors de la journée «portes ouvertes», au Panorama, le
                      <b className="gras"> samedi 7 septembre</b> de 14 h 00 à
                      18 h 00,
                    </p>
                    <p>ou</p>
                    <p>
                      Au Forum des Associations le
                      <b className="gras"> 08 septembre</b> au Gymnase du Parc
                      entre 10h00 et 18h00,
                    </p>
                    <p>ou</p>
                    <p>
                      Lors de la première séance d'accueil, à partir du
                      <b className="gras"> lundi 9 septembre 2024</b>.
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="ligne-cotisations">
          <div className="case-cotisation">
            <p>
              <b>VETERANS (+ 60 ans)</b>
              <br />
              <i>né avant le 01/01/1964</i>
            </p>
            <p className="prix-cotisation">
              <b>170€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>SENIORS</b>
              <br />
              <i>
                nés du 01/01/1964
                <br /> au 31/12/2005
              </i>
            </p>
            <p className="prix-cotisation">
              <b>225€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>JUNIORS</b>
              <br />
              <i>
                nés du 01/01/2006
                <br /> au 31/12/2009
              </i>
            </p>

            <p className="prix-cotisation">
              <b>185€</b>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>CADETS</b>
              <br />
              <i>
                nés du 01/01/2010
                <br /> au 31/12/2011
              </i>
            </p>
            <p>
              <i>185€</i>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>MINIMES</b>
              <br />
              <i>
                nés du 01/01/2012
                <br /> au 31/12/2013
              </i>
            </p>
            <p className="prix-cotisation">
              <b>185€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>BENJAMINS </b>
              <br />
              <i>
                nés du 01/01/2014
                <br /> au 31/12/2015
              </i>
            </p>
            <p className="prix-cotisation">
              <b>160€</b>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>POUSSINS </b>
              <br />
              <i>nés après le 31/12/2015</i>
            </p>
            <p className="prix-cotisation">
              <b>160€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>CORPORATIFS </b>
            </p>
            <p className="prix-cotisation">
              <b>160€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>ETUDIANTS / DE </b>
            </p>
            <p className="prix-cotisation">
              <b>150€</b>
              <br />
              <i className="i-style-cotisations">Sur justificatif</i>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>LOISIRS FAMILIAL </b>
            </p>
            <p className="prix-cotisation">
              <b>150€</b>
              <br />
              <i className="i-style-cotisations">
                (De 2 à 6 personnes - Forfait)
              </i>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>EXTERIEURS </b>
            </p>
            <p className="prix-cotisation">
              <b>130€</b>
              <br />
              <i className="i-style-cotisations">(Licenciés autres clubs)</i>
            </p>
          </div>
        </div>
        <div className="ligne-cotisations">
          <h4>
            Pour participer aux compétitions individuelles, à régler en sus pour
            les :
          </h4>
        </div>
        <div className="ligne-cotisations">
          <div className="case-cotisation">
            <p>
              <b>SENIORS - VETERANS</b>
            </p>
            <p className="prix-cotisation">
              <b>58€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>JUNIORS - CADETS - MINIMES </b>
            </p>
            <p className="prix-cotisation">
              <b>50€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>BENJAMINS - POUSSINS </b>
            </p>
            <p className="prix-cotisation">
              <b>35€</b>
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

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PRESIDENT : MOREAU BERNARD </h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> mb.moreau@yahoo.fr</span>
          </div>
        </div>
        <div className="contacts">
          <h4>SECRETAIRE/CORRESPONDANT SPORTIF : RICHARD REMI </h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> richard.r13p@free.fr</span>
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
            <h4 className="h4-button-sportPages"> Volleyball</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TennisDeTable;
