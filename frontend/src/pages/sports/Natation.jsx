import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const Natation = () => {
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
    navigate("/parkour");
  };

  return (
    <div>
      <div className="header natation">
        <div className="nom-sport">
          <h1>NATATION</h1>
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
            La natation est un sport complet qui allie endurance, force et
            technique. Pratiquée dans l'eau, elle offre une variété de styles de
            nage tels que la brasse, le crawl, le dos et le papillon, permettant
            de travailler l'ensemble des muscles du corps tout en améliorant la
            condition physique et la santé cardiovasculaire. La natation est
            également reconnue pour ses bienfaits relaxants et thérapeutiques.
            <br />
            <br />
            Notre section de natation au sein de l'association sportive propose
            un cadre accueillant et professionnel pour tous les âges et niveaux.
            Nos entraîneurs qualifiés sont dédiés à développer les compétences
            techniques et l'endurance, tout en instillant une passion pour la
            natation.
            <br />
            <br />
            Les séances d'entraînement sont structurées pour progresser de
            manière individuelle, tout en offrant des programmes adaptés aux
            différents niveaux de compétence. Nous organisons également des
            compétitions internes et participons à des compétitions locales et
            régionales, offrant ainsi à nos membres l'opportunité de se mesurer
            à d'autres nageurs et de progresser.
            <br />
            <br />
            Sachant déjà nager, notre section de natation vous propose des
            programmes adaptés à vos besoins et objectifs. Rejoignez-nous pour
            partager la passion de la natation et vivre des moments inoubliables
            dans l’eau !
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Lundi 30 Septembre 2024
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>
              BÉBÉS NAGEURS <br />
              <i>(6 mois à 3 ans)</i>
            </h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                SAMEDI : 09H00-09H30
                <br />
                <br />
                SAMEDI : 9H30-10H00
                <br />
                <br />
                SAMEDI : 10H00-10H30
                <br />
                <br />
                SAMEDI : 10H30-11H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              PETITS BAIGNEURS
              <br /> <i>(4 à 5 ans)</i>
            </h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                SAMEDI : 09H00-09H45
                <br />
                <br />
                SAMEDI : 9H45-10H30
              </b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              JEUNES
              <br />
              <i>(6 à 9 ans)</i>{" "}
            </h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                JEUDI : 17H00-18H00
                <br />
                <br />
                JEUDI : 18H00-19H00
                <br />
                <br />
                VENDREDI : 17H00-18H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              JEUNES <br />
              <i>(9 à 18 ans)</i>
            </h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 18H15-19H15
                <br />
                <br />
                MARDI : 19H00-20H00
              </b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              ADULTES
              <br />
              <i>(18 ans et +)</i>{" "}
            </h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 19H15-20H15
                <br />
                <br />
                MARDI : 20H00-21H00
                <br />
                <br />
                JEUDI : 19H00-20H00
                <br />
                <br />
                JEUDI : 20H00-21H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>HANDISPORT JEUNES</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 17H00-18H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>HANDISPORT ADULTES</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 17H00-18H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>AQUAGYM</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI : 19H15-20H00
                <br />
                <br />
                MERCREDI : 20H00-20H45
                <br />
                <br />
                MERCREDI : 20H45-21H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>AQUABIKE</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI : 09H00-09H30
                <br />
                <br />
                MERCREDI : 09H30-10H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>LES AÎNÉS</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 11H30-12H30
                <br />
                <br />
                LUNDI : 12H30-13H30
                <br />
                <br />
                LUNDI : 16H00-17H00
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
                      inscription d'un mineur ou de l'adulte inscrit
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
                    <p>(2 fois maximum - à l'ordre de l'ASF) </p>

                    <h4>Par espèces : </h4>
                    <p>(en 1 seule fois)</p>
                    <div className="remise">
                      <h4>La remise se fera : </h4>
                    </div>
                    <p>
                      <b className="gras">
                        sur place auprès des bénévoles de la section !
                      </b>
                    </p>
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
                <b>
                  BÉBÉS NAGEURS <br />
                  <i>FONTENAISIENS</i>
                </b>
                <br />
                <i>(6 mois à 3 ans)</i>
              </p>
              <p className="prix-cotisation">
                <b>265€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  BÉBÉS NAGEURS
                  <br />
                  <i>HORS COMMUNE</i>{" "}
                </b>
                <br />
                <i>(6 mois à 3 ans)</i>
              </p>
              <p className="prix-cotisation">
                <b>285€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  PETITS BAIGNEURS
                  <br />
                  <i>FONTENAISIENS</i>
                </b>
                <br />
                <i>(4 à 5 ans)</i>
              </p>
              <p className="prix-cotisation">
                <b>155€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>
                  PETITS BAIGNEURS <br />
                  <i>HORS COMMUNES</i>
                </b>
                <br />
                <i>(4 à 5 ans)</i>
              </p>
              <p className="prix-cotisation">
                <b>175€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  JEUNES 6 à 18 ans
                  <br />
                  <i>FONTENAISIENS</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>155€</b>
                <br />
                <i className="i-style-cotisations">(1h/semaine)</i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  JEUNES 6 à 18 ans <br />
                  <i>HORS COMMUNE</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>165€</b>
                <br />
                <i className="i-style-cotisations">(1h/semaine)</i>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>HANDISPORT JEUNES</b>
              </p>
              <p className="prix-cotisation">
                <b>130€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>HANDISPORT ADULTES</b>
              </p>
              <p className="prix-cotisation">
                <b>160€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  ADULTES <br />
                  <i>FONTENAISIENS</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>175€</b>
                <br />
                <i className="i-style-cotisations">(1h/semaine)</i>
              </p>

              <p className="prix-cotisation">
                <b>245€</b>
                <br />
                <i className="i-style-cotisations">(2h/semaine)</i>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>
                  ADULTES <br />
                  <i>HORS COMMUNE</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>210€</b>
                <br />
                <i className="i-style-cotisations">(1h/semaine)</i>
              </p>

              <p className="prix-cotisation">
                <b>275€</b>
                <br />
                <i className="i-style-cotisations">(2h/semaine)</i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  AQUAGYM
                  <br />
                  <i>FONTENAISIENS</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>195€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  AQUAGYM <br />
                  <i>HORS COMMUNE</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>215€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>
                  AQUABIKE
                  <br />
                  <i>FONTENAISIENS</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>420€</b>
                <br />
                <br />
                <b>140€ </b>
                <br />
                <i className="i-style-cotisations">(Trimestre)</i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  AQUABIKE
                  <br />
                  <i>HORS COMMUNE</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>480€</b>
                <br />
                <br />
                <b>160€</b>
                <br />
                <i className="i-style-cotisations">(Trimestre)</i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  LES AÎNÉS <br />
                  <i>FONTENAISIENS</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>165€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  LES AÎNÉS
                  <br />
                  <i>HORS COMMUNE</i>
                </b>
              </p>
              <p className="prix-cotisation">
                <b>185€</b>
              </p>
            </div>
          </div>
        </div>

        <h2>INSCRIPTIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="bloc">
          <h4 className="h4">
            INSCRIPTION ET PAIEMENT A LA PISCINE MUNICIPALE :
          </h4>
          <div>
            <h4 className="h4-inscriptionNatation">
              AUCUN REMBOURSEMENT NE SERA EFFECTUE EN COURS DE SAISON.
              <br />
              CERTIFICAT MEDICAL OBLIGATOIRE !
            </h4>
            <div>
              <b>NATATION JEUNES</b>
              <br />
              <i>Né(e) entre 2009 et 2015 : Lundi 09 Septembre de 18h à 20h.</i>
              <br />
              <i>Né(e) entre 2016 et 2018 : Jeudi 12 Septembre de 17 à 19h.</i>
            </div>
            <div>
              <b>AQUAGYM AINES</b>
              <br />
              <i>
                Feuille d'inscription à disposition à l'accueil de la piscine.
              </i>
            </div>
            <div>
              <b>Autres catégories : en ligne</b>
            </div>
          </div>
        </div>
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
        {/* <div className="bloc"> */}
        {/* <h4 className="h4">
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
        </div> */}
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
          <h4>PRÉSIDENT : BRUNO GUIDAL </h4>
          <span className="label">Mail : </span>
          <span className="email"> asf-natation@hotmail.fr</span>
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

export default Natation;
