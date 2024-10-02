import React from "react";
import svg1 from '../assets/svg/1.svg';
import Video2 from "../assets/video/video2.mp4";
const Trailer = () => {
  return (
    <>
      <div className="trailer">
        <div className="container">
          <div className="moskvin-showreel">
            <div className="row">
              <div className="col-lg-4 offset-lg-8">
                <div className="moskvin-showreel-caption">
                  трейлер курса
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
                <source
                  src={Video2}
                  type="video/mp4"
                />
              </video>
              <a className="moskvin-courses-link playbtn" href="#"></a>
            </div>
            <div className="row">
              <div className="col-lg-7 offset-lg-1">
                <div className="moskvin-hello-description">
                  курс создан для тех, кто хочет овладеть 3d-анимацией в
                  программе blender
                </div>
              </div>
              <div className="col-lg-4"></div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Trailer;
