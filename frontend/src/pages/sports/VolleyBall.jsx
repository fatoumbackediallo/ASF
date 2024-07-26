import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const VolleyBall = () => {
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
    navigate("/yoga");
  };

  return (
    <div>
      <div className="header volleyball">
        <div className="nom-sport">
          <h1 className="h1-mon-sport">VOLLEY BALL</h1>
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
            Le volley-ball est un sport d'équipe dynamique et stratégique qui se
            joue sur un terrain divisé par un filet. Deux équipes de six joueurs
            s'affrontent pour marquer des points en envoyant le ballon au-dessus
            du filet dans le camp adverse, tout en empêchant le ballon de
            toucher le sol de leur côté. Le volley-ball développe des
            compétences en saut, en passe et en frappe, tout en renforçant la
            coordination et l'esprit d'équipe.
            {/* <br />
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
            des tournois internes et participons à des compétitions locales,
            régionales et nationales, offrant à nos membres la possibilité de se
            mesurer à d'autres équipes et de progresser.
            <br />
            <br />
            Que vous soyez débutant souhaitant découvrir les bases du
            volley-ball ou joueur expérimenté cherchant à perfectionner votre
            technique et votre stratégie, notre section de volley-ball vous
            propose des programmes adaptés à vos besoins et objectifs.
            Rejoignez-nous pour partager la passion du volley-ball et vivre des
            moments sportifs inoubliables sur le terrain ! */}
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
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
            <h4>
              ÉCOLE DE VOLLEY <br />
              M7 - M9 - M11
              <br />
              <i>2014 et +</i>
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Parc, <br />7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI : 17H00-18H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              M13 FEMININE
              <br />
              <i>2010 - 2013</i>{" "}
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Parc,
              <br /> 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 17H00-18H15</b>
              <br />
              <br />
              <b>MERCREDI : 17H00-18H30</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              M13 MASCULIN
              <br />
              <i>2010 - 2015</i>
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Parc, <br />7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 17H00-18H15
                <br />
                <br />
                MERCREDI : 17H30-18H30
              </b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              M15 FEMININE
              <br />
              <i>2010 - 2013</i>
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Parc,
              <br /> 7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 18H15-20H00
                <br />
                <br />
                MERCREDI : 17H00-18H30
              </b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              M15 MASCULIN
              <br />
              <i>2010 - 2013</i>
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Parc, <br />7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
            </p>
            <p>
              <b>
                LUNDI : 17H00-18H15
                <br />
                <br />
                MERCREDI : 17H00-18H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              M18 FEMININE
              <br />
              M21
              <br />
              <i>2004 - 2009</i>
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Parc, <br />7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier <br />7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 18H15-20H00
                <br />
                <i className="i-style">(Parc)</i>
                <br />
                <br />
                MERCREDI : 18H30-20H30
                <br />
                <i className="i-style">(Parc)</i>
                <br />
                <br />
                VENDREDI : 18H45-20H30
                <br />
                <i className="i-style">(Jean Fournier)</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              M18 MASCULIN
              <br />
              M21
              <br />
              <i>2004 - 2009</i>
            </h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Parc, <br />7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI : 18H15-20H00
                <br />
                <br />
                MERCREDI : 18H30-20H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>SENIORS MASCULINS REGIONAL</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase collège les Ormeaux, <br />
              15 Rue D'Estienne d'Orves, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Stade du Panorama <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI : 20H30-22H30
                <br />
                <i className="i-style">(Les Ormeaux)</i>
                <br />
                <br />
                JEUDI : 20H30-22H30
                <br />
                <i className="i-style">(Panorama)</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>SENIORS MASCULINS DEPARTEMENTAL</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier, <br />7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI : 18H45-20H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>SENIORS MASCULINS N3</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Parc, <br />7 Avenue du Parc, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase Jean Fournier <br />7 Rue des Potiers, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI : 20H30-22H30
                <br />
                <i className="i-style">(Parc)</i>
                <br />
                <br />
                VENDREDI : 20H30-22H30
                <br />
                <i className="i-style">(Jean Fournier)</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>LOISIRS COMPETITIONS</h4>
            <p>
              <b>HALLE</b>
              <br />
              Stade du Panorama <br />
              21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              Gymnase Collège les Ormeaux, <br />
              15 Rue D'Estienne d'Orves, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                JEUDI : 20H30-22H30
                <br />
                <i className="i-style">Panorama</i>
                <br />
                <br />
                VENDREDI : 20H30-23H00
                <br />
                <i className="i-style">Les Ormeaux</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>LOISIRS</h4>
            <p>
              <b>HALLE</b>
              <br />
              Gymnase du Parc, <br />7 Avenue du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI : 20H00-22H45</b>
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
                      Exemple : ASF VOLLEY - enfant AZERTYUI Noémie ou ASF
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
                      Au Forum des Associations le
                      <b className="gras"> 08 septembre</b> au Gymnase du Parc
                      entre 10h00 et 18h00
                    </p>
                    <p>ou</p>
                    <p>Lors de la première séance d'entraînement.</p>
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
                <b>
                  M7 - M9 - M11 <br /> (2014 ET +)
                </b>
              </p>
              <p className="prix-cotisation">
                <b>200€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  M13/M15 <br /> (2010 À 2013)
                </b>
              </p>
              <p className="prix-cotisation">
                <b>210€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>
                  M18/M21 <br /> (2004 À 2009)
                </b>
              </p>
              <p className="prix-cotisation">
                <b>220€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>LOISIRS</b>
              </p>
              <p className="prix-cotisation">
                <b>210€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>LOISIRS COMPÉTITION</b>
              </p>
              <p className="prix-cotisation">
                <b>250€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>ADULTES COMPÉTITION</b>
                <br />
                <i>
                  Seniors Masculins Régional
                  <br /> Départemental /N3
                </i>
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
        <div>
          <p className="h4-message">
            Equipes Seniors Regional/Départemental et N3 : <br />
            Se renseigner auprès du président de la section (06 28 25 51 45),
            <br />
            <br />
            Remise de 10% à partir du 2eme enfant avec le code Mon Club
            FRATRIE10
            <br /> Remise de 20% à partir du 3eme enfant avec le code Mon Club
            FRATRIE20
          </p>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PRÉSIDENT : PHILIPPE SCHAUB </h4>
          <div className="span-contact">
            <span className="label">Mail : </span>
            <span className="email"> philoufox@gmail.com</span>
          </div>
          <div>
            <span className="label">Téléphone : </span>
            <span className="email"> 06 28 25 51 45</span>
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
            <h4 className="h4-button-sportPages">Yoga</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolleyBall;
