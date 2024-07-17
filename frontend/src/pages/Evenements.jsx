import React from "react";
import "../styles/evenements.css";
import stageFoot from "../images/Evenements/stageFoot.png";
import stageHandball from "../images/Evenements/stageHandball.png";
import stageTennis from "../images/Evenements/stageTennis.png";
import stageTennisDeTable from "../images/Evenements/stageTennisDeTable.png";
import BandeauEvent from "../images/Accueil/bandeau-header-accueil.png";

const Evenements = () => {
  const cardsEvent = [
    {
      title: "Stage Foot",
      photo: stageFoot,
      informations: "U9 à U13",
      date: "8 Juillet au 12 juillet",
      location: "Stade du Panorama",
      contact: "06 89 86 78 11",
    },
    {
      title: "Stage Tennis",
      photo: stageTennis,
      informations: `<ul>
                          <li>Tout public (Adhérent ou non adhérent à l'ASF)</li>
                          <li>De 9h30 à 16h30</li>
                          <li>Inscription : www.asftennis.com</li>
                        </ul>`,
      date: `<ul>
                          <li>24 juin au 28 juin 2024)</li>
                          <li>01 au 05 juillet 2024</li>
                          <li>08 juillet au 12 juillet 2024</li>
                          <li>15 au 19 juillet 2024</li>
                          <li>26 au 30 Août 2024</li>
                        </ul>`,

      location: "Tennis municipaux",
      contact:
        "Responsable administrative : contact@asftennis.com <br/> 01 46 60 86 21",
    },

    {
      title: "Stage Tennis de Table",
      photo: stageTennisDeTable,
      informations: `<ul>
                          <li>Tout public (Adhérent ou non adhérent à l'ASF)</li>
                          <li>A partir de 6 ans</li>
                          <li>De 9h à 12h</li>
                        </ul>`,
      date: "8 Juillet au 12 juillet",
      location: "Stade du Panorama",
      contact:
        "Rémi RICHARD - Secrétaire/Correspondant sportif : richard.r13p@free.fr",
    },

    {
      title: "Stage Handball",
      photo: stageHandball,
      informations: `<ul>
                         <li>Tout public (Adhérent ou non adhérent à l'ASF)</li>
                          <li>De 7 à 11 ans </li>
                          <li>De 9h à 17h</li>
                        </ul>`,
      date: "8 Juillet au 12 juillet",
      location: "Halle du Panorama",
      contact: "Hugo Brutelle : 06 11 75 85 35",
    },
  ];

  return (
    <div>
      <div className="header-event">
        <img alt="bandeau-event" src={BandeauEvent}></img>
      </div>
      <div className="contenu-events">
        <h4>ÉVÉNEMENTS DE L'ASSOCIATON </h4>
        <div className="mois-events">
          <h4 className="titres-mois-events">JUILLET 2024</h4>
        </div>
        <hr className="barre-event"></hr>
        <div className="evenements-page">
          <div className="page-cards-container">
            {cardsEvent.map((event, index) => (
              <div key={index}>
                <div className="page-event-card" key={index}>
                  <img
                    src={event.photo}
                    alt={event.title}
                    className="event-photo"
                  />
                  <div className="page-event-details">
                    <h5 className="event-titre">{event.title}</h5>
                    <div className="date-event-container">
                      <p dangerouslySetInnerHTML={{ __html: event.date }}></p>
                    </div>
                    <div className="adresse-event-container">
                      <p>{event.location}</p>
                    </div>
                    <h4 className="titre-details">DETAILS ET CONTACT</h4>
                    <div className="details-events">
                      <p
                        dangerouslySetInnerHTML={{ __html: event.informations }}
                      ></p>
                      <div className="contact-event-container">
                        <p
                          dangerouslySetInnerHTML={{ __html: event.contact }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="barre-cards-events"></hr>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evenements;
