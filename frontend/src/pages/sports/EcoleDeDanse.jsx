import React, { useState } from "react";
import "../../styles/sports.css";

const EcoleDeDanse = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div>
      <div className="header ecolededanse">
        <div className="nom-sport">
          <h1 className="h1-mon-sport">ÉCOLE DE DANSE</h1>
        </div>
        <div className="saison">
          <h2 className="h2">SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2>QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>COURS ENSEIGNÉS</h4>
          <p>
            La danse est une forme d'art et d'expression corporelle qui combine
            mouvements, rythme et musique. Que ce soit le ballet, le hip-hop, la
            danse contemporaine ou les danses de salon, chaque style de danse
            offre une manière unique de s'exprimer et de se connecter avec les
            autres. La danse améliore la condition physique, la coordination et
            la confiance en soi, tout en offrant une expérience joyeuse et
            créative.
            <br />
            <br />
            Notre section de danse au sein de l'association sportive propose une
            variété de cours pour tous les âges et niveaux, allant des débutants
            aux danseurs avancés. Nos professeurs expérimentés sont passionnés
            par l'enseignement et se consacrent à développer les compétences
            techniques, l'expression artistique, et la passion pour la danse.
            <br />
            <br />
            Les cours sont conçus pour offrir un équilibre entre l'apprentissage
            technique et le plaisir de danser. Nous organisons également des
            spectacles et des démonstrations, offrant à nos membres
            l'opportunité de se produire sur scène et de partager leur talent
            avec un public.
            <br />
            <br />
            Que vous soyez novice souhaitant découvrir la joie de danser ou
            danseur confirmé cherchant à perfectionner votre technique et à
            explorer de nouveaux styles, notre section de danse vous propose des
            programmes adaptés à vos envies et à vos objectifs. Rejoignez-nous
            pour partager la passion de la danse et vivre des moments magiques
            en mouvement !
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
              STREET JAZZ
              <br />
              PRIMAIRE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br />7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 17H30-18H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              STREET JAZZ
              <br />
              COLLEGE/LYCEE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 18H30-19H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              MODERN JAZZ
              <br />
              CP
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 11H30-12H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              MODERN JAZZ
              <br />
              CE1/CE2
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 13H30-14H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              MODERN JAZZ
              <br />
              CM1/CM2/6ème
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 14H30-16H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              MODERN JAZZ
              <br />
              CONCOURS PRIMAIRE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 16H00-16H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              MODERN JAZZ
              <br />
              CONCOURS COLLEGE/LYCEE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 17H30-18H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              MODERN JAZZ
              <br /> COLLEGE /LYCEE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 18H30-20H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              MODERN JAZZ
              <br /> ADULTES
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 20H00-21H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              CONTEMPORARY JAZZ
              <br /> CM2/COLLEGE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br />7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 18H30-19H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              CONTEMPORARY JAZZ
              <br />
              PRIMAIRE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI : 10H30-11H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              CONTEMPORARY JAZZ
              <br />
              ADULTES
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                JEUDI : 19H30-21H00
                <br />
                <br />
                SAMEDI : 11H30-13H00
              </b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              CONTEMPORARY JAZZ
              <br />
              COLLEGE/LYCEE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI : 13H00-14H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              ÉVEIL DANSE
              <br />
              MATERNELLE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI : 10H30-11H30
                <br />
                <br />
                SAMEDI : 09H30-10H30
              </b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              HIP HOP
              <br /> PRIMAIRE CE1/CE2
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI : 17H30-18H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              HIP HOP
              <br /> CM1/CM2
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI : 17H00-18H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              HIP HOP
              <br /> COLLEGE/LYCEE
            </h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI : 18H00-19H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ZUMBA ADULTES</h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 19H45-20H45
                <br />
                <br />
                VENDREDI : 19H30-20H30
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
                    <p>(en 4 fois maximum)</p>
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

        <div className="ligne-cotisations">
          <div className="case-cotisation">
            <p>
              <b>-18 ans</b>
              <br />
              <i>Cours 1h</i>
            </p>
            <p className="prix-cotisation">
              <b>255€</b>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>-18 ans</b>
              <br />
              <i>Cours 1h30</i>
            </p>
            <p className="prix-cotisation">
              <b>350€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>-18 ans</b>
              <br />
              <i>
                Cours + Concours primaire,
                <br />
                2h
              </i>
            </p>
            <p className="prix-cotisation">
              <b>443€</b>
            </p>
            <br />
            <i>Prix comprenant l'inscription à un seul concours</i>
          </div>

          <div className="case-cotisation">
            <p>
              <b>-18 ans</b>
              <br />
              <i>
                Cours + Concours collège/lycée,
                <br />
                2h30
              </i>
            </p>
            <p className="prix-cotisation">
              <b>535€</b>
            </p>
            <br />
            <i>Prix comprenant l'inscription à un seul concours</i>
          </div>

          <div className="case-cotisation">
            <p>
              <b>-18 ans</b>
              <br />
              <i>
                A partir de la 2eme activité,
                <br />
                cours d'1h
              </i>
            </p>
            <p className="prix-cotisation">
              <b>185€</b>
            </p>
            <br />
            <i>
              La remise s'applique sur le cours le moins cher et à condition que
              l'adhérent soit du même foyer fiscal
            </i>
          </div>

          <div className="case-cotisation">
            <p>
              <b>-18 ans</b>
              <br />
              <i>
                A partir de la 2eme activité,
                <br />
                cours d'1h30
              </i>
            </p>
            <p className="prix-cotisation">
              <b>247€</b>
            </p>
            <br />
            <i>
              La remise s'applique sur le cours le moins cher et à condition que
              l'adhérent soit du même foyer fiscal
            </i>
          </div>

          <div className="case-cotisation">
            <p>
              <b>+18 ans</b>
              <br />
              <i>Cours 1h30</i>
            </p>
            <p className="prix-cotisation">
              <b>380€</b>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>+18 ans</b>
              <br />
              <i>
                Cours + Concours collège/lycée,
                <br /> 2h30
              </i>
            </p>
            <p className="prix-cotisation">
              <b>592€</b>
            </p>
            <br />
            <i>Prix comprenant l'inscription à un seul concours</i>
          </div>

          <div className="case-cotisation">
            <p>
              <b>+18 ans</b>
              <br />
              <i>
                Zumba 1h
                <br />
                (1 jour)
              </i>
            </p>
            <p className="prix-cotisation">
              <b>230€</b>
            </p>
          </div>

          <div className="case-cotisation">
            <p>
              <b>+18 ans</b>
              <br />
              <i>
                Zumba forfait 2h
                <br /> (2 jours)
              </i>
            </p>
            <p className="prix-cotisation">
              <b>410€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>+18 ans</b>
              <br />
              <i>
                A partir de la 2eme activité,
                <br />
                cours d'1h
              </i>
            </p>
            <p className="prix-cotisation">
              <b>212€</b>
            </p>
            <br />
            <i>
              La remise s'applique sur le cours le moins cher et à condition que
              l'adhérent soit du même foyer fiscal
            </i>
          </div>
          <div className="case-cotisation">
            <p>
              <b>+18 ans</b>
              <br />
              <i>
                A partir de la 2eme activité,
                <br />
                cours d'1h30
              </i>
            </p>
            <p className="prix-cotisation">
              <b>267€</b>
            </p>
            <br />
            <i>
              La remise s'applique sur le cours le moins cher et à condition que
              l'adhérent soit du même foyer fiscal
            </i>
          </div>
        </div>
        <div>
          <h4 className="h4-inscription">
            Ces tarifs comprennent l'adhésion à l'ASF pour un montant de 15€ par
            personne, non remboursable.
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
        <div>
          <h4 className="permanences">
            Tous nos cours : éveil à la danse, street-jazz, modern'jazz,
            hip-hop, comtempory jazz et zumba sont accessibles aux débutants.
            <br />
            Le niveau des élèves est laissé à l'appréciation du professeur.
          </h4>
        </div>

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PRÉSIDENTE</h4>
          <span className="label">Mail : </span>
          <span className="email"> asf.danse.far@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default EcoleDeDanse;
