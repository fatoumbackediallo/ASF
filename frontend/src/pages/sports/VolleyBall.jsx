import React, { useState } from "react";
import "../../styles/sports.css";

const VolleyBall = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div>
      <div className="header volleyball">
        <div className="nom-sport">
          <h1>VOLLEY BALL</h1>
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
            Le volley-ball est un sport d'équipe dynamique et stratégique qui se
            joue sur un terrain divisé par un filet. Deux équipes de six joueurs
            s'affrontent pour marquer des points en envoyant le ballon au-dessus
            du filet dans le camp adverse, tout en empêchant le ballon de
            toucher le sol de leur côté. Le volley-ball développe des
            compétences en saut, en passe et en frappe, tout en renforçant la
            coordination et l'esprit d'équipe.
            <br />
            <br />
            Notre section de volley-ball au sein de l'association sportive offre
            un environnement accueillant et énergique pour tous les âges et
            niveaux. Nos entraîneurs qualifiés sont dédiés à développer les
            compétences techniques, la condition physique et les tactiques de
            jeu, tout en favorisant le fair-play et l'esprit de camaraderie.
            <br />
            <br />
            Les séances d'entraînement sont structurées pour améliorer la
            précision des passes, la puissance des frappes et la coordination
            des mouvements. Nous organisons régulièrement des matchs amicaux,
            des tournois internes et participons à des compétitions locales et
            régionales, offrant à nos membres la possibilité de se mesurer à
            d'autres équipes et de progresser.
            <br />
            <br />
            Que vous soyez débutant souhaitant découvrir les bases du
            volley-ball ou joueur expérimenté cherchant à perfectionner votre
            technique et votre stratégie, notre section de volley-ball vous
            propose des programmes adaptés à vos besoins et objectifs.
            Rejoignez-nous pour partager la passion du volley-ball et vivre des
            moments sportifs inoubliables sur le terrain !
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
              ÉCOLE DE VOLLEY <br />À PARTIR DE 6 ANS (2013 ET +)
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 17H00-18H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M13/M15 FILLES (2009 À 2012)</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 17H00-18H30</b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M13/M15 GARÇONS (2009 À 2012)</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 17H30-18H30
                <br />
                OU LUNDI 17H00-18H45
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M18 FILLES (1) (2006 À 2008)</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 18H30-20H30
                <br />
                VENDREDI 18H45-20H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M18 FILLES (2) (2006 À 2008)</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 18H45-20H30
                <br />
                MERCREDI 18H30-20H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M21 FILLES (2003 À 2005)</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 18H45-20H30
                <br />
                MERCREDI 18H30-20H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>M18/M21 GARÇONS (2003 À 2008)</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 18H45-20H30
                <br />
                MERCREDI 18H30-20H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>VOLLEY LOISIR</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI 20H30-22H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>NATIONALE 3, RÉGIONAL LOISIRS COMPÉTITION</h4>
            <p>
              <b>CONTACTER LE 06 28 25 54 45</b>
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
                <b>ÉCOLE DE VOLLEY (2013 ET +)</b>
              </p>
              <p className="prix-cotisation">
                <b>200€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>M13/M15 (2009 À 2012)</b>
              </p>
              <p className="prix-cotisation">
                <b>210€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>M18/M21 (2003 À 2008)</b>
              </p>
              <p className="prix-cotisation">
                <b>220€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>VOLLEY LOISIRS</b>
              </p>
              <p className="prix-cotisation">
                <b>250€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>SÉNIORS COMPÉTITION (2002 et -)</b>
              </p>
              <p className="prix-cotisation">
                <b>260€</b>
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
          <h4>PRÉSIDENT PHILIPPE SCHAUB : </h4>
          <span className="label">Mail : </span>
          <span className="email"> philoufox@gmail.com</span>
          <span className="label">Téléphone : </span>
          <span className="email"> 06 28 25 51 45</span>
          <span className="label">Site Web : </span>
          <span className="email"> www.asvolley.fr</span>
        </div>
      </div>
    </div>
  );
};

export default VolleyBall;
