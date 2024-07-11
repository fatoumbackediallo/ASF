import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const GymnastiqueArtistique = () => {
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
    navigate("/gymnastiquerythmique");
  };

  return (
    <div>
      <div className="header gymnastiqueArtistique">
        <div className="nom-sport">
          <h1>GYMNASTIQUE ARTISTIQUE</h1>
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
            La gymnastique artistique est une discipline athlétique consistant à
            enchaîner des mouvements acrobatiques sur des agrès. <br /> <br />
            La compétition se déroule de deux manières : en concours par équipe
            et en concours individuel. Ce dernier se subdivise en concours
            général (l'intégralité des agrès) et en concours par appareil. Chez
            les femmes, il existe quatre agrès : le saut de cheval, les barres
            asymétriques, la poutre et le sol. <br />
            <br />
            Atelier de motricité parent-bébé : s’adresse aux bébés âgés de 3 à
            18 mois. L’objectif des ateliers est d’offrir un espace de motricité
            adapté pour soutenir le développement psychomoteur du tout-petit.
            <br />
            <br />
            Dans les ateliers, la psychomotricienne est présente pour
            accompagner et encourager l’enfant dans ses découvertes, sans faire
            à sa place. L’enfant est alors acteur de son développement soutenu
            par le regard attentif et bienveillant des adultes. C’est également
            un espace de rencontre pour les parents et les enfants. La
            psychomotricienne pourra répondre à toutes les questions concernant
            le développement psychomoteur des enfants. <br />
            <br />
            Yoga prénatal et postnatal (méthode De Gasquet) : Espace de
            bien-être et de rencontre entre les futures mamans et les jeunes
            mamans. Ils ont pour objectif de soulager les douleurs mécaniques et
            fonctionnels du corps (douleur au niveau du dos, des cervicales, du
            bassin ou encore les troubles digestifs), d’acquérir les postures et
            les respirations adaptées pour améliorer le bien-être de la future
            maman et de son bébé, récupérer forme et énergie après
            l’accouchement. Le yoga prénatal s’adresse aux femmes enceintes à
            partir du second trimestre.
            <br />
            <br />
            Les jeunes mamans pourront participer aux cours de yoga postnatal 5
            à 6 semaines après l’accouchement, les nouveau-nés seront les
            bienvenus pendant les ateliers. Nous mettrons à disposition des
            tapis et des matelas de change.
            <br />
            <br />
            Handi’gym : Partenariats avec des structures d'accueil pour les
            enfants et adolescents en situation de handicap afin de proposer un
            groupe de gymnastique adapté. Ce groupe a lieu le mardi matin et
            permet d'accueillir 3 groupes Handi’gym. Les enfants et adolescents
            sont accompagnés par les professionnels de santé de la structure
            afin que nous puissions répondre aux mieux à leurs besoins
            psychomoteurs.
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premièrs cours se tiendront à partir du :
                  <br />
                  Lundi 02 Septembre 2024 pour le Yoga et Atelier motricité,
                  <br />
                  Lundi 09 Septembre 2024 pour les autres catégories.
                </b>
              </p>
            </div>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              ATELIER DE MOTRICITÉ
              <br />
              3 À 18 MOIS
              <br />
              <i>(Avec un parent)</i>
            </h4>

            <p>
              <b>SALLE BIEN ÊTRE</b>
              <br />
              Gymnase du Parc
              <br /> 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 09H30-10H30</b>
              <br />
              <br />
              <b>LUNDI : 10H30-11H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>YOGA PRÉNATAL </h4>
            <p>
              <b>SALLE BIEN ÊTRE</b>
              <br />
              Gymnase du Parc
              <br /> 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 14H00-15H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>YOGA POSTNATAL </h4>
            <p>
              <b>SALLE BIEN ÊTRE</b>
              <br />
              Gymnase du Parc
              <br /> 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 15H00-16H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              BABY GYM
              <br />
              <i>(nés en 2022)</i>
            </h4>

            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI : 09H45-10H15</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              ÉVEIL 1
              <br />
              <i>(nés en 2021)</i>
            </h4>
            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI : 10H15-11H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              ÉVEIL 2
              <br />
              <i>(nés en 2020)</i>
            </h4>

            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI : 11H00-11H45</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              MINI GYM
              <br />
              <i>(Filles nées en 2019)</i>
            </h4>
            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI : 11H45 - 12H45</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              LOISIRS
              <br />
              <i>(Filles nées entre 2012- 2013)</i>
            </h4>

            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI : 19H00-20H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              LOISIRS
              <br />
              <i>(Filles nées entre 2014 - 2018)</i>
            </h4>

            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 10H00-11H30</b>
              <br />
              <br />
              <b>MERCREDI : 11H30-13H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              LOISIRS
              <br />
              <i>(Filles nées entre 2017 - 2018)</i>
            </h4>

            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 16H30-18H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              LOISIRS
              <br />
              <i>(Filles nées en 2016)</i>
            </h4>

            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 18H00-19H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              LOISIRS
              <br />
              <i>(Filles nées entre 2014 - 2015)</i>
            </h4>

            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI : 17H00-18H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              COMPETITIONS
              <br />
              <i>(Filles nées entre 2014 - 2018)</i>
            </h4>

            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 17H00-19H00</b>
              <br />
              <b>MARDI : 17H00-19H00</b>
              <br />
              <b>VENDREDI : 17H00-19H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              COMPETITIONS
              <br />
              <i>(Filles nées avant 2014)</i>
            </h4>

            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 19H00-21H00</b>
              <br />
              <b>JEUDI : 19H00-21H00</b>
              <br />
              <b>VENDREDI : 19H00-21H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>FITNESS ADULTES</h4>
            <p>
              <b>SALLE BIEN ÊTRE</b>
              <br />
              Gymnase du Parc
              <br /> 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 20H00-21H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              HANDI'GYM
              <br />
              <i>(6 à 16 ans)</i>
            </h4>

            <p>
              <b>DOJO</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI : 08H30-12H00</b>
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
                    <p>(3 fois maximum - à l'ordre de l'ASF) </p>

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
                    <p>
                      Auprès de la section, lors de la première séance
                      d'entraînement.
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
                <b>ATELIER MOTRICITÉ</b>
                <br />
                <i>(3 - 18 mois)</i>
              </p>
              <p>
                <i> (possibilité 1 séance à l'essai)</i>
              </p>
              <p className="prix-cotisation-gym">
                <b>15€</b>
                <br />
                <i className="i-style-cotisations">La séance</i>
              </p>
              <p>
                <i>60€ les 5 séances</i>
              </p>
              <p>
                <i>110€ les 10 séances</i>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>YOGA PRÉ ET POST NATAL</b>
              </p>
              <p>
                <i>(possibilité 1 séance à l'essai)</i>
              </p>
              <p className="prix-cotisation">
                <b>12€</b>
                <br />
                <i className="i-style-cotisations">La séance</i>
              </p>
              <p>
                <i>55€ les 5 séances</i>
              </p>
              <p>
                <i>100€ les 10 séances</i>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>BABY GYM</b>
                <br />
                <i>(Né en 2022)</i>
              </p>
              <p className="prix-cotisation">
                <b>250€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>ÉVEIL 1</b>
                <br />
                <i>(Nés en 2021)</i>
                <br />
                <br />
                <b>ÉVEIL 2</b>
                <br />
                <i>(Nés en 2020)</i>
              </p>
              <p className="prix-cotisation">
                <b>255€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>MINI GYM</b>
                <br />
                <i>(Né en 2019)</i>
              </p>
              <p className="prix-cotisation-gym">
                <b>265€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>LOISIRS FILLES</b>
                <br />
                <i>(Nées entre 2012 à 2018)</i>
              </p>
              <p className="prix-cotisation-gym">
                <b>275€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>COMPETITIONS FILLES</b>
                <br />
                <i>(Nées entre 2014 à 2018)</i>
              </p>
              <p className="prix-cotisation-gym">
                <b>330€</b>
                <br />
                <i className="i-style-cotisations">(1 créneau)</i>
                <br />
                <br />
                <b>435€</b>
                <br />
                <i className="i-style-cotisations">(2 créneaux)</i>
                <br />
                <br />
                <b>500€</b>
                <br />
                <i className="i-style-cotisations">(3 créneaux)</i>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>FITNESS ADULTES</b>
              </p>
              <p className="prix-cotisation">
                <b>210€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>HANDI'GYM</b>
                <br />
                <i>(groupe de 4 - 6 pers.)</i>
              </p>
              <p className="prix-cotisation">
                <b>700€</b>
                <br />
                <i className="i-style-cotisations">(1h/semaine)</i>
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
              Médical (si + de 3 ans) si nouveau et compétitions.
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
              Médical (si + de 3 ans) si nouveau, compétions et Fitness Adultes.
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
            {/* <p className="p-h5-bloc">
              Possibilité de s'inscrire également :
              <br />
              le 03/07 de 16h30 à 19h30,
              <br />
              le 06/07 de 10h à 12h au Gymnase Jean Fournier.
              <br />
              (Voir Actualité en page d'accueil!)
            </p> */}
          </div>
        </div>

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>
            GYM ARTISTIQUE <br /> PRÉSIDENTE : ANNE-SOPHIE BAULON
          </h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> asfgym92@gmail.com</span>
          </div>
          <div>
            <span className="label">Téléphone : </span>
            <span className="email">06 88 70 39 33</span>
          </div>
        </div>
        <div className="contacts">
          <h4>
            ATELIER MOTRICITÉ / YOGA PRÉ ET POSTNATAL
            <br /> HANDI'GYM <br />
            PROFESSEUR : NATACHA ROUAIX
          </h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> natacha.rouaix@hotmail.fr</span>
          </div>
          <div>
            <span className="label">Téléphone : </span>
            <span className="email">07 87 87 33 57</span>
          </div>
          {/* <div>
            <span className="label">Site Web : </span>
            <span className="email">www.asfgym92.fr</span>
          </div> */}
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

export default GymnastiqueArtistique;
