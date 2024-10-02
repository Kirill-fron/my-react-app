import React from "react";
import svg1 from "../assets/svg/1.svg";
import Jpg from "../assets/img/4.jpg";

const questions = () => {
  return (
    <>
      <div className="trailer">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-6">
              <h2 className=" fs-1">Автор курса</h2>
              <p className="author-text">
                Профессионал, который оживляет трехмерные объекты и персонажи.
                Внешний вид персонажа создается художником, но его поведение и
                движения в пространстве определяет аниматор. С помощью анимации
                можно наделить одну и ту же модель различными чертами характера:
                например, монстр может выглядеть отважным и агрессивным или,
                наоборот, робким и боязливым. 3D-аниматоры могут занимать
                позиции режиссеров-постановщиков, аниматоров, риггеров,
                специалистов по визуализации, а также художников по
                моделированию и текстурированию.
              </p>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img
                className="author-img d-block mx-auto"
                src={Jpg}
                alt="Author"
              />
            </div>
          </div>
          <div className="moskvin-showreel">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="moskvin-showreel-caption">
                  Работы от создателей курса
                  <img src={svg1} />
                </div>
              </div>
            </div>
            <div className="moskvin-showreel-video">
              <video
                id="videoPlayer"
                className="moskvin-trailer-video"
                controls
                loop
                muted
                data-video="1"
              >
                <source src="../src/assets/video/video1.mp4" type="video/mp4" />
              </video>
              <a className="moskvin-courses-link playbtn" href="#"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="questions">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>отвечаем на вопросы</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-1">
              <div className="questions-list">
                <div className="question">
                  <div className="question-static">
                    <div className="question-title">
                      У меня нет опыта в 3D-анимации, подойдет ли мне этот курс?
                    </div>
                    <a className="question-toggler" href="#">
                      +
                    </a>
                  </div>
                  <div className="question-toggle">
                    Да. Курс начинается с основ. На старте пригодятся базовые
                    знания интерфейса Blender. По ходу обучения темы
                    усложняются, во всех тонкостях будем разбираться постепенно.
                  </div>
                </div>
                <div className="question">
                  <div className="question-static">
                    <div className="question-title">Как проходит обучение?</div>
                    <a className="question-toggler" href="#">
                      +
                    </a>
                  </div>
                  <div className="question-toggle">
                    Курс состоит из видеоуроков. К каждому из роликов вы
                    подключаетесь (или возвращаетесь для повторения) в любое
                    время, они всегда доступны онлайн. К каждой теме вы
                    получаете материалы – проекты с объектами и персонажами,
                    подготовленными к анимации.
                  </div>
                </div>
                <div className="question">
                  <div className="question-static">
                    <div className="question-title">
                      Все уроки доступны сразу?
                    </div>
                    <a className="question-toggler" href="#">
                      +
                    </a>
                  </div>
                  <div className="question-toggle">
                    <p>
                      На старте курса вы получите доступ к урокам базового
                      уровня. Вы всегда будете знать, какой урок – следующий. В
                      разделе «Программа обучения» вы можете увидеть, какие темы
                      уже опубликованы и какие появятся в ближайшее время. Курс
                      будет регулярно пополняться и обновляться. Вы можете
                      заниматься в своем темпе – возвращаться к каким-то темам
                      и, наоборот, переходить к следующим.
                    </p>
                  </div>
                </div>
                <div className="question">
                  <div className="question-static">
                    <div className="question-title">
                      Почему такая система курса?
                    </div>
                    <a className="question-toggler" href="#">
                      +
                    </a>
                  </div>
                  <div className="question-toggle">
                    <p>
                      Мы строим курс, основываясь на практике. С нашим форматом
                      вместо обычных пары-тройки финальных работ вы получите
                      максимум полезной информации и опыта. Подписка на 1 месяц
                      позволяет завершить обучение в любой момент, когда
                      почувствуете себя уверенно. Вы всегда можете вернуться к
                      обучению, если увидите интересные для себя уроки. Тариф «6
                      месяцев» позволит вам основательно и без спешки освоить
                      весь материал, необходимый для того, чтобы стать 3D
                      аниматором. Тариф «Годовой доступ» кроме
                      вышеперечисленного даст вам доступ к курсам по
                      моделированию, текстурированию и риггингу, которые выйдут
                      на нашей платформе вслед за курсом по анимации.
                    </p>
                  </div>
                </div>
                <div className="question">
                  <div className="question-static">
                    <div className="question-title">
                      Будет ли в курсе «3D Анимация в программе Blender» только
                      анимация персонажей?
                    </div>
                    <a className="question-toggler" href="#">
                      +
                    </a>
                  </div>
                  <div className="question-toggle">
                    <p>
                      Нет, это будет одна из тем. Мы еще будем изучать
                      моушн-дизайн и предметную анимацию.
                    </p>
                  </div>
                </div>
                <div className="question">
                  <div className="question-static">
                    <div className="question-title">
                      Что мне будет доступно и как долго у меня будет доступ к
                      обучению?
                    </div>
                    <a className="question-toggler" href="#">
                      +
                    </a>
                  </div>
                  <div className="question-toggle">
                    <p>
                      Зависит от тарифа. На этапе выбора ознакомьтесь с
                      описаниями.
                    </p>
                    <p>Коротко рассказываем:</p>
                    <ul>
                      <li>
                        «Подписка на 1 месяц»: доступны уроки и материалы,
                        опубликованные на момент оформления подписки и в течение
                        срока ее действия. Можно отменить в любой момент
                      </li>
                      <li>
                        «6 месяцев»: в течение 6 месяцев вам будут доступны
                        уроки и материалы, которые есть на момент старта курса и
                        все, которые выходят в рамках всей программы курса
                      </li>
                      <li>
                        «Годовой доступ»: вам будут доступны все курсы,
                        выходящие на нашей платформе в течение года («3D
                        Анимация в программе Blender», «3D Моделинг в программе
                        Blender», «Текстурирование», «Риггинг в программе
                        Blender»
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="question">
                  <div className="question-static">
                    <div className="question-title">
                      Почему программа Blender?
                    </div>
                    <a className="question-toggler" href="#">
                      +
                    </a>
                  </div>
                  <div className="question-toggle">
                    <p>
                      Blender – бесплатная и довольно простая, поэтому подходит
                      новичкам. Она развивается и обновляется быстрее всех своих
                      аналогов. Это профессиональный софт, на котором можно
                      оттачивать навыки анимации. После Blender вы легко
                      перейдете на любой другой продукт, если захотите.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="questions-more">
            <div className="questions-more-title">Остались еще вопросы?</div>
            <div className="questions-more-email">
              <a href="mailto:hello@animocean.pro">hello@animocean.pro</a>
            </div>
            <div className="questions-more-phone">
            <a href="https://t.me/huffleskuff" target="_blank">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default questions;
