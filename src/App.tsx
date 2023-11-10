import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TempHome } from "./TempHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TempHome />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
   
  );
}

export default App;
