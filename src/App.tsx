import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLanding } from ".";

console.log('LOADED STUFF - APP.TSX')

function App() {
  return (
    <div className="appWrapper">
      <Router>
        <Routes>
          <Route path="/" element={<ReactLanding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
