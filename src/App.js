import "./App.css";
import MySideNav from "./components/MySideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import One from "./components/pages/One";
import Two from "./components/pages/Two";
import Three from "./components/pages/Three";
import Four from "./components/pages/Four";
import Five from "./components/pages/Five";

function App() {
  return (
    <Router>
      <MySideNav />
      <Routes>
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
      </Routes>
    </Router>
  );
}

export default App;
