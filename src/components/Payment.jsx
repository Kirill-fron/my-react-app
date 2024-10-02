import React from 'react'

const payment = () => {
  return (
    <div className="payment">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h2>выберите удобный формат обучения</h2>
                </div>
              </div>
              <div className="payment-options">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="payment-option">
                      <div className="payment-option-period">Тест-драйв</div>
                      <div className="payment-option-description">
                        <p>
                          Получите доступ к тестовым урокам для того, чтобы
                          оценить подходит ли вам подача и уровень курса. Так же
                          вы сможете получать актуальную информацию о новых
                          уроках и темах, чтобы иметь возможность подключиться к
                          прохождению курса на интересующем вас этапе
                        </p>
                      </div>
                      <div className="payment-option-price">
                        Бесплатно
                      
                      </div>
                      <button className="btn btn-outline-white ">
                        ПОДРОБНЕЕ
                      </button>
                      <div className="payment-option-flex"></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="payment-option">
                      <div className="payment-option-period">
                        Помесячная подписка
                      </div>
                      <div className="payment-option-description">
                        <p>
                          Получите доступ к курсу на период действия подписки.
                          Подписка не является рассрочкой, её можно отменить в
                          любой момент. Этот тариф позволяет подключаться к
                          прохождению обучения или отложить обучение до выхода
                          интересующей вас темы
                        </p>
                      </div>
                      <div className="payment-option-price">
                        5 900<span>руб</span>
                      
                      </div>
                      <button className="btn btn-outline-white ">
                        ПОДРОБНЕЕ
                      </button>
                      <div className="payment-option-flex"></div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="payment-option">
                      <div className="payment-option-period">Годовое обучение</div>
                      <div className="payment-option-description">
                        <p>
                          Этот тариф позволит проходить обучение в комфортном
                          темпе. В течение года вы будете получать новые уроки и
                          задания, которые позволят вам отрабатывать все знания
                          на практике и составить портфолио. Кроме курса по
                          анимации вам будут открываться так же уроки по
                          моделингу и риггингу, что позволит вам стать
                          универсальным 3D артистом
                        </p>
                      </div>
                      <div className="payment-option-price">
                        59 900<span>руб</span>
                      </div>
                      <button className="btn btn-outline-white ">
                        ПОДРОБНЕЕ
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