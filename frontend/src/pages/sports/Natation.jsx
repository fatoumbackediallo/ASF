import React, { useState } from "react";
import "../../styles/sports.css";

const Natation = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
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
            Que vous soyez novice souhaitant apprendre les bases de la natation
            ou nageur expérimenté cherchant à perfectionner votre technique et
            votre vitesse, notre section de natation vous propose des programmes
            adaptés à vos besoins et objectifs. Rejoignez-nous pour partager la
            passion de la natation et vivre des moments inoubliables dans l’eau
            !
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
            <h4>BÉBÉS NAGEURS 3 À 6 MOIS</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                SAMEDI 09H00-09H30
                <br />
                SAMEDI 9H30-10H00
                <br />
                SAMEDI 10H00-10H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>PETITS BAIGNEURS</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                SAMEDI 09H00-09H45
                <br />
                SAMEDI 9H45-10H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>JEUNES 9 À 18 ANS</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 18H15-19H15
                <br />
                MARDI 19H00-20H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>JEUNES 6 À 9 ANS</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                JEUDI 17H00-18H00
                <br />
                JEUDI 18H00-190H00
                <br />
                VENDREDI 17H00-18H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>HANDISPORT JEUNES</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI 17H00-18H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>HANDISPORT ADULTES</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 19H15-20H15
                <br />
                MARDI 20H00-21H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>AQUAGYM</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 19H15-20H00
                <br />
                MERCREDI 20H00-20H45
                <br />
                MERCREDI 20H45-21H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>AQUA BIKE</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 09H00-09H30
                <br />
                MERCREDI 09H30-10H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>LES AÎNÉS</h4>
            <p>
              <b>PISCINE MUNICIPALE DE FONTENAY</b>
              <br />
              <br />
              22 rue jean jaurès, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 11H30-12H30
                <br />
                LUNDI 12H30-13H30
                <br />
                LUNDI 16H00-17H00
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
                    <p>
                      Auprès de l'Accueil / Secrétariat de l'ASF - 10 place du
                      château Ste Barbe - 2ème Étage - Porte 7
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
                <b>BÉBÉS NAGEURS FONTENAISIENS</b>
              </p>
              <p className="prix-cotisation">
                <b>260€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>BÉBÉS NAGEURS HORS COMMUNE</b>
              </p>
              <p className="prix-cotisation">
                <b>280€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>PETITS BAIGNEURS FONTENAISIENS</b>
              </p>
              <p className="prix-cotisation">
                <b>150€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>PETITS BAIGNEURS HORS COMMUNE</b>
              </p>
              <p className="prix-cotisation">
                <b>170€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>JEUNES 6 À 18 ANS FONTENAISIENS</b>
              </p>
              <p className="prix-cotisation">
                <b>150€</b>
              </p>
              <p>(1H PAR SEMAINE)</p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>JEUNES 6 À 18 ANS HORS COMMUNE</b>
              </p>
              <p className="prix-cotisation">
                <b>160€</b>
              </p>
              <p>(1H PAR SEMAINE)</p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>HANDISPORT JEUNES</b>
              </p>
              <p className="prix-cotisation">
                <b>125€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>HANDISPORT ADULTES</b>
              </p>
              <p className="prix-cotisation">
                <b>155€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>ADULTES FONTENAISIENS </b>
              </p>
              <p className="prix-cotisation">
                <b>170€</b>
              </p>
              <p>(1H PAR SEMAINE)</p>
              <p className="prix-cotisation">
                <b>240€</b>
              </p>
              <p>(2H PAR SEMAINE)</p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>ADULTES HORS COMMUNE</b>
              </p>
              <p className="prix-cotisation">
                <b>205€</b>
              </p>
              <p>(1H PAR SEMAINE)</p>
              <p className="prix-cotisation">
                <b>270€</b>
              </p>
              <p>(2H PAR SEMAINE)</p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>AQUAGYM FONTENAISIENS</b>
              </p>
              <p className="prix-cotisation">
                <b>190€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>AQUAGYM HORS COMMUNE</b>
              </p>
              <p className="prix-cotisation">
                <b>210€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>AQUA BIKE FONTENAISIENS</b>
              </p>
              <p className="prix-cotisation">
                <b>420€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>AQUA BIKE HORS COMMUNE</b>
              </p>
              <p className="prix-cotisation">
                <b>480€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>LES AÎNÉS FONTENAISIENS</b>
              </p>
              <p className="prix-cotisation">
                <b>162€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>LES AÎNÉS HORS COMMUNE</b>
              </p>
              <p className="prix-cotisation">
                <b>183€</b>
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
              <a href=" https://admin.sportsregions.fr/media/uploaded/sites/12869/kcupload/files/Dispositif%20Certificat%20m%C3%A9dical%20pour%20le%20sport%20(1)%20-%20Informations%20adh%C3%A9rent(1).pdf">
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
          <h4>PRÉSIDENT BRUNO GUIDAL : </h4>
          <span className="label">Mail : </span>
          <span className="email"> asf-natation@hotmail.fr</span>
        </div>
      </div>
    </div>
  );
};

export default Natation;
