import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/sports.css";

const Athletisme = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div>
      <div className="header athletisme">
        <div className="nom-sport">
          <h1>ATHLÉTISME</h1>
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
            L'athlétisme, souvent considéré comme la reine des sports, englobe
            une variété de disciplines physiques incluant la course à pied, le
            saut, et le lancer. Ce sport polyvalent permet à chacun de trouver
            une activité correspondant à ses capacités et préférences, qu'il
            s'agisse de courir sur des pistes, de sauter en hauteur ou en
            longueur, ou encore de lancer des objets tels que le javelot ou le
            disque. <br />
            <br />
            Notre section d'athlétisme au sein de l'association sportive offre
            un environnement accueillant et dynamique pour tous les âges et
            niveaux. Nos entraîneurs qualifiés mettent un point d'honneur à
            développer à la fois les compétences techniques et la passion pour
            ce sport complet. Les entraînements sont structurés pour favoriser
            la progression individuelle tout en cultivant un esprit d'équipe
            fort et solidaire.
            <br />
            <br />
            Que vous soyez débutant cherchant à découvrir une nouvelle activité,
            ou athlète confirmé visant à améliorer vos performances, notre
            section d'athlétisme vous propose des programmes adaptés et des
            opportunités de participation à des compétitions locales et
            régionales. Rejoignez-nous pour vivre des moments sportifs
            inoubliables et partager notre passion pour l’athlétisme !
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
              BABY ATHLE <br />
              2019 à 2020 (4 - 6 ans)
            </h4>
            <p>
              <b>SALLE TENNIS DE TABLE</b>
              <br />
              Stade du Panorama
              <br /> 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI : 09H00-09H45</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              ENFANTS <br />
              2014 à 2018 (6 -10 ans)
            </h4>
            <p>
              <b>PISTE ET TERRAIN D'HONNEUR</b>
              <br />
              Stade du Panorama <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI : 16H30-18H00
                <br />
                <i className="i-style">ou</i>
                <br />
                SAMEDI : 10H15 - 11H45
              </b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              SPRINT ADULTES
              <br />
              2005 ET AVANT
            </h4>
            <p>
              <b>PISTE</b>
              <br />
              Stade du Panorama
              <br /> 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>Forêt de Clamart</b>
            </p>
            <p>
              <b>
                LUNDI - VENDREDI : 18H30-20H00
                <br />
                <br />
                <br />
                <br />
                <br />
                SAMEDI : 10H30-12H30
              </b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              DEMI-FOND / FOND
              <br />
              RUNNING
              <br />
              MARCHE ATHLETIQUE
              <br />
              LOISIRS
              <br />
              2005 ET AVANT
            </h4>
            <p>
              <b>PISTE ET TERRAIN D'HONNEUR</b>
              <br />
              Stade du Panorama
              <br /> 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>Forêt de Clamart</b>
            </p>
            <p>
              <b>
                LUNDI - VENDREDI : 18H30-20H00
                <br />
                <br />
                <br />
                <br />
                <br />
                DIMANCHE : 11H00-12H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              JEUNES
              <br />
              2012 à 2013
              <br />
              (11 - 12 ans)
            </h4>
            <p>
              <b>PISTE ET TERRAIN D'HONNEUR</b>
              <br />
              Stade du Panorama
              <br /> 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI - VENDREDI :
                <br /> 18H30-20H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              JEUNES
              <br />
              2010 à 2011
              <br />
              (13 - 14 ans)
            </h4>
            <p>
              <b>PISTE ET TERRAIN D'HONNEUR</b>
              <br />
              Stade du Panorama
              <br /> 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI - VENDREDI :
                <br /> 18H30-20H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              CADETS - JUNIORS (Loisirs)
              <br />
              2006 à 2009
              <br /> (15 - 18 ans)
            </h4>
            <p>
              <b>PISTE ET TERRAIN D'HONNEUR</b>
              <br />
              Stade du Panorama
              <br /> 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI - VENDREDI :
                <br /> 18H30-20H00
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
                    <p>Lors de la première séance d'entrainement.</p>
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
                ADULTES LOISIRS
                <br />
                (2005 et Avant)
              </b>
            </p>
            <p className="prix-cotisation">
              <b>240€</b>
              <br />
              <i className="i-style-cotisations">Nouveau</i>
            </p>

            <p className="prix-cotisation">
              <b>205€</b>
              <br />
              <i className="i-style-cotisations">Ancien</i>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>
                JEUNES <br />
                (2010-2013)
              </b>
            </p>
            <p className="prix-cotisation">
              <b>240€</b>
              <br />
              <i className="i-style-cotisations">Nouveau</i>
            </p>

            <p className="prix-cotisation">
              <b>205€</b>
              <br />
              <i className="i-style-cotisations">Ancien</i>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>CADETS - JUNIORS (2006-2009)</b>
            </p>
            <p className="prix-cotisation">
              <b>240€</b>
              <br />
              <i className="i-style-cotisations">Nouveau</i>
            </p>

            <p className="prix-cotisation">
              <b>205€</b>
              <br />
              <i className="i-style-cotisations">Ancien</i>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>
                ENFANTS <br />
                (2014-2018)
              </b>
            </p>
            <p className="prix-cotisation">
              <b>225€</b>
              <br />
              <i className="i-style-cotisations">Nouveau</i>
            </p>

            <p className="prix-cotisation">
              <b>200€</b>
              <br />
              <i className="i-style-cotisations">Ancien</i>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>
                BABY ATHLE <br />
                (2019 - 2020)
              </b>
            </p>
            <p className="prix-cotisation">
              <b>200€</b>
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
          <h4>ASF ATHLÉTISME</h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> asfathletisme2@gmail.com</span>
          </div>
          <div>
            <span className="label">Site Web : </span>
            <span className="email"> www.asfathletisme.free.fr</span>
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
            <Link to="/badminton" className="link-button-sportPages">
              <h4 className="h4-button-sportPages">Page suivante</h4>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Athletisme;
