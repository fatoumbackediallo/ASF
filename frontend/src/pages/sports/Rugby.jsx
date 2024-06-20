import React, { useState } from "react";
import "../../styles/sports.css";

const Rugby = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div>
      <div className="header rugby">
        <div className="nom-sport">
          <h1>RUGBY</h1>
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
            Le rugby est un sport d'équipe intense et stratégique qui combine
            force, agilité et esprit de camaraderie. Joué sur un terrain
            rectangulaire, le rugby met en scène deux équipes de quinze joueurs
            chacune (ou sept dans la variante à 7), dont l'objectif est de
            marquer des points en portant ou en bottant le ballon ovale dans
            l'en-but adverse. Ce sport développe non seulement les capacités
            physiques mais aussi la coopération et l'esprit d'équipe.
            <br />
            <br />
            Notre section de rugby au sein de l'association sportive offre un
            environnement stimulant et inclusif pour tous les âges et niveaux.
            Nos entraîneurs qualifiés sont dédiés à perfectionner les
            compétences techniques individuelles telles que la passe, le
            plaquage et la mêlée, tout en renforçant les tactiques de jeu
            collectif.
            <br />
            <br />
            Les entraînements sont structurés pour améliorer la condition
            physique, la coordination et la prise de décision rapide. Nous
            mettons également l'accent sur le fair-play et l'esprit de
            camaraderie. Des matchs amicaux et des tournois internes sont
            régulièrement organisés, ainsi que des participations à des
            compétitions locales et régionales.
            <br />
            <br />
            Que vous soyez débutant cherchant à découvrir les bases du rugby ou
            joueur expérimenté visant à affiner votre technique et votre
            stratégie, notre section de rugby vous propose des programmes
            adaptés à vos besoins et objectifs. Rejoignez-nous pour partager la
            passion du rugby et vivre des moments inoubliables sur le terrain !
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
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ECOLDE DE RUGBY</h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>MERCREDI 13H-17H</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ECOLE DE RUGBY</h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>SAMEDI 10H00-13H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>RUGBY À 5 </h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>MARDI 20H00-22H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>Seniors</h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>MARDI 20H00-22H00</b>
              <br />
              jeudi 20H00 - 22H
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>FOLKLOS (+ 35 ANS)</h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>VENDREDI 20H00-22H00</b>
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

        <div>
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b>BABY / U6</b>
              </p>
              <p className="prix-cotisation">
                <b>100€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>U8 / U10 / U12 / U14</b>
              </p>
              <p className="prix-cotisation">
                <b>210€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>SÉNIORS</b>
              </p>
              <p className="prix-cotisation">
                <b>250€</b>
              </p>
            </div>
          </div>

          <div className="case-cotisation">
            <p>
              <b>FOLKLOS</b>
            </p>
            <p className="prix-cotisation">
              <b>220€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>RUGBY À 5 MIXTE</b>
            </p>
            <p className="prix-cotisation">
              <b>130€</b>
            </p>
          </div>

          <h4>
            Remise lors de l'inscription en ligne sur MonClub avec les codes
            suivants : <br />
            FRATERIE10 -10% à partir du 2ème enfant <br />
            FRATERIE20 -20% à partir du 3ème enfant
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
          <h4>ÉCOLE DE RUGBY : TONY VALIER-BRASIER</h4>
          <span className="label">Mail : </span>
          <span className="email"> edr.fontenay@gmail.com</span>
          <span className="label">Téléphone : </span>
          <span className="email">06 54 95 79 89</span>
        </div>
        <div className="contacts">
          <h4>RUGBY ADAPTE : KARINE GRENIER</h4>
          <span className="label">Mail : </span>
          <span className="email"> grenierkarine@yahoo.fr</span>
          <span className="label">Téléphone : </span>
          <span className="email">06 99 51 15 32</span>
        </div>
        <div className="contacts">
          <h4>RUGBY À 5 MIXTE : PIERRE CHOUTEAU</h4>
          <span className="label">Téléphone : </span>
          <span className="email">06 84 96 96 62</span>
        </div>
        <div className="contacts">
          <h4>RUGBY SÉNIORS : STÉPAHNIE LECUYER</h4>
          <span className="label">Téléphone : </span>
          <span className="email">06 84 10 44 49</span>
          <span className="label">Réseaux sociaux : </span>
          <span className="email">www.facebook.com/rygbyasf/</span>
        </div>
      </div>
    </div>
  );
};

export default Rugby;
