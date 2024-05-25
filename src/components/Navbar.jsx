import { Link } from "react-router-dom";
import LogoSm from "../assets/logo-sm.png";
import { useCheckMobileScreen } from "../helper/helper";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const isMobile = useCheckMobileScreen();
  const [toggle, setToggle] = useState(false);

  return isMobile ? (
    <>
      <div className="p-4 z-50 sticky top-0 flex justify-between items-center backdrop-blur-sm">
        <div className="">
          <Link to={"/home"}>
            <img src={LogoSm} alt="" className="cursor-pointer" />
          </Link>
        </div>
        <div
          className="font-zing text-4xl flex text-[#236092] skew-x-6"
          onClick={() => setToggle(!toggle)}
        >
          <p className="">/</p>
          <p className="">/</p>
          <p className="">/</p>
        </div>
      </div>
      {toggle && (
        <MobileNav
          handleToggle={() => setToggle(!toggle)}
          setIsNavVisible={setToggle}
        />
      )}
    </>
  ) : (
    <div className="p-4 z-[80] sticky top-0 flex justify-between items-center backdrop-blur-sm">
      <Link to={"/"}>
            <img src={LogoSm} alt="" className="cursor-pointer w-12 h-14 p-2" />
          </Link>
      {/* <img src={LogoSm} alt="" className="" /> */}
      <div className="flex gap-6 font-zing text-2xl text-[#236092]">
        <Link to={"/home"}>
          <p className="cursor-pointer hover:scale-105 transition duration-300">
            snowsports portugal
          </p>
        </Link>
        <Link to={"/experience"}>
          <p className="cursor-pointer hover:scale-105 transition duration-300">
            Atividades
          </p>
        </Link>
        <Link to={"/member"}>
          <p className="cursor-pointer hover:scale-105 transition duration-300">
            Torne-se Sócio
          </p>
        </Link>
        <Link to={"/about-us"}>
          <p className="cursor-pointer hover:scale-105 transition duration-300">
            contactar
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
