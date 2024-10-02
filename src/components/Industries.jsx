import React from 'react'
import { useTranslation } from "react-i18next";


const industries = () => {
  const { t } = useTranslation();

  return (
    <div className="industries">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="animated-block h100 from-left">
                    <h2> {t("title")}</h2>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="industries-tags">
                    <div className="industries-tag"> {t("film")}</div>
                    <div className="industries-tag">{t("gaming")}</div>
                    <div className="industries-tag white"> {t("advertising")}</div>
                    <div className="industries-tag white"> {t("television")}</div>
                    <div className="industries-tag white"> {t("architecture")}</div>
                    <div className="industries-tag white"> {t("medicine")}</div>
                    <div className="industries-tag white"> {t("education")}</div>
                    <div className="industries-tag white">{t("science")}</div>
                    <div className="industries-tag white">
                    {t("manufacturing")}
                    </div>
                    <div className="industries-tag">
                    {t("vr")}
                    </div>
                    <div className="industries-tag white">
                    {t("music")}
                    </div>
                    <div className="industries-tag">   {t("fashion")} </div>
                    <div className="industries-tag white">
                      {t("space")}
                    </div>
                  </div>
         
                </div>
              </div>
            </div>
          </div>
  )
}

export default industries