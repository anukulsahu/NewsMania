import "bootstrap/dist/css/bootstrap.css";
import UserReg from "./components/UserReg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<UserReg />} />
          <Route exact path="/adduser" element={<AddUser />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
