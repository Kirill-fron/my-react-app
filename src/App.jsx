import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Lessons from "./components/Lessons";
import Trailer from "./components/Trailer";
import Diploma from "./components/Diploma";
import Payment from "./components/Payment";
import Assets from "./components/Assets";
import Questions from "./components/Questions";
import PersonalData from "./components/personalData";
import Of from "./components/Of";

import Video1 from "./assets/video/video1.mp4";

function App() {
  return (
    <>
    <Header />
    <div className="content">
      <div className="video-bg-absolute">
        <video id="video" autoPlay loop muted data-video="0">
          <source src={Video1} type="video/mp4" />
        </video>
      </div>
    </div>
    <Routes>
      <Route path="/" element={
        <>
          <Main />
          <Trailer />
          <Lessons />
          <Diploma />
          <Payment />
          <Assets />
          <Questions />
        </>
      } />
      <Route path="/PersonalData" element={<PersonalData />} />
      <Route path="/Of" element={<Of />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
