import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const Fitness = () => {
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
    navigate("/football");
  };

  return (
    <div>
      <div className="header fitness">
        <div className="nom-sport">
          <h1>FITNESS / GYM / BIEN ÊTRE</h1>
        </div>
        <div className="saison">
          <h2>SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2>QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>MÉTHODES ENSEIGNÉES</h4>
          <p>
            <b>+ DE 18 ANS ET ADULTES</b>
            <br />
            <br />
            <b>Fitness – Gym Fitness : </b>travail de renforcement musculaire
            général du corps avec petit matériel (haltères, élastibands …) et/ou
            avec le poids du corps.
            <br />
            <br />
            <b>Fitness / Step :</b> activité de Fitness qui consiste à réaliser
            des exercices de montées et descentes sur une marche sous forme de
            chorégraphies en musique. Il améliore l’endurance cardiovasculaire,
            renforce l’ensemble du corps, fait travailler l’équilibre et la
            coordination. Il permet de se dépenser en s’amusant !
            <br />
            <br />
            <b>Fit' ballet : </b>crée le lien entre le Fitness et la Danse
            Classique en offrant une pratique alliant des mouvements de
            renforcement de Fitness avec la gestuelle gracieuse du Ballet. C’est
            une méthode originale d’exercices autant rapides et cardiaques que
            doux et profonds inspirés par le ballet, la barre au sol, le yoga.
            C’est une façon fabuleuse et fun d’être fit’, musclé, délié tout en
            travaillant en longueur et avec grâce. On brûle les calories en
            renforçant le mental et le physique. Aucune expérience de danse
            n’est nécessaire.
            <br />
            <br />
            <b>Pilates : </b> renforcement des muscles profonds, responsables de
            la posture. Les muscles profonds sont les muscles du centre, qui se
            situent entre les côtes et le bassin, et tout autour de la colonne
            vertébrale (abdominaux, plancher pelvien et les muscles du dos). Ils
            constituent le centre d’énergie du corps, qui permet d’être plus
            fort et plus stable. Discipline permettant d’améliorer la conscience
            de son corps, de sa force et de ses limites pour mieux s’en servir.
            <br />
            <br />
            <b>Stretching : </b>Assouplissement, étirement musculaire,
            relaxation.
            <br />
            <br />
            <b>Cardioboxing : </b>méthode d’entrainement très intense qui
            combine les mouvements classiques de boxe à un entrainement cardio.
            Basé sur les techniques de combat de boxe dans le vide appelés «
            shadow training » ainsi que des entrainements sur des sacs de frappe
            mais sans combat direct.
            <br />
            <br />
            <b>Cardio danse : </b>
            cours d’activation cardiovasculaire chorégraphié utilisant l’espace
            de la salle.
            <br />
            <br />
            <b>Gym Séniors : </b> Sollicite les muscles et les articulations.
            Elle regroupe divers exercices qui permettent de travailler la
            motricité, l’équilibre et la coordination des mouvements
            parfaitement adapté aux capacités physiques des personnes de plus de
            60 ans. Ces mouvements tonifient l’ensemble de la masse musculaire,
            sans pour autant exiger des efforts intensifs. Les séances sont
            supervisées par un coach sportif qui veille au bien-être de tous les
            participants.
            <br /> <br />
            <b>Yoga Vinyasa : </b>Yoga dynamique et sportif dans lequel les
            élèves enchaînent généralement de manière fluide différentes séries
            de postures. Ces enchaînements sont souvent nommés Vinyasa Flow.
            Alors que le Hatha yoga (voir section Yoga) est calme et travaille à
            recentrer votre esprit, le Vinyasa est plus physique et travaille
            votre force ainsi que vos capacités mentales. Comme de nombreuses
            formes de yoga, la respiration est synchronisée avec les postures
            physiques pour un maximum d'avantages.
          </p>
        </div>
        <h4>
          LES ACTIVITÉS PROPOSÉES SE PRATIQUENT EN SALLE UNIQIUEMENT AVEC DES
          CHAUSSURES D'INTÉRIEUR ADAPTÉES OU EN CHAUSSETTES.
        </h4>
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
            <h4>FITNESS + 18 ANS</h4>
            <p>
              <b>SALLE BIEN-ÊTRE</b>
              <br />
              Gymnase du Parc
              <br /> 7 avenue du Parc 92260 Fontenay-aux-Roses <br />
              <br />
              <br />
              <b>SALLE POLYVALENTE</b>
              <br />
              Gymnase du Parc
              <br /> 7 avenue du Parc 92260 Fontenay-aux-Roses <br />
              <br />
              <br />
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier <br />7 Rue des Potiers, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <br />
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier <br />7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <br />
              <b>LUNDI : 12H30-13H30</b> <br />
              <br />
              <br /> <br />
              <br />
              <b>LUNDI : 19H00-20H00</b>
              <br />
              <b>MERCREDI : 12H30-13H30</b>
              <br />
              <b>JEUDI : 12H30-13H30</b>
              <br />
              <b>VENDREDI : 19H15-20H15</b>
              <br />
              <br />
              <br />
              <b>MARDI : 20H00-21H00</b>
              <br />
              <b>MERCREDI : 09H30-10H30</b>
              <br />
              <b>JEUDI : 09H00-10H00</b>
              <br />
              <b>VENDREDI : 09H15-10H15</b>
              <br />
              <br />
              <br />
              <b>MARDI : 12H30-13H30</b>
              <br />
              <b>VENDREDI : 12H30-13H30</b>
              <br />
              <b>MERCREDI : 19H45-20H45</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>CARDIO DANSES</h4>
            <p>
              <b>SALLE POLYVALENTE</b>
              <br />
              Gymnase du Parc
              <br /> 7 avenue du Parc 92260 Fontenay-aux-Ros
            </p>
            <p>
              <b>LUNDI : 18H00-19H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>PILATES</h4>
            <p>
              <b>SALLE P. BONNARD</b> <br />
              5 Rue de l'Avenir, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>SALLE DE DANSE</b> <br />
              Gymnase du Jean Fournier <br /> 7 Rue des Potiers, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <b>SALLE POLYVALENTE</b>
              <br />
              Gymnase du Parc <br /> 7 avenue du Parc 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI : 19H45-20H45
                <br />
                MARDI : 20H45-21H45
              </b>
              <br />
              <br />
              <br />
              <br />
              <b>
                MARDI : 08H00-09H00
                <br />
                MARDI : 09H00-10H00
              </b>
              <br />
              <br />
              <br />
              <br />
              <b>JEUDI : 20H30-21H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>STEP</h4>
            <p>
              <b>SALLE POLYVALENTE</b>
              <br />
              Gymnase du Parc <br /> 7 avenue du Parc 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI : 19H30-20H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>CARDIO BOXING </h4>
            <p>
              <b>SALLE DE REUNION</b>
              <br />
              Gymnase du Parc <br /> 7 avenue du Parc 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI : 19H30-20H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>YOGA VINYASA </h4>
            <p>
              <b>SALLE DE REUNION</b>
              <br />
              Gymnase du Parc <br /> 7 avenue du Parc 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI : 20H30-21H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>GYMNASTIQUE SÉNIORS</h4>
            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier <br />7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI : 10H00-11H00</b>
              <br />
              <b>MARDI : 11H00-12H00</b>
              <br /> <br />
              <b>VENDREDI : 10H15-11H15</b>
              <br />
              <b>VENDREDI : 11H15 - 12H15</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>FITNESS BALLET</h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier <br /> 7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI : 19H00-20H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>SPORTS SANTE</h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              Gymnase Jean Fournier <br /> 7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI : 14H00-16H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>STRETCHING</h4>
            <p>
              <b>SALLE DE GYM</b>
              <br />
              Gymnase Jean Fournier <br />7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 20H45-21H45</b>
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
                      inscription d'un mineur ou de l'adulte inscrit{" "}
                    </li>
                    <li>
                      Exemple : ASF VOLLEY - enfant AZEERTYUI Noémie ou ASF
                      VOLLEY - adulte AZERTYUI Marc
                    </li>
                  </ul>
                  <li>Effectuer le virement</li>
                </ul>
              </li>
              <li>
                <h4 onClick={handleToggle} className="menu-deroulant">
                  AUTRES PAIEMENTS (Bénéficiaires d'aides et chèques)
                  <span>{showOthers ? "v" : ">"}</span>
                </h4>
                {showOthers && (
                  <div className="autres-moyens">
                    <h4>Si Bénéficiaire d'Aides :</h4>
                    <p>
                      ANVC (coupons sport, chèque-vacances)
                      {/* , Coup de pouce
                      loisirs (CAF), Pass+, Pass'sport, Chèque sport, Labaz,
                      Coupon Sceaux */}
                    </p>
                    {/* <p>
                      <i>
                        (Uniquement : Athlétisme, Badminton (en compétition),
                        Gymnastique Rythmique, Gymnastique Artistique, Handball,
                        Rugby, Squash, VolleyBall)
                      </i>
                    </p> */}

                    <h4>Par chèque(s) :</h4>
                    <p>(5 fois maximum - à l'ordre de l'ASF) </p>

                    {/* <h4>Par espèces : </h4>
                    <p>(en 1 seule fois)</p> */}
                    <div className="remise">
                      <h4>La remise se fera : </h4>
                    </div>
                    <p>
                      Au Forum des Associations le
                      <b className="gras"> 08 septembre</b> au Gymnase du Parc
                      entre 10h00 et 18h00
                    </p>
                    <p>OU</p>
                    <p>En début de séance</p>
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
                <b>TOUS LES COURS</b>
              </p>
              <p>
                <i>(y compris 1 séance Gym séniors et Fit'ballet)</i>
              </p>
              <p className="prix-cotisation">
                <b>220€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>1 SÉANCE SÉNIORS / SEMAINE</b>
              </p>
              <p className="prix-cotisation">
                <b>105€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>2 SÉANCES SÉNIORS / SEMAINE</b>
              </p>
              <p className="prix-cotisation">
                <b>165€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>SPORT SANTE</b>
              </p>
              <p className="prix-cotisation">
                <b>84€</b>
                <br />
                <i className="i-style-cotisations">
                  1h
                  <br />
                  (10 séances)
                </i>
                <br />

                <br />
                <b>157€</b>
                <br />
                <i className="i-style-cotisations">Annuel</i>
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
        {/* <div className="bloc">
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
        </div> */}
        <div>
          <h4 className="h4-message">
            Certificat d'aptitude à la pratique du sport obligatoire!
            <br />A remettre sur place en début de séance ou à télécharger lors
            de l'inscription en ligne.
          </h4>
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
          <h4>PRÉSIDENTE HÉLÈNE CHATEL : </h4>
          <div>
            <span className="label">Mail : </span>
            <span className="email"> asfculturephysique@gmail.com</span>
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
            <h4 className="h4-button-sportPages">Football</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fitness;
