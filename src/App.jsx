import Home from "./pages/home";
import SingleCharacter from "./pages/singleCharacter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:characterId" element={<SingleCharacter />} />
      </Routes>
    </Router>
  );
}

export default App;
