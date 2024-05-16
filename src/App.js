import { useState } from "react";
import "./App.css";
import { BsList } from "react-icons/bs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Dashboard,
  Marketplace,
  Tables,
  Kanban,
  Profile,
  Signin,
  Footer,
} from "./components/Components";


function App() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };
  return (
    <Router>
      <main className="wrapper">
        <section className="dashboard">
          <Header isNavVisible={isNavVisible} toggleNavVisibility={toggleNavVisibility}/>
          <section className="dashboard-main row">
            <button onClick={toggleNavVisibility} className="nav-tgl" id="menutgl">
              <BsList/>
            </button>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
            <Footer/>
          </section>
        </section>
      </main>
    </Router>
  );
}

export default App;
