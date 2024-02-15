import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Academics from "./pages/Academics/Academics";
import Admissions from "./pages/Admissions/Admissions";
import OurTeam from "./pages/Ourteam/OurTeam";
import Facilities from "./pages/Academics/Facilities";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about-us" element={<About />}></Route>
        <Route path="contact-us" element={<Contact />}></Route>
        <Route path="academics" element={<Academics />}></Route>
        <Route path="admissions" element={<Admissions />}></Route>
        <Route path="our-team" element={<OurTeam />}></Route>
        <Route path="/academics/facilities" element={<Facilities />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
