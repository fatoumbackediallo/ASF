import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import MentionsLegales from "../pages/MentionsLégales";
import "../styles/footer.css";
import Facebook from "../images/Footer/footer-facebook-icone.png";
import Instagram from "../images/Footer/footer-instagram-icone.png";

function Footer() {
  return (
    <section className="main-footer">
      <div className="top-footer">
        <div className="div-logoFooter">
          <img src={Logo} alt="logo" className="logoFooter" />
        </div>

        <div className="contenu-footer">
          <div className="adresse-footer">
            <p>10 Place du Château Sainte-Barbe 92260 Fontenay-aux-Roses</p>
          </div>
          <div className="tel-hor">
            <div className="telephone-footer">
              <p>01 46 01 98 01</p>
            </div>
            <div className="horaires-footer">
              <p>Lun - Ven 15h00 - 18h15</p>
            </div>
          </div>
        </div>

        <div className="reseaux-sociaux">
          <div className="reseaux-sociaux-texte">
            <p>Réseaux Sociaux</p>
          </div>
          <div className="reseaux-sociaux-icones">
            <a href="https://www.facebook.com/ASFontenayAuxRoses">
              <img alt="lien facebook" src={Facebook}></img>
            </a>
            <a href="https://www.instagram.com/asfontenay?igsh=MWc1MzlxZzJjMTBtcQ==">
              <img alt="lien instagram" src={Instagram}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="liens-footer">
        <div className="titres-liens">
          <ul>
            <li>
              <Link to="/" className="link-footer">
                <h4>Accueil</h4>
              </Link>
            </li>
            <li>
              <Link to="/historique" className="link-footer">
                <h4>Association</h4>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-footer">
                <h4>Contact</h4>
              </Link>
            </li>
            <li>
              <Link to="/benevole" className="link-footer">
                <h4>Devenir bénévole</h4>
              </Link>
            </li>
            <li>
              <Link to="/evenements" className="link-footer">
                <h4>Évènements</h4>
              </Link>
            </li>
            <li>
              <Link to="/albums" className="link-footer">
                <h4>Albums</h4>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <NavLink
            to="/mentionslegales"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={MentionsLegales}
          >
            Mentions Légales
          </NavLink>
        </div>
      </div>

      <div>
        <p className="footerText">© 2024 ASF - All rights reserved</p>
      </div>
    </section>
  );
}

export default Footer;
