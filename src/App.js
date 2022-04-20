import Profile from "./pages/Profile.js";
import Header from "./components/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    <div>
      
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
//http://www.omdbapi.com/?apikey=184ae785&s=up
