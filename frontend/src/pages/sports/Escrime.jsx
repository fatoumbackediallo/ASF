import React, { useState } from "react";
import "../../styles/sports.css";

const Escrime = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div>
      <div className="header escrime">
        <div className="nom-sport">
          <h1>ESCRIME</h1>
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
            L’escrime est un sport pour tous. Avec son équipement identique pour
            tout le monde (un masque, une veste et une arme) il n’exclut pas,
            permet la mixité et l’égalité des chances.
            <br />
            <br />
            L’escrime est un sport de combat. Il s’agit de l’art de toucher un
            adversaire avec la pointe ou le tranchant (estoc et taille) d’une
            arme blanche sur les parties valables sans être touché.
            <br />
            <br />
            On utilise trois types d’armes : l’épée, le sabre et le fleuret. Ces
            trois armes sont mixtes. Les épreuves sont individuelles ou par
            équipes.
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
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
            <h4>Fleuret Jaune (1 an et + d'escrime)</h4>
            <p>
              <b>Gymnase de la roue</b>
              <br />
              <br />
              10 Rue des Hautes Sorrières, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI 17h15-18h30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>Débutants 7 - 8 ans</h4>
            <p>
              <b>Gymnase de la roue</b>
              <br />
              <br />
              10 Rue des Hautes Sorrières, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI 17h15-18h30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>Débutants 9 - 13 ans</h4>
            <p>
              <b>Gymnase de la roue</b>
              <br />
              <br />
              10 Rue des Hautes Sorrières, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI 18h30-19h30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>Débutants 5 - 8 ans</h4>
            <p>
              <b>Gymnase de la roue</b>
              <br />
              <br />
              10 Rue des Hautes Sorrières, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI 17h15-18h15</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>Fleuret rouge confirmés (1 an et + d'escrime)</h4>
            <p>
              <b>Gymnase de la roue</b>
              <br />
              <br />
              10 Rue des Hautes Sorrières, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI 18h15-19h30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>14 ans et + Fleuret</h4>
            <p>
              <b>Gymnase de la roue</b>
              <br />
              <br />
              10 Rue des Hautes Sorrières, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI 19h30-20h45</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>14 ans et + Epée</h4>
            <p>
              <b>Gymnase de la roue</b>
              <br />
              <br />
              10 Rue des Hautes Sorrières, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI 20h45-22h</b>
            </p>
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
                      Indiquer <b className="gras">obligatoirement</b> le motif
                      du virement
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
                          Gymnastique Rythmique, Gymnastique Artistique,
                          Handball, Rugby, Squash, VolleyBall)
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
                  <b>5 à 13 ans</b>
                </p>
                <p className="prix-cotisation">
                  <b>260€</b>
                </p>
              </div>
              <div className="case-cotisation">
                <p>
                  <b>ADOS - ADULTES</b>
                </p>
                <p className="prix-cotisation">
                  <b>299€</b>
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
                Il s'agit d'une page du site internet de MonClub qui explique
                aux adhérents comment s'inscrire pour la première fois avec
                MonClub ou bien comment se connecter si un compte a déjà été
                créé.
              </p>
            </div>
          </div>
          <div className="bloc">
            <h4 className="h4">
              DISPOSITIF CERTIFICAT MÉDICAL POUR LE SPORT - INFORMATIONS
              ADHÉRENT
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
            <h4>PRÉSIDENTE MARIE NAPOLITANO :</h4>
            <div className="infos-contact">
              <span className="label">Mail : </span>
              <span className="email"> escrimepourtous@gmail.com</span>
              <span className="label">Téléphone : </span>
              <span className="email"> 06 15 70 80 26</span>
              <span className="label">Site Web : </span>
              <span className="email"> www.escrime-pour-tous.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Escrime;
