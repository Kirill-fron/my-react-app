import React from "react";
import { useTranslation } from "react-i18next";
import Jpg from "../assets/img/4.jpg";
import Png1 from '../assets/img/Video 01.png'
const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="course">
        <div className="container">
          <h1>{t("courseName")}</h1>
          <div className="row">
            <div className="col-lg-7">
              <div className="course-description">{t("courseDescription")}</div>
            </div>
          </div>
          <div className="course-btns">
            <a href="#lessons" className="btn btn-outline-white">
              {t("programBtn")}
            </a>
            <a href="#lessons" className="btn btn-outline-white mx-5">
              {t("startFOR")}
            </a>
          </div>
          <div className="moskvin-benefits">
            <div className="moskvin-benefit">
              <div className="moskvin-benefit-label">{t("levelLabel")}</div>
              <div className="moskvin-benefit-value">{t("levelValue")}</div>
            </div>
            <div className="moskvin-benefit">
              <div className="moskvin-benefit-label">{t("skillsLabel")}</div>
              <div className="moskvin-benefit-value">{t("skillsValue")}</div>
            </div>
            <div className="moskvin-benefit">
              <div className="moskvin-benefit-label"> {t("practiceLabel")}</div>
              <div className="moskvin-benefit-value">{t("practiceValue")}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="career">
        <div className="container">
          <div className="row">
            <div className="col-lg-11 offset-lg-1">
              <div className="career-activities">
                <div className="moskvin-services-list">
                  <div className="moskvin-service">
                    <div className="moskvin-service-inner">
                      <div className="row my-5">
                        <div className="col-lg-6">
                          <h2 className="color-green"> {t("careerTitle")}</h2>
                          <p className="color-h3">{t("skills1")}</p>
                          <p className="author-text">{t("skills2")}</p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                          <img
                            className="author-img d-block mx-auto"
                            src={Png1}
                            alt="Author"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
