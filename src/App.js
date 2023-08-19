import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import WeatherApp from "./pages/WeatherApp";
import DreamJournal from "./pages/DreamJournal";
import FeedbackApp from "./pages/FeedbackApp";
import TileMatchingGame from "./pages/TileMatchingGame";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/weatherApp" element={<WeatherApp />} />
          <Route path="/dreamJournal" element={<DreamJournal />} />
          <Route path="/feedbackApp" element={<FeedbackApp />} />
          <Route path="/tileMatchingGame" element={<TileMatchingGame />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
