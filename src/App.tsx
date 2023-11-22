import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLanding, Home } from ".";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactLanding />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
   
  );
}

export default App;
