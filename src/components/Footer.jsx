import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-menu-title">Информация</div>
              <div className="footer-menu-items">
                <div className="footer-menu-item">
                  <Link
                    className="footer-menu-link"
                    to="/PersonalData"
                  >
                    Правовая информация
                    </Link>
                </div>
                <div className="footer-menu-item">
                  <Link
                    className="footer-menu-link"
                    to="/Of"
                  >
                    Оферта
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-copyright">© animocean 2024</div>
            </div>
            <div className="col-lg-6">
              <div className="footer-flex-row">
                <div className="footer-description">
                  тренировочный лагерь 3D аниматора
                </div>
                <div className="footer-social d-flex justify-content-center">
                  <a
                    className="footer-social-link mx-2"
                    href="https://www.instagram.com/anim0cean"
                    target="_blank"
                    title="Instagram"
                  >
                    <svg
                      className="svg-inline--fa fa-instagram fa-w-14"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="instagram"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
