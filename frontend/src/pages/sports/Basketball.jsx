import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const BasketBall = () => {
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
    navigate("/boxethailandaise");
  };

  return (
    <div>
      <div className="header basketball">
        <div className="nom-sport">
          <h1 className="h1-mon-sport">BASKETBALL</h1>
        </div>
        <div className="saison">
          <h2 className="h2-saisons">SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2>QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>COURS ENSEIGNÉS</h4>
          <p>
            Le basketball est un sport d'équipe palpitant qui combine habileté,
            vitesse et stratégie. Joué sur un terrain rectangulaire, ce sport
            implique deux équipes de cinq joueurs chacune, visant à marquer des
            points en lançant le ballon dans le panier adverse tout en défendant
            le leur. Le basketball développe non seulement les capacités
            physiques mais aussi la coopération et l'esprit d'équipe. <br />
            {/* <br />
            Notre section de basketball au sein de l'association sportive offre
            un environnement stimulant et inclusif pour tous les âges et
            niveaux. Nos entraîneurs qualifiés sont engagés à perfectionner les
            compétences individuelles telles que le dribble, le tir, et la
            passe, tout en renforçant les tactiques de jeu collectif.
            <br />
            <br />
            Les séances d'entraînement sont structurées pour améliorer la
            condition physique, la coordination, et la prise de décision rapide.
            Nous mettons également l'accent sur le fair-play et l'esprit de
            camaraderie. Des matchs amicaux et des tournois internes sont
            régulièrement organisés, ainsi que des participations à des
            compétitions locales et régionales.
            <br />
            <br />
            Que vous soyez débutant cherchant à découvrir les fondamentaux du
            basketball ou joueur expérimenté visant à perfectionner votre
            technique et votre stratégie, notre section de basketball vous
            propose des programmes adaptés et une ambiance conviviale.
            Rejoignez-nous pour partager la passion du basketball et vivre des
            moments inoubliables sur le terrain ! */}
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Mardi 03 Septembre 2024
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>BABIES </h4>
            <p>
              <b>HALLE Gymnase Jean Fournier</b>
              <br />7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI 09H00-10H15</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U9</h4>
            <p>
              <b>HALLE Gymnase Jean Fournier</b>
              <br />7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI : 13H-15H00
                <br />
                <br />
                SAMEDI : 10H15 - 11H30
              </b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U11</h4>
            <p>
              <b>HALLE Gymnase Jean Fournier</b>
              <br />7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI : 13H00-15H00
                <br />
                <br />
                JEUDI : 17H00-18H15
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U13</h4>
            <p>
              <b>HALLE</b>
              <br />
              Stade du Panorama
              <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses <br />
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI : 17H30-19H15</b>
              <br />
              <i> (Panorama)</i>
              <br />
              <br />
              <b>MERCREDI : 15H00-16H30</b>
              <br />
              <i> (Jean Fournier)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U13 FÉMININE </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase collège les Ormeaux,
              <br /> 15 Rue D'Estienne d'Orves, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI : 18H15-19H30</b>
              <br />
              <i> (Jean Fournier)</i>
              <br />
              <br />
              <b>MARDI : 17H30-19H00</b>
              <br />
              <i> (Collège Les Ormeaux)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U15</h4>
            <p>
              <b>HALLE</b>
              <br />
              Stade du Panorama
              <br /> 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses <br />
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 16H30-18H00</b>
              <br />
              <i> (Jean Fournier)</i>
              <br />
              <br />
              <b>VENDREDI : 17H30-19H00</b>
              <br />
              <i> (Panorama)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U15 FÉMININE</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase collège les Ormeaux,
              <br /> 15 Rue D'Estienne d'Orves, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI 17H30-19H00
                <br />
                <i className="i-style"> (Jean Fournier)</i>
                <br />
                <br />
                JEUDI : 17H30-19H00
                <br />
                <i className="i-style"> (Collège Les Ormeaux)</i>
                <br />
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U17 - ÉQUIPE 1 </h4>
            <p>
              <b>HALLE Stade du Panorama</b>
              <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                VENDREDI : 19H00-20H15
                <br />
                <br />
                MARDI : 19H00-20H15
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U17 - ÉQUIPE 2</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase collège les Ormeaux,
              <br /> 15 Rue D'Estienne d'Orves, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 18H00-19H30</b>
              <br />
              <i> (Jean Fournier)</i>
              <br />
              <br />
              <b>JEUDI : 19H00-20H15</b>
              <br />
              <i> (Collège Les Ormeaux)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U20 - EQUIPE 1</h4>
            <p>
              <b>HALLE Gymnase Jean Fournier</b>
              <br />7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI : 19H00-20H30
                <br />
                <br />
                JEUDI : 19H15-20H45
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U20 - ÉQUIPE 2 </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase collège les Ormeaux,
              <br /> 15 Rue D'Estienne d'Orves, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI : 19H30-21H00
                <br />
                <i className="i-style"> (Jean Fournier)</i>
                <br />
                <br />
                MARDI : 19H-20H30
                <br />
                <i className="i-style"> (Collège Les Ormeaux)</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>SÉNIORS - REGION</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier
              <br /> 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI : 20H45-22H30</b>
              <br />
              <i> (Jean Fournier)</i>
              <br />
              <br />
              <b>JEUDI : 20H30-22H30</b>
              <br />
              <i> (Jean Fournier)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>SÉNIORS - ÉQUIPE 2</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              Gymnase collège les Ormeaux, 15 Rue D'Estienne d'Orves, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 21H00-22H30</b>
              <i> (Jean Fournier)</i>
              <br />
              <br />
              <b>VENDREDI 20H30-22H30</b>
              <i> (Collège Les Ormeaux)</i>
            </p>
          </div>
        </div>

        <h2>COTISATIONS</h2>
        <hr className="ligne-titre"></hr>

        <div className="paiement">
          <h3>MOYENS DE PAIEMENT</h3>
          <div>
            <ul className="ul-paiement">
              {/* <li>
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
              </li> */}
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
                      Auprès de la section lors de la première séance
                      d'entraînement.
                    </p>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="cotisations">
          <div className="case-cotisation">
            <p>
              <b>BABIES</b>
            </p>
            <p className="prix-cotisation">
              <b>170€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>U9 À U15 INCLUS</b>
            </p>
            <p className="prix-cotisation">
              <b>208€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>U17 à U20 / SENIORS</b>
            </p>
            <p className="prix-cotisation">
              <b>224€</b>
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
            <p className="p-inscription">
              Remise de 10% à partir du 2e enfant avec le code Mon Club
              FRATERIE10
            </p>
          </div>
        </div>

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PRÉSIDENT CHRISTOPHE HIRSTEL :</h4>
          <span className="label">Mail : </span>
          <span className="email"> contact.asfbasket@gmail.com</span>
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
            <h4 className="h4-button-sportPages">Boxe Thailandaise</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketBall;
