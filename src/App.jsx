import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Lessons from "./components/Lessons";
import Trailer from './components/Trailer';
import Diploma from "./components/Diploma";
import Payment from "./components/Payment";
import Assets from "./components/Assets";
import Questions from "./components/Questions";
function App() {
  return (
    <>
<Header/>
        <div className="content">
          <div className="video-bg-absolute">
            <video id="video"  autoPlay loop muted data-video="0">
              <source
                src="../src/assets/video/video1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
<Main />
<Trailer />
<Lessons />
<Diploma />
<Payment />
<Assets />
<Questions />
       <Footer />
    </>
  );
}

export default App;
