import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import ComputerNetworking from "./pages/ComputerNetworking";
import Oops from "./pages/Oops";
import Dbms from "./pages/Dbms";
import Os from "./pages/Os";
import Dsa from "./pages/Dsa";
import Aiml from "./pages/Aiml";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/computer-networking" element={<ComputerNetworking />} />
        <Route path="/oops" element={<Oops />} />
        <Route path="/dbms" element={<Dbms />} />
        <Route path="/os" element={<Os />} />
        <Route path="/dsa" element={<Dsa />} />
        <Route path="/aiml" element={<Aiml />} />
      </Routes>
    </Router>
  );
}

export default App;