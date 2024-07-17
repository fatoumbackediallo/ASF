import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/sports.css";

const Rugby = () => {
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
    navigate("/squash");
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
                  Samedi 07 Septembre 2024
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              BABY RUGBY
              <br />
              <i>(A partir de 3 ans)</i>
            </h4>
            <p>
              <b>TERRAIN EN HERBE</b>
              <br />
              <i>COULÉE VERTE</i>
            </p>
            <p>
              <b>MERCREDI : 14H-15H</b>
              <br />
              <br />
              <b>MERCREDI : 15H-16H</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              U6 <i className="i-style">(2019)</i>
              <br />
              U8 <i className="i-style">(2017-2018)</i>
              <br />
              U10 <i className="i-style">(2015-2016)</i>
              <br />
              U12 <i className="i-style">(2013-2014)</i>
            </h4>
            <p>
              <b>TERRAIN EN HERBE</b>
              <br />
              <i>COULÉE VERTE</i>
            </p>
            <p>
              <b>MERCREDI : 14H00-16H00</b>
              <br />
              <br />
              <b>SAMEDI : 10H00-11H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              U14
              <br />
              <i className="i-style">(2011-2012)</i>
              <br />
              <i className="i-style">Entente avec Clamart</i>
            </h4>
            <p>
              <b>STADE DE LA PLAINE</b>
              <br />
              131 Chemin du Parc, 92140 Clamart
            </p>
            <p>
              <b>LUNDI : 18H30-19H30</b>
              <br />
              <br />
              <b>MERCREDI : 18H00-20H00</b>
              <br />
              <br />
              <b>Matchs certains samedis après-midi</b>
              <br />
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>RUGBY ADAPTE</h4>
            <p>
              <b>TERRAIN EN HERBE</b>
              <br />
              <i>COULÉE VERTE</i>
            </p>
            <p>
              <b>MERCREDI : 09H30-11H00</b>
              <br />
              <br />
              <b>VENDREDI : 14H-16H</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>RUGBY SANTE</h4>
            <p>
              <b>TERRAIN EN HERBE</b>
              <br />
              <i>COULÉE VERTE</i>
            </p>
            <p>
              <b>LUNDI : 20H00-22H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              SENIORS <br />
              <i>(18 à 35 ans)</i>
            </h4>
            <p>
              <b>TERRAIN EN HERBE</b>
              <br />
              <i>COULÉE VERTE</i>
            </p>
            <p>
              <b>MARDI : 20H00-22H00</b>
              <br /> <br />
              <b>JEUDI : 20H00-22H00</b>
            </p>
          </div>

          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              RUGBY à 5 MIXTE <br />
              <i>(16 ans et +)</i>
            </h4>
            <p>
              <b>TERRAIN EN HERBE</b>
              <br />
              <i>COULÉE VERTE</i>
            </p>
            <p>
              <b>MARDI : 20H00-22H00</b>
              <br />
              <br />
              <b> SAMEDI : 10H00-12H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>
              FOLKLOS <br />
              (+ 35 ANS)
            </h4>
            <p>
              <b>TERRAIN EN HERBE</b> <br />
              <i>COULÉE VERTE</i>
            </p>
            <p>
              <b>MERCREDI : 20H00-22H00</b>
              <br />
              <br />
              <b>DIMANCHE : 10H00-12H00</b>
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
                    <p>OU</p>
                    <p>Auprès de la section lors de la première séance.</p>
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
                <b>BABY</b>
                <br />
                <i>(A partir de 3 ans)</i>
              </p>
              <p className="prix-cotisation">
                <b>130€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>U6</b>
                <br />
                <i>(2019)</i>
              </p>
              <p className="prix-cotisation">
                <b>160€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>U8</b>
                <br />
                <i>(2017-2018)</i>
                <br />
                <b>U10</b>
                <br />
                <i>(2015-2016)</i>
                <br />
                <b>U12</b>
                <br />
                <i>(2013-2014)</i>
                <br />
                <b>U14</b>
                <br />
                <i>(2011-2012)</i>
              </p>
              <p className="prix-cotisation">
                <b>250€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>SÉNIORS</b>
                <br />
                <i>(18 à 35 ans)</i>
              </p>
              <p className="prix-cotisation">
                <b>260€</b>
              </p>
            </div>

            <div className="case-cotisation">
              <p>
                <b>FOLKLOS</b>
                <br />
                <i>(+ 35 ans)</i>
              </p>
              <p className="prix-cotisation">
                <b>220€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>RUGBY À 5 MIXTE</b>
                <br />
                <i>(16 ans et +)</i>
              </p>
              <p className="prix-cotisation">
                <b>140€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>RUGBY SANTE</b>
              </p>
              <p className="prix-cotisation">
                <b>200€</b>
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
              Médical (si + de 3 ans) si nouveau ou souhait de la section.
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
              Médical (si + de 3 ans) si nouveau ou souhait de la section.
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

        <h4 className="p-inscription">
          Remises lors de l'inscription en ligne sur MonClub avec les codes
          suivants : <br />
          FRATRIE10 -10% à partir du 2ème enfant <br />
          FRATRIE20 -20% à partir du 3ème enfant
        </h4>

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>ÉCOLE DE RUGBY : TONY VALIER-BRASIER</h4>
          <span className="label">Mail : </span>
          <span className="email"> edr.fontenay@gmail.com</span>
          <span className="label">Téléphone : </span>
          <span className="email">06 52 95 79 89</span>
        </div>
        <div className="contacts">
          <h4>RUGBY ADAPTE : KARINE GRENIER</h4>
          <span className="label">Mail : </span>
          <span className="email"> grenierkarine@yahoo.fr</span>
          <span className="label">Téléphone : </span>
          <span className="email">06 99 51 15 32</span>
        </div>
        <div className="contacts">
          <h4>RUGBY SANTE : JEROME CLECH</h4>
          <span className="label">Mail : </span>
          <span className="email"> jerome.clech1@gmail.com</span>
          <span className="label">Téléphone : </span>
          <span className="email">06 18 34 81 55</span>
        </div>
        <div className="contacts">
          <h4>FOLKLOS : OLIVIER CANDAU</h4>
          <span className="label">Téléphone : </span>
          <span className="email">06 33 34 81 55</span>
        </div>
        <div className="contacts">
          <h4>RUGBY À 5 MIXTE : PIERRE CHOUTEAU</h4>
          <span className="label">Téléphone : </span>
          <span className="email">06 84 96 96 62</span>
        </div>
        <div className="contacts">
          <h4>RUGBY SÉNIORS : STÉPHANE LECUYER</h4>
          <span className="label">Téléphone : </span>
          <span className="email">06 84 10 44 49</span>
        </div>
        <div className="contacts">
          <h4>RESEAUX SOCIAUX</h4>
          <span className="label">Facebook : </span>
          <span className="email">www.facebook.com/rugbyasf/</span>
          <span className="label">Instagram : </span>
          <span className="email">www.instagram.com/asfrugby/</span>
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
            <h4 className="h4-button-sportPages">Squash</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rugby;
