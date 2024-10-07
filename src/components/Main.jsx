import React from "react";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="course">
        <div className="container">
          <div className="course-caption">
            <div className="course-caption-item"> {t("courseTitle")}</div>
            <div className="course-caption-item"> {t("education")}</div>
          </div>
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
                <h2> {t("careerTitle")}</h2>
                <div className="moskvin-services-list">
                  <div className="moskvin-service">
                    <div className="moskvin-service-inner">
                      <div className="row">
                        <div className="col-lg-8">
                          <h3> {t("careerAnimatorTitle")}</h3>
                          <div className="moskvin-service-announce">
                            {t("careerAnimatorDescription")}
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
      </div>
    </>
  );
};

export default Main;
