import React from "react";
import svg1 from "../assets/svg/1.svg";
import Video2 from "../assets/video/video2.mp4";
import img7 from "../assets/img/7_.png";

import { useTranslation } from "react-i18next";

const Trailer = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="trailer">
        <div className="container">
          <div className="moskvin-showreel">
            <div className="row ">
              <div className="text-center mx-auto">
                <p className="moskvin-showreel-caption">{t("courseTrailer")}</p>
                <p className="text1">
                  Посмотрите трейлер нашего курса и узнайте больше о его
                  особенностях, программе и результатах обучения
                </p>
              </div>
            </div>

            <div className="row my-5 assets-list">
              <div className="col-lg-7 offset-lg-1">
                <img src={img7} alt="img7" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="payment-options">
        <div class="row align-items-center">
          <h2></h2>
          <div class="col-lg-4">
            <div class="payment-option">
              <div class="payment-option-period"> Тест-драйв </div>
              <div class="payment-option-description">
                <p>
                  Получите доступ к тестовым урокам для того, чтобы оценить
                  подходит ли вам подача и уровень курса. Так же вы сможете
                  получать актуальную информацию о новых уроках и темах, чтобы
                  иметь возможность подключиться к прохождению курса на
                  интересующем вас этапе
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="payment-option">
              <div class="payment-option-period">Помесячная подписка</div>
              <div class="payment-option-description">
                <p>
                  Получите доступ к курсу на период действия подписки. Подписка
                  не является рассрочкой, её можно отменить в любой момент. Этот
                  тариф позволяет подключаться к прохождению обучения или
                  отложить обучение до выхода интересующей вас темы
                </p>
              </div>
            
            </div>
          </div>
          <div class="col-lg-4">
            <div class="payment-option">
              <div class="payment-option-period"> Годовое обучение </div>
              <div class="payment-option-description">
                <p>
                  Этот тариф позволит проходить обучение в комфортном темпе. В
                  течение года вы будете получать новые уроки и задания, которые
                  позволят вам отрабатывать все знания на практике и составить
                  портфолио. Кроме курса по анимации вам будут открываться так
                  же уроки по моделингу и риггингу, что позволит вам стать
                  универсальным 3D артистом
                </p>
              </div>
              
              <div class="payment-option-flex"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trailer;
