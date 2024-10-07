import React from 'react'
import video3 from "../assets/video/video3.mp4";
const diploma = () => {
  return (
    <div className="diploma">
    <div className="container">
      <div className="row">
        <div className="col-lg-11">
          <div className="row">
            <div className="col-lg-10">
              <h2>Предоставляем материалы</h2>
              <div className="diploma-description">
                Предоставляем все необходимые материалы для успешного
                обучения и вашего профессионального роста. Вы сможете
                скачать проекты с моделями и сценами, что позволит сразу
                приступить к практике.
              </div>
         
            </div>
          </div>
          <div className="moskvin-showreel-video mx-auto mt-5 col-6">
              <video
                id="videoPlayer"
                className="moskvin-trailer-video"
                autoPlay
                loop 
                muted 
                data-video="1"
              >
                <source
                  src={video3}
                  type="video/mp4"
                />
              </video>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default diploma