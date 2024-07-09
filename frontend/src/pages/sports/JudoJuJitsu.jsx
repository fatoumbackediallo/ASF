import React, { useState } from "react";
import "../../styles/sports.css";

const JudoJuJitsu = () => {
  const [showOthers, setShowOthers] = useState(false);

  const handleToggle = () => {
    setShowOthers(!showOthers);
  };

  return (
    <div>
      <div className="header judoJuJitsu">
        <div className="nom-sport">
          <h1>JUDO / JU JITSU</h1>
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
            Le Judo est un Art Martial, un sport de combat, mais aussi et
            surtout (comme le voulait son fondateur Jigoro Kano) une école de la
            vie  dictée par un code moral. Son respect est la condition première
            de la pratique du judo. Il est fait de valeurs essentielles
            applicables aussi bien sur le « tatami » que dans la vie de tous les
            jours : <br />
            <br />- La politesse : C’est le respect d’autrui
            <br />- Le courage : C’est faire ce qui est juste
            <br />- La sincérité : C’est s’exprimer sans déguiser sa pensée
            <br />- L’honneur : C’est être fidèle à la parole donnée
            <br />- La modestie : C’est parler de soi sans orgueil <br />- Le
            respect : C’est faire naitre la confiance
            <br /> - Le contrôle de soi : C’est faire taire sa colère
            <br /> - L’amitié : C’est le plus pur des sentiments humains.
            <br />
            <br />
            Club affilié à la Fédération Française de Judo et Disciplines
            Associées (F.F.J.D.A).
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
            <h4>ÉVEILS JUIL. À DEC. 2018/2019</h4>
            <p>
              <b>DOJO 2</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 17H00-18H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ÉVEILS CONFIRMÉS JANV. À JUIN. 2018</h4>
            <p>
              <b>
                DOJO 2 <br /> DOJO 1+2
              </b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 16H00-17H00
                <br />
                MARDI 17H45-18H45
                <br />
                VENDREDI 17H45-18H45
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>PRÉ-POUSSINS 2016 - 2017</h4>
            <p>
              <b>
                DOJO 2 <br /> DOJO 1+2
              </b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 16H00-17H00
                <br />
                MARDI 17H45-18H45
                <br />
                VENDREDI 17H45-18H45
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>POUSSINS 2014 - 2015</h4>
            <p>
              <b>
                DOJO 2 <br /> DOJO 1+2
              </b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 15H00-16H00
                <br />
                MARDI 15H00-16H00
                <br />
                VENDREDI 18H45-19H45
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>BENJAMINS 2012 - 2013</h4>
            <p>
              <b>
                DOJO 2 <br /> DOJO 1+2 <br /> DOJO 2
              </b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 18H00-19H30
                <br />
                JEUDI 18H00-19H30
                <br />
                MERCREDI 14H00-15H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>MINIMES 2010 - 2011</h4>
            <p>
              <b>
                DOJO 2 <br /> DOJO 1+2 <br /> DOJO 2
              </b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 18H00-19H30
                <br />
                JEUDI 18H00-19H30
                <br />
                MERCREDI 18H00-19H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>CADETS 2007 - 2009</h4>
            <p>
              <b>
                DOJO 2 <br /> DOJO 1+2 <br /> DOJO 2
              </b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 19H45-21H15
                <br />
                JEUDI 19H45-21H15
                <br />
                MERCREDI 18H00-19H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>JUNIORS ET ADLUTES (2006 ET AVANT)</h4>
            <p>
              <b>
                DOJO 2 <br /> DOJO 1+2
              </b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 19H45-21H15
                <br />
                JEUDI 19H45-21H15
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>JU JITSU 2006 ET AVANT</h4>
            <p>
              <b>
                DOJO 2 <br /> DOJO 1+2
              </b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI 19H45-21H15
                <br />
                JEUDI 19H45-21H15
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
                <b>ÉVEIL (JUIL. À DEC. 2018 - 2019)</b>
              </p>
              <p className="prix-cotisation">
                <b>241€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>ÉVEILS CONFIRMÉS (JANV. À JUIN 2018)</b>
              </p>
              <p className="prix-cotisation">
                <b>275€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>PRÉ-POUSSINS ET POUSSINS (2014 À 2017)</b>
              </p>
              <p className="prix-cotisation">
                <b>275€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>BENJAMINS ET MINIMES (2010 À 2013)</b>
              </p>
              <p className="prix-cotisation">
                <b>288€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>CADETS, JUNIORS ET ADULTES (JUDO 2007 ET AVANT)</b>
              </p>
              <p className="prix-cotisation">
                <b>334€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>JU JITSU (2067 ET AVANT)</b>
              </p>
              <p className="prix-cotisation">
                <b>334€</b>
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

        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>ASF JUDO JU JITSU</h4>
          <span className="label">Mail : </span>
          <span className="email"> asfjudo@gmail.com</span>
          <span className="label">Site Web : </span>
          <span className="email"> www.asfjudo.com</span>
        </div>
      </div>
    </div>
  );
};

export default JudoJuJitsu;
