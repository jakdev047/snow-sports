import "./App.css";
import HomeV2 from "./pages/HomeV2";
import Navbar from "./components/Navbar";
import Member from "./pages/Member";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Home from "./pages/Home";

import { Outlet, Route, Routes } from "react-router-dom";

const WithNavbar = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <div className="antialiased font-cairo 2xl:container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<WithNavbar />}>
          <Route path="home" element={<HomeV2 />} />
          <Route path="experience" element={<Experience />} />
          <Route path="member" element={<Member />} />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
