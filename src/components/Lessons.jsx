import React from "react";
import svg1 from "../assets/svg/1.svg";
import Png1_ from "../assets/img/1_.png";
import Png2_ from "../assets/img/2_.png";
import Png3_ from "../assets/img/3_.png";
import Png4_ from "../assets/img/4_.png";
import Png5_ from "../assets/img/5_.png";
import Png6_ from "../assets/img/6_.png";
import Png7_ from "../assets/img/7_.png";
const lessons = () => {
  return (
    <div id="lessons" className="moskvin-lessons">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 offset-lg-1">
            <h2>
              программа обучения
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
                          Основы 3D анимации
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>
                              Знакомство с программой Blender, инструменты для
                              анимации
                            </li>
                            <li>Ключевые кадры и манипуляции с ними</li>
                            <li>
                              Разбор интерполяции, значение постоянной, линейной
                              и Безье интерполяции
                            </li>
                            <li>Работа с графиками анимации</li>
                            <li>Модификаторы кривых</li>
                            <li>Знакомство с принципами анимации Диснея</li>
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
                          Начальная практика
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>
                              Знакомство с блокингом и сплайнингом анимации
                            </li>
                            <li>Отработка принципов анимации Диснея</li>
                            <li>Инструмент Follow Path</li>
                            <li>Анимация мяча, пинг-понга, плавающей рыбки</li>
                            <li>
                              Знакомство с программой After Effects, композинг и
                              постобработка
                            </li>
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
                          Персонажная анимация
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>
                              Анимация ходьбы и бега, отработка блокинга,
                              сплайнинга и полишинга
                            </li>
                            <li>
                              Работа с референсами, анимация движений по
                              референсу
                            </li>
                            <li>Разбор и отработка бодимеханик</li>
                            <li>
                              Центр масс, разнообразие типов ходьбы, бега,
                              прыжки, перекаты. Старт и стоп анимации движения
                            </li>
                            <li>
                              Анимация взаимодействий персонажа с предметами
                            </li>
                            <li>
                              Взаимодействие Blender с Mixamo, ретаргет анимации
                            </li>
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
                            <li>
                              Введение в моушн дизайн, разбор инструментов
                            </li>
                            <li>Продуктовая анимация в программе Blender</li>
                            <li>Применение модификаторов для анимации</li>
                            <li>
                              Разбор Geometry Nodes и их применение для анимации
                            </li>
                            <li>
                              Инструменты для создания визуальных эффектов в
                              Blender
                            </li>
                            <li>Broadcast анимация</li>
                            <li>
                              Особенности постобработки моушн дизайна в After
                              Effects
                            </li>
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
                          Лицевая анимация
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>Введение в работу с эмоциями персонажа</li>
                            <li>
                              Применение принципов анимации Диснея в лицевой
                              анимации
                            </li>
                            <li>
                              Анимация различных типов эмоций персонажа с
                              помощью костного риггинга лица
                            </li>
                            <li>
                              Инструмент Shape keys и анимация эмоций с его
                              помощью
                            </li>
                            <li>Разбор липсинга и анимация речи</li>
                            <li>
                              Инструменты захвата движений и синхронизация речи
                              с озвучкой
                            </li>
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
                          Композиция и построение кадра
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>
                              Освоение правил композиции и правильного
                              построения кадра
                            </li>
                            <li>
                              Расположение в кадре, манипуляция взглядом зрителя
                            </li>
                            <li>Разбор особенностей работы с камерой</li>
                            <li>
                              Приемы построения композиции при работе со светом,
                              контрастом, фокусом
                            </li>
                            <li>Освоение приемов анимации движущейся камеры</li>
                            <li>Анимация динамичных сцен</li>
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
                          Продвинутая анимация
                        </div>
                      </div>
                      <div className="moskvin-lesson-back">
                        <div className="moskvin-lesson-announce">
                          <ul>
                            <li>Анимация боевых механик</li>
                            <li>
                              Знакомство с программой Unreal Engine с точки
                              зрения аниматора
                            </li>
                            <li>Перенос анимации из Blender в Unreal Engine</li>
                            <li>
                              Создание ролика с интеграцией 3D объектов в
                              реальную съемку
                            </li>
                            <li>
                              Создание постановочных сцен с взаимодействием
                              персонажей и диалоговых сцен
                            </li>
                            <li>
                              Создание рекламного ролика с комбинацией
                              персонажной анимации и моушн дизайна
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
