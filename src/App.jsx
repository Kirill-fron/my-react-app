import { Routes, Route } from "react-router-dom";

import Video1 from "./assets/video/video1.mp4";
import Video2 from "./assets/video/video3.mp4";
import img1 from "./assets/svg/insta.svg";
import img2 from "./assets/img/Video 01.png";
import img3 from "./assets/img/7_.png";
import img4 from "./assets/img/1.png";
import img5 from "./assets/img/2.png";
import img6 from "./assets/img/3.png";
import img7 from "./assets/img/4.jpg";
import img8 from "./assets/svg/Vector_4.svg";
import logo from "./assets/img/logo.png";

function App() {
  return (
    <>
      <div class=" desktop">
        <video className="video" id="video" autoPlay loop muted data-video="0">
          <source src={Video1} type="video/mp4" />
        </video>
        <div class="div">
          <div class="start-block">
            <div class="header">
              <img
                loading="lazy"
                src={logo}
                class="img-2"
              />
              <div class="div-2">
                <div class="тренировочный-лагерь-3-d-аниматора">
                  Тренировочный Лагерь 3D Аниматора
                </div>
                <div class="div-3">
                  <a href="https://www.instagram.com/anim0cean">
                  <img loading="lazy" src={img1} class="img-3" />
                  </a>
                </div>
                <div class="button-login">войти</div>
              </div>
            </div>
            <div class="main">
              <div class="main-contant">
                <div class="main-text">
                  <div class="main-title">
                    3D Анимация
                    <br />в программе Blender
                  </div>
                  <div class="main-description">
                    На курсе вы изучите основы анимации и особенности
                    3D-анимации в программе Blender.
                    <br />
                    Вы будете работать с персонажной анимацией и моушн-дизайном,
                    получите практические навыки
                    <br />
                    и соберёте портфолио. Вы разберётесь в пайплайне интеграций
                    Blender с Mixamo и Unreal Engine,
                    <br />а также узнаете о композинге в After Effects
                  </div>
                </div>
                <div class="buttons">
                  <div class="button-program">программа</div>
                  <div class="button-start-free">начать бесплатно</div>
                </div>
              </div>
              <div class="sub-text">
                <div class="sub-text-01">
                  <div>с нуля</div>
                  <div>уровень знаний:</div>
                </div>
                <div class="sub-text-02">
                  <div>Blender, Adobe After Effects</div>
                  <div>освоите:</div>
                </div>
                <div class="sub-text-03">
                  <div>практическая работа с персонажами и моушн-дизайном</div>
                  <div>практика:</div>
                </div>
              </div>
            </div>
          </div>
          <div class="blocks">
            <div class="line"></div>
            <div class="about-block">
              <div class="div-5">
                <div class="sub-title-01">ПРОФЕССИЯ 3D-АНИМАТОР</div>
                <div class="title-02">
                  Получите навыки
                  <br />
                  актуальной профессии
                </div>
                <div class="description-02">
                  Вы сможете применять полученные знания и навыки в
                  киноиндустрии, игровой индустрии, рекламе, телевидении и
                  других областях.
                  <br />
                  Профессия 3D-аниматора позволяет создавать яркие проекты,
                  которые привлекают внимание зрителей и помогают донести до них
                  нужную информацию
                </div>
              </div>
              <img loading="lazy" src={img2} class="img-4" />
            </div>
            <div class="line-2"></div>
            <div class="trailer-block">
              <div class="div-6">
                <div class="title-03">Трейлер курса</div>
                <div class="description-03">
                  Посмотрите трейлер нашего курса и узнайте больше
                  <br />о его особенностях, программе и результатах обучения
                </div>
              </div>
              <img loading="lazy" src={img3} class="img-5" />
            </div>
            <div class="line-3"></div>
            <div class="why-choose-block">
              <div class="title-05">Почему стоит выбрать Animocean?</div>
              <div class="price-cards">
                <div class="choose-card-01">
                  <div class="div-7">
                    <div class="title-14">Доступная подача</div>
                    <div class="информация-подается-подробно-и-доступно-это-позволяет-начать-обучение-с-нуля-и-освоить-тонкости-профессии">
                      Информация подается подробно и доступно. Это позволяет
                      начать обучение с нуля и освоить тонкости профессии.
                    </div>
                  </div>
                </div>
                <div class="choose-card-2">
                  <div class="div-8">
                    <div class="title-14">Ставка на практику</div>
                    <div class="в-профессии-аниматора-самое-важное-это-практика-на-нашем-курсе-вас-ждут-десятки-часов-практики">
                      В профессии аниматора самое важное это практика. На нашем
                      курсе вас ждут десятки часов практики.
                    </div>
                  </div>
                </div>
                <div class="choose-card-3">
                  <div class="div-9">
                    <div class="title-14-2">Поддержка</div>
                    <div class="вам-будет-доступен-чат-с-автором-курса-вы-можете-обратиться-за-помощью-в-любой-момент">
                      Вам будет доступен чат с автором курса. Вы можете
                      обратиться за помощью в любой момент.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="line-4"></div>
            <div class="materials-block">
              <video
                class="img-6"
                id="video"
                autoPlay
                loop
                muted
                data-video="0"
              >
                <source src={Video2} type="video/mp4" />
              </video>
              <div class="div-10">
                <div class="sub-title-01">МАТЕРИАЛЫ КУРСА</div>
                <div class="title-02">
                  Персонажи, объекты
                  <br />и подготовленные сцены
                </div>
                <div class="description-02-2">
                  Вместе с уроками вы будете получать все необходимые для
                  практики материалы. Все материалы предоставляются вам с
                  лицензией, которая позволяет использовать их в учебных целях и
                  для демонстрации приобретённых навыков
                </div>
              </div>
            </div>
            <div class="line-5"></div>
            <div class="program-block">
              <div class="div-11">
                <div class="title-03-2">Программа обучения</div>
                <div class="description-03-2">
                  Обучение на нашем курсе длится один год. За это время вы
                  будете получать множество практических заданий. Уже с первого
                  месяца вы начнёте изучать анимацию персонажей. По окончании
                  обучения вы получите все необходимые навыки для
                  профессиональной работы
                </div>
              </div>
              <div class="program">
                <div class="program-card-01">
                  Основы 3D анимации
                  <div className="m-lesson-back">
                    <div className="m-lesson-announce">
                      <ul>
                        <li>
                          Знакомство с программой Blender, инструменты для
                          анимации
                        </li>
                        <li> Ключевые кадры и манипуляции с ними</li>
                        <li>
                          Разбор интерполяции, значение постоянной, линейной и
                          Безье интерполяции
                        </li>
                        <li> Работа с графиками анимации</li>
                        <li> Модификаторы кривых</li>
                        <li>Знакомство с принципами анимации Диснея</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="program-card-02">
                  Начальная практика
                  <div className="m-lesson-back">
                    <div className="m-lesson-announce">
                      <ul>
                        <li>Знакомство с блокингом и сплайнингом анимации</li>
                        <li> Отработка принципов анимации Диснея</li>
                        <li>Инструмент Follow Path</li>
                        <li> Анимация мяча, пинг-понга, плавающей рыбки</li>
                        <li>
                          Знакомство с программой After Effects, композинг и
                          постобработка
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="program-card-03">
                  Персонажная анимация\
                  <div className="m-lesson-back">
                    <div className="m-lesson-announce">
                      <ul>
                        <li>
                          Анимация ходьбы и бега, отработка блокинга, сплайнинга
                          и полишинга
                        </li>
                        <li>
                          Работа с референсами, анимация движений по референсу
                        </li>
                        <li>Разбор и отработка бодимеханик</li>
                        <li>
                          Центр масс, разнообразие типов ходьбы, бега, прыжки,
                          перекаты. Старт и стоп анимации движения
                        </li>
                        <li> Анимация взаимодействий персонажа с предметами</li>
                        <li>
                          Взаимодействие Blender с Mixamo, ретаргет анимации
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="program-card-04">
                  Motion Design
                  <div className="m-lesson-back">
                    <div className="m-lesson-announce">
                      <ul>
                        <li>Введение в моушн дизайн, разбор инструментов</li>
                        <li> Продуктовая анимация в программе Blender</li>
                        <li>Применение модификаторов для анимации</li>
                        <li>
                          Разбор Geometry Nodes и их применение для анимации
                        </li>
                        <li>
                          Инструменты для создания визуальных эффектов в Blender
                        </li>
                        <li> Broadcast анимация</li>
                        <li> Введение в работу с эмоциями персонажа</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="program-card-05">
                  Лицевая анимация
                  <div className="m-lesson-back">
                    <div className="m-lesson-announce">
                      <ul>
                        <li>
                          Применение принципов анимации Диснея в лицевой
                          анимации
                        </li>
                        <li>
                          Анимация различных типов эмоций персонажа с помощью
                          костного риггинга лица
                        </li>
                        <li>
                          Инструмент Shape keys и анимация эмоций с его помощью
                        </li>
                        <li>Разбор липсинга и анимация речи</li>
                        <li>
                          Инструменты захвата движений и синхронизация речи с
                          озвучкой
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="program-card-06">
                  Композиция и построение кадра
                  <div className="m-lesson-back">
                    <div className="m-lesson-announce">
                      <ul>
                        <li>Анимация боевых механик</li>
                        <li>Анимация динамичных сцен</li>
                        <li>Освоение приемов анимации движущейся камеры</li>
                        <li>
                          Приемы построения композиции при работе со светом,
                          контрастом, фокусом
                        </li>
                        <li>Разбор особенностей работы с камерой</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="program-card-07">
                  Продвинутая анимация
                  <div className="m-lesson-back">
                    <div className="m-lesson-announce">
                      <ul>
                        <li>
                          Создание рекламного ролика с комбинацией персонажной
                          анимации и моушн дизайна
                        </li>
                        <li>
                          Создание постановочных сцен с взаимодействием
                          персонажей и диалоговых сцен
                        </li>
                        <li>
                          Создание ролика с интеграцией 3D объектов в реальную
                          съемку
                        </li>
                        <li>Перенос анимации из Blender в Unreal Engine</li>
                        <li>
                          Знакомство с программой Unreal Engine с точки зрения
                          аниматора
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="line-6"></div>
            <div class="price-block">
              <div class="div-12">
                <div class="title-05-2">Выберите удобный формат обучения</div>
                <div class="description-05">
                  С помощью подписки вы можете подключиться к обучению и
                  приостановить его.
                  <br />
                  Подписка не является рассрочкой, её можно отменить в любой
                  момент.
                  <br />
                  Выбрав Годовое обучение вы сэкономите и сможете пройти всё
                  обучение
                  <br />в комфортном для вас темпе.
                </div>
              </div>
              <div class="price-cards-2">
                <div class="price-card-01">
                  <div class="div-13">
                    <div class="div-14">
                      <div class="title-14-3">Тест-драйв</div>
                      <div class="title-16">бесплатно</div>
                    </div>
                    <div class="div-15">
                      <div class="div-16 my-2">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-7"
                        />
                        <div class="class1">
                          Доступ ко всем материалам, вышедшим
                          на момент действия подписки
                        </div>
                      </div>
                      <div class="div-17 ">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-8"
                        />
                        <div class="class1">
                          Материалы для практики
                        </div>
                      </div>
                      <div class="div-18">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-9"
                        />
                        <div class="class1">
                          Поддержка от автора курса
                        </div>
                      </div>
                      <div class="div-19">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-10"
                        />
                        <div class="class1">
                          Возможность отмены подписки в любой момент
                        </div>
                      </div>
                    </div>
                    <div class="class5">получить доступ</div>
                  </div>
                </div>
                <div class="price-card-02">
                  <div class="div-20">
                    <div class="div-21">
                      <div class="title-14-4">Подписка</div>
                      <div class="title-16">4 900 руб</div>
                    </div>
                    <div class="div-22">
                      <div class="div-23 my-2" >
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-11"
                        />
                        <div class="class1">
                          Доступ ко всем материалам, вышедшим
                          на момент действия подписки
                        </div>
                      </div>
                      <div class="div-24">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-12"
                        />
                        <div class="class2">
                          Материалы для практики
                        </div>
                      </div>
                      <div class="div-25">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-13"
                        />
                        <div class="class1">
                          Поддержка от автора курса
                        </div>
                      </div>
                      <div class="div-26">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-14"
                        />
                        <div class="class1">
                          Возможность отмены подписки в любой момент
                        </div>
                      </div>
                    </div>
                    <div class="class5">получить доступ</div>
                  </div>
                </div>
                <div class="price-card-03">
                  <div class="div-27">
                    <div class="div-28">
                      <div class="title-14-5">Годовое обучение</div>
                      <div class="title-16">47 700 руб</div>
                    </div>
                    <div class="div-29">
                      <div class="div-30 my-2">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-15"
                        />
                        <div class="class1">
                          Прохождение всей программы курса
                        </div>
                      </div>
                      <div class="div-31">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-16"
                        />
                        <div class="class1">
                          Получение обновлений в течение года
                        </div>
                      </div>
                      <div class="div-32">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-17"
                        />
                        <div class="class3">
                          Поддержка от автора курса
                        </div>
                      </div>
                      <div class="div-33">
                        <img
                          loading="lazy"
                          src={img8}
                          class="img-18"
                        />
                        <div class="class4">
                          Доступ к материалам курсов по моделингу и риггингу
                        </div>
                      </div>
                    </div>
                    <div class="class5">получить доступ</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="line-7"></div>
            <div class="about-block">
              <div class="div-34">
                <div class="sub-title-01">АВТОР КУРСА</div>
                <div class="title-02">
                  Денис
                  <br />
                  Бондарев
                </div>
                <div class="description-02">
                  Вы сможете применять полученные знания и навыки в
                  киноиндустрии, игровой индустрии, рекламе, телевидении и
                  других областях.
                  <br />
                  Профессия 3D-аниматора позволяет создавать яркие проекты,
                  которые привлекают внимание зрителей и помогают донести до них
                  нужную информацию
                </div>
              </div>
              <img
                loading="lazy"
                src={img7}
                class="img-19"
              />
            </div>
            <div class="line-8"></div>
            <div class="result-block">
              <div class="title-05-3">Чему научитесь</div>
              <div class="result-cards">
                <div class="div-35">
                  <img loading="lazy" src={img4} class="img-20" />
                  <div class="description-3">
                    За месяц вы сможете изучить основы анимации и начать
                    создавать персонажную анимацию
                  </div>
                </div>
                <div class="div-36">
                  <img loading="lazy" src={img5} class="img-21" />
                  <div class="description-3">
                    В процессе обучения вы получите множество практических
                    упражнений и сможете собрать внушительное портфолио. Это
                    позволит вам уверенно занять своё место в сфере анимации
                  </div>
                </div>
                <div class="div-37">
                  <img loading="lazy" src={img6} class="img-22" />
                  <div class="description-3-2">
                    Пройдя годовой курс, вы не только получите навыки аниматора,
                    но и научитесь моделировать и создавать риггинг. Это
                    позволит вам стать универсальным 3D-специалистом
                  </div>
                </div>
              </div>
            </div>
            <div class="line-9"></div>
            <div className="questions">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h2>отвечаем на вопросы</h2>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8 offset-lg-1">
                    <div className="questions-list ">
                      <div className="question ">
                        <div className="question-static">
                          <div className="question-title" id="headingOne">
                            У меня нет опыта в 3D-анимации, подойдет ли мне этот
                            курс?
                          </div>
                          <a
                            className="question-toggler"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const toggle = e.currentTarget
                                .closest(".question")
                                .querySelector(".question-toggle");
                              toggle.classList.toggle("open");
                            }}
                          >
                            +
                          </a>
                        </div>
                        <div className="question-toggle">
                          Да. Курс начинается с основ. На старте пригодятся
                          базовые знания интерфейса Blender. По ходу обучения
                          темы усложняются, во всех тонкостях будем разбираться
                          постепенно.
                        </div>
                      </div>
                      <div className="question">
                        <div className="question-static">
                          <div className="question-title">
                            Как проходит обучение?
                          </div>
                          <a
                            className="question-toggler"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const toggle = e.currentTarget
                                .closest(".question")
                                .querySelector(".question-toggle");
                              toggle.classList.toggle("open");
                            }}
                          >
                            +
                          </a>
                        </div>
                        <div className="question-toggle">
                          Курс состоит из видеоуроков. К каждому из роликов вы
                          подключаетесь (или возвращаетесь для повторения) в
                          любое время, они всегда доступны онлайн. К каждой теме
                          вы получаете материалы – проекты с объектами и
                          персонажами, подготовленными к анимации.
                        </div>
                      </div>
                      <div className="question">
                        <div className="question-static">
                          <div className="question-title">
                            Все уроки доступны сразу?
                          </div>
                          <a
                            className="question-toggler"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const toggle = e.currentTarget
                                .closest(".question")
                                .querySelector(".question-toggle");
                              toggle.classList.toggle("open");
                            }}
                          >
                            +
                          </a>
                        </div>
                        <div className="question-toggle">
                          <p>
                            На старте курса вы получите доступ к урокам базового
                            уровня. Вы всегда будете знать, какой урок –
                            следующий. В разделе «Программа обучения» вы можете
                            увидеть, какие темы уже опубликованы и какие
                            появятся в ближайшее время. Курс будет регулярно
                            пополняться и обновляться. Вы можете заниматься в
                            своем темпе – возвращаться к каким-то темам и,
                            наоборот, переходить к следующим.
                          </p>
                        </div>
                      </div>
                      <div className="question">
                        <div className="question-static">
                          <div className="question-title">
                            Почему такая система курса?
                          </div>
                          <a
                            className="question-toggler"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const toggle = e.currentTarget
                                .closest(".question")
                                .querySelector(".question-toggle");
                              toggle.classList.toggle("open");
                            }}
                          >
                            +
                          </a>
                        </div>
                        <div className="question-toggle">
                          <p>
                            Мы строим курс, основываясь на практике. С нашим
                            форматом вместо обычных пары-тройки финальных работ
                            вы получите максимум полезной информации и опыта.
                            Подписка на 1 месяц позволяет завершить обучение в
                            любой момент, когда почувствуете себя уверенно. Вы
                            всегда можете вернуться к обучению, если увидите
                            интересные для себя уроки. Тариф «6 месяцев»
                            позволит вам основательно и без спешки освоить весь
                            материал, необходимый для того, чтобы стать 3D
                            аниматором. Тариф «Годовой доступ» кроме
                            вышеперечисленного даст вам доступ к курсам по
                            моделированию, текстурированию и риггингу, которые
                            выйдут на нашей платформе вслед за курсом по
                            анимации.
                          </p>
                        </div>
                      </div>
                      <div className="question">
                        <div className="question-static">
                          <div className="question-title">
                            Будет ли в курсе «3D Анимация в программе Blender»
                            только анимация персонажей?
                          </div>
                          <a
                            className="question-toggler"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const toggle = e.currentTarget
                                .closest(".question")
                                .querySelector(".question-toggle");
                              toggle.classList.toggle("open");
                            }}
                          >
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
                            Что мне будет доступно и как долго у меня будет
                            доступ к обучению?
                          </div>
                          <a
                            className="question-toggler"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const toggle = e.currentTarget
                                .closest(".question")
                                .querySelector(".question-toggle");
                              toggle.classList.toggle("open");
                            }}
                          >
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
                            <li >
                              «Подписка на 1 месяц»: доступны уроки и материалы,
                              опубликованные на момент оформления подписки и в
                              течение срока ее действия. Можно отменить в любой
                              момент
                            </li>
                            <li>
                              «6 месяцев»: в течение 6 месяцев вам будут
                              доступны уроки и материалы, которые есть на момент
                              старта курса и все, которые выходят в рамках всей
                              программы курса
                            </li>
                            <li>
                              «Годовой доступ»: вам будут доступны все курсы,
                              выходящие на нашей платформе в течение года («3D
                              Анимация в программе Blender», «3D Моделинг в
                              программе Blender», «Текстурирование», «Риггинг в
                              программе Blender»
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="question">
                        <div className="question-static">
                          <div className="question-title">
                            Почему программа Blender?
                          </div>
                          <a
                            className="question-toggler"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              const toggle = e.currentTarget
                                .closest(".question")
                                .querySelector(".question-toggle");
                              toggle.classList.toggle("open");
                            }}
                          >
                            +
                          </a>
                        </div>
                        <div className="question-toggle">
                          <p>
                            Blender – бесплатная и довольно простая, поэтому
                            подходит новичкам. Она развивается и обновляется
                            быстрее всех своих аналогов. Это профессиональный
                            софт, на котором можно оттачивать навыки анимации.
                            После Blender вы легко перейдете на любой другой
                            продукт, если захотите.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="questions-more">
                  <div className="questions-more-title">
                    Остались еще вопросы?
                  </div>
                  <div className="questions-more-email">
                    <a  href="mailto:hello@animocean.pro">hello@animocean.pro</a>
                  </div>
                  <div className="questions-more-phone">
                    <a href="https://t.me/huffleskuff" target="_blank">
                      Telegram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="information-block">
            <div class="contact">
              <div class="title-6-2">Остались вопросы?</div>
              <div class="div-38">
                <div>hello@animocean.pro</div>
                <div class="title-7">Telegram</div>
              </div>
            </div>
            <div class="law">
              <div class="title-05-5">Правовая информация</div>
              <div class="div-39">
                <div>Политика конфиденциальности</div>
                <div class="title-6-3">Оферта</div>
              </div>
            </div>
          </div>
          <div class="line-17"></div>
          <div class="information-block-2">
            <div class="contact-2">© Animocean 2024</div>
            <div class="contact-3">
              <div class="title-6-4">Тренировочный Лагерь 3D Аниматора</div>
              <div class="div-40">
                <div class="div-41"></div>
                <a href="https://www.instagram.com/anim0cean">
                <img loading="lazy" src={img1} class="img-30" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
