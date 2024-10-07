import React from "react";
import svg1 from "../assets/svg/1.svg";
import Png1_ from "../assets/img/1_.png";
import Png2_ from "../assets/img/2_.png";
import Png3_ from "../assets/img/3_.png";
import Png4_ from "../assets/img/4_.png";
import Png5_ from "../assets/img/5_.png";
import Png6_ from "../assets/img/6_.png";
import Png7_ from "../assets/img/7_.png";

import { useTranslation } from "react-i18next";

const lessons = () => {
  const { t } = useTranslation();

  return (
    <div id="lessons" className="moskvin-lessons">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 offset-lg-1">
            <h2>
              {t("trainingProgram")}
              <img src={svg1} />
            </h2>
            <div className="moskvin-lessons-list">
              <div className="row">
                <div className="col-lg-6">
                  <div className="moskvin-lesson">
                    <div className="moskvin-lesson-inner">
                      <div className="moskvin-lesson-front">
                        <div className="moskvin-lesson-cover">
                          <img src={Png1_} alt="3D анимация" />
                        </div>
                        <div className="moskvin-lesson-title">
                          {t("basics")}
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>{t("li1")}</li>
                            <li> {t("li2")} </li>
                            <li>{t("li3")}</li>
                            <li> {t("li4")}</li>
                            <li> {t("li5")}</li>
                            <li>{t("li6")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="moskvin-lesson">
                    <div className="moskvin-lesson-inner">
                      <div className="moskvin-lesson-front">
                        <div className="moskvin-lesson-cover">
                          <img src={Png2_} />
                        </div>
                        <div className="moskvin-lesson-title">
                          {t("practice")}
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>{t("li7")}</li>
                            <li> {t("li8")} </li>
                            <li> {t("li9")}</li>
                            <li> {t("li10")}</li>
                            <li>{t("li11")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="moskvin-lesson">
                    <div className="moskvin-lesson-inner">
                      <div className="moskvin-lesson-front">
                        <div className="moskvin-lesson-cover">
                          <img src={Png3_} />
                        </div>
                        <div className="moskvin-lesson-title">
                          {t("characterAnimation")}
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>{t("li12")}</li>
                            <li>{t("li13")}</li>
                            <li>{t("li14")}</li>
                            <li>{t("li15")}</li>
                            <li>{t("li16")}</li>
                            <li>{t("li17")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="moskvin-lesson">
                    <div className="moskvin-lesson-inner">
                      <div className="moskvin-lesson-front">
                        <div className="moskvin-lesson-cover">
                          <img src={Png7_} />
                        </div>
                        <div className="moskvin-lesson-title">
                          Motion design
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>{t("li18")}</li>
                            <li>{t("li19")}</li>
                            <li> {t("li20")}</li>
                            <li>{t("li21")}</li>
                            <li>{t("li22")}</li>
                            <li> {t("li23")}</li>
                            <li>{t("li24")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="moskvin-lesson">
                    <div className="moskvin-lesson-inner">
                      <div className="moskvin-lesson-front">
                        <div className="moskvin-lesson-cover">
                          <img src={Png4_} />
                        </div>
                        <div className="moskvin-lesson-title">
                          {t("facialAnimation")}
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>{t("li24")} </li>
                            <li>{t("li25")}</li>
                            <li>{t("li26")}</li>
                            <li>{t("li27")}</li>
                            <li> {t("li28")}</li>
                            <li>{t("li29")}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="moskvin-lesson">
                    <div className="moskvin-lesson-inner">
                      <div className="moskvin-lesson-front">
                        <div className="moskvin-lesson-cover">
                          <img src={Png5_} />
                        </div>
                        <div className="moskvin-lesson-title">
                          {t("сomposition")}
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>{t("li30")}</li>
                            <li>{t("li31")}</li>
                            <li> {t("li32")}</li>
                            <li>{t("li33")}</li>
                            <li> {t("li34")}</li>
                            <li>{t("li35")} </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="moskvin-lesson">
                    <div className="moskvin-lesson-inner">
                      <div className="moskvin-lesson-front">
                        <div className="moskvin-lesson-cover">
                          <img src={Png6_} />
                        </div>
                        <div className="moskvin-lesson-title">
                          {t("advancedAnimation")}
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>{t("li36")} </li>
                            <li>
                             {t("li37")} 
                            </li>
                            <li> {t("li38")} </li>
                            <li>
                              {t("li39")} 
                            </li>
                            <li>
                             {t("li40")} 
                            </li>
                            <li>
                              {t("li41")} 
                            </li>
                          </ul>
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
  );
};

export default lessons;
