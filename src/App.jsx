import "./App.css";
import HomeV2 from "./pages/HomeV2";
import Navbar from "./components/Navbar";
import Member from "./pages/Member";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Home from "./pages/Home";

import { Outlet, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function WithNavbar() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <div className="antialiased font-cairo relative 2xl:container mx-auto">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<WithNavbar />}>
          <Route path="home" element={<HomeV2 marginTop="-mt-[100px]" />} />
          <Route path="experience" element={<Experience />} />
          <Route path="member" element={<Member />} />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
