import React, { useState } from "react";
import "../../styles/sports.css";

const Handball = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div>
      <div className="header handball">
        <div className="nom-sport">
          <h1>HANDBALL</h1>
        </div>
        <div className="saison">
          <h2>SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2 className="h2">QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>COURS ENSEIGNÉS</h4>
          <p>
            Le handball est un sport d'équipe dynamique et intense qui combine
            rapidité, agilité et stratégie. Joué sur un terrain intérieur
            rectangulaire, le handball met en scène deux équipes de sept joueurs
            chacune, visant à marquer des buts en lançant un ballon dans le but
            adverse tout en défendant le leur. Ce sport exige des compétences en
            passe, en tir et en défense, tout en favorisant la coopération et
            l'esprit d'équipe.
            <br />
            <br />
            Notre section de handball au sein de l'association sportive offre un
            environnement stimulant et accueillant pour tous les âges et
            niveaux. Nos entraîneurs expérimentés se consacrent à développer les
            compétences techniques individuelles telles que le dribble, la
            passe, et le tir, ainsi qu'à renforcer les tactiques de jeu
            collectif.
            <br />
            <br />
            Les entraînements sont conçus pour améliorer la condition physique,
            la coordination et la prise de décision rapide. Nous mettons
            également l'accent sur le fair-play et l'esprit de camaraderie. Des
            matchs amicaux et des tournois internes sont régulièrement
            organisés, ainsi que des participations à des compétitions locales
            et régionales.
            <br />
            <br />
            Que vous soyez débutant cherchant à découvrir les bases du handball
            ou joueur expérimenté visant à perfectionner votre technique et
            votre stratégie, notre section de handball vous propose des
            programmes adaptés et une ambiance conviviale. Rejoignez-nous pour
            partager la passion du handball et vivre des moments inoubliables
            sur le terrain !
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2 className="h2">ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Lundi 02 Septembre 2024
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>PREMIERS PAS</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI 09H00-10H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M7</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI 13H00-14H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M9</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI 14H30-16H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M11 </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              Équipe 1 : <i>(parc)</i>
              <br />
              <b>
                MARDI 17H00-18H15
                <br />
                JEUDI 17H00-18H15
              </b>
              <br />
              <br />
              Équipe 2 :<br />
              <b>LUNDI 17H00-18H15</b>
              <br />
              <i>(panorama)</i>
              <br />
              <b>VENDREDI 17H00-18H15</b>
              <br />
              <i>(parc)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M13 </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              Equipe 1 :<br />
              <b>
                LUNDI 18H15-19H30
                <br />
                MERCREDI 18H15-19H30
              </b>
              <br />
              <i> (panorama)</i>
              <br />
              <b>VENDREDI 18H15-19H30</b>
              <br />
              <i> (parc)</i>
              <br />
              <br />
              Equipe 2 : <i>(panorama)</i>
              <br />
              <b>LUNDI 18H15-19H30</b>
              <br />
              <b>MERCREDI 18H15-19H30</b>
              <br />
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M15 </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase René Rousseau (Malakoff) 10bis Av. Augustin Dumont, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              Équipe 1 - Entente : <br />
              <b>
                MARDI 19H15-20H30
                <br />
                <i className="i-style">(René Rousseau)</i>
                <br />
                JEUDI 18H15-19H30
              </b>
              <br />
              <b>VENDREDI 19H30-21H00</b>
              <br />
              <i>(parc)</i>
              <br />
              <br />
              Équipe 2 - Entente : <i>(panorama)</i>
              <br />
              <b>LUNDI 18H30- 19H45</b>
              <br />
              <i>(René Rousseau)</i>
              <br />
              <b>MARDI 18H15-19H30</b>
              <br />
              <i>(parc)</i>
              <br />
              <b>VENDREDI 18H15-19H30</b>
              <br />
              <i>(parc)</i>
              <br />
              <br />
              Équipe 3 : <i>(panorama)</i>
              <br />
              <b>
                LUNDI 19H30-21H00
                <br />
                MERCREDI 17H00-18H15
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>P16</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              Équipe 1 :<br />
              <b>
                LUNDI 21H-22H30
                <br />
                <i className="i-style">(panorama)</i>
                <br />
                MARDI 21H-22H30
                <br />
                <i className="i-style">(parc)</i>
                <br />
                JEUDI 21H-22H30
                <br />
                <i className="i-style">(parc)</i>
              </b>
              <br />
              <br />
              Équipe 2 :<br />
              <b>
                MERCREDI 21H-22H30
                <br />
                <i className="i-style">(panorama)</i>
                <br />
                VENDREDI 21H-22H30
                <br />
                <i className="i-style">(parc)</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M18 </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              Gymnase René Rousseau (Malakoff) 10bis Av. Augustin Dumont, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              Équipe 1 - Entente :<br />
              <b>
                MARDI 19H30-21H
                <br />
                <i className="i-style">(parc)</i>
                <br />
                JEUDI 19H30-21H
                <br />
                <i className="i-style">(parc)</i>
                <br />
                VENDREDI 19H45-21H
                <br />
                <i className="i-style">(René Rousseau)</i>
              </b>
              <br />
              <br />
              Équipe 2 - Entente :<br />
              <b>
                MERCREDI 19H30 -21H
                <br />
                <i className="i-style">(panorama)</i>
                <br />
                VENDREDI 19H45-21H
                <br />
                <i className="i-style">(René Rousseau)</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>SENIORS</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
              Salle musculation, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI 18H00-22H00
                <br />
                <i className="i-style">(Salle de musculation)</i>
                <br />
                <br />
                VENDREDI 19H30-21H
                <br />
                <i className="i-style">(parc)</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>LOISIRS </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI 10H00-12H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>HANDFIT</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>Salle polyvalente</b>
              <br />
              <br />
              Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI 21H00-22H00
                <br />
                <i className="i-style">(Salle polyvalente)</i>
                <br />
                <br />
                SAMEDI 09H00-10H00
                <br />
                <i className="i-style">(Halle du parc)</i>
              </b>
            </p>
          </div>
        </div>

        <h2 className="h2">COTISATIONS</h2>
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

        <div>
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b>PREMIERS PAS</b>
              </p>
              <p className="prix-cotisation">
                <b>160€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>M7</b>
              </p>
              <p className="prix-cotisation">
                <b>200€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>M9</b>
              </p>
              <p className="prix-cotisation">
                <b>200€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>M11</b>
              </p>
              <p className="prix-cotisation">
                <b>210€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>M13</b>
              </p>
              <p className="prix-cotisation">
                <b>225€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>M15</b>
              </p>
              <p className="prix-cotisation">
                <b>235€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>M18</b>
              </p>
              <p className="prix-cotisation">
                <b>250€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>P16</b>
              </p>
              <p className="prix-cotisation">
                <b>270€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>LOISIRS</b>
              </p>
              <p className="prix-cotisation">
                <b>180€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>HANDFIT</b>
              </p>
              <p className="prix-cotisation">
                <b>190€</b>
              </p>
              <p>
                <i>La séance</i>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>HANDFIT</b>
              </p>
              <p className="prix-cotisation">
                <b>220€</b>
              </p>
              <p>
                <i>2 séances</i>
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

        <h2 className="h2">CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PRÉSIDENT MICHAËL LARONDE : </h4>
          <span className="label">Mail : </span>
          <span className="email"> contact@asf-handball.org</span>
          <span className="label">Site Web : </span>
          <span className="email">hhtp://asf-handball.org</span>
        </div>
      </div>
    </div>
  );
};

export default Handball;
