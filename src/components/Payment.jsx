import React from 'react'
import { useTranslation } from "react-i18next";

const payment = () => {
  const { t } = useTranslation();

  return (
    <div className="payment">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>  {t("trainingFormat")}</h2>
                </div>
              </div>
              <div className="payment-options">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="payment-option">
                      <div className="payment-option-period">  {t("drive")} </div>
                      <div className="payment-option-description">
                        <p>
                        {t("p1")}
                        </p>
                      </div>
                      <div className="payment-option-price">
                        {t("forFree")}
                      </div>
                      <button className="btn btn-outline-white ">
                        {t("moreDetails")}
                      </button>
                      <div className="payment-option-flex"></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="payment-option">
                      <div className="payment-option-period">
                          {t("subscription")}
                      </div>
                      <div className="payment-option-description">
                        <p>
                          {t("p2")}
                        </p>
                      </div>
                      <div className="payment-option-price">
                        5 900<span>руб</span>
                      
                      </div>
                      <button className="btn btn-outline-white ">
                        {t("moreDetails")}
                      </button>
                      <div className="payment-option-flex"></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="payment-option">
                      <div className="payment-option-period"> {t("education")} </div>
                      <div className="payment-option-description">
                        <p>         
                        {t("p3")}
                        </p>
                      </div>
                      <div className="payment-option-price">
                        59 900<span>руб</span>
                      </div>
                      <button className="btn btn-outline-white ">
                        {t("moreDetails")}
                      </button>
                      <div className="payment-option-flex"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default payment