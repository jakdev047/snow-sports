/* eslint-disable react/prop-types */
import Logo from "../assets/small-logo.png";
import Image10 from "../assets/fb.png";
import Image11 from "../assets/insta.png";
import Image12 from "../assets/linkdn.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ handleToggle, setIsNavVisible }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsNavVisible(false);
      handleToggle();
    }, 700);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 65, y: -80 },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration: 0.7, delay: 0.1 }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="fixed z-50 top-0 bottom-0 right-0 left-0 bg-[#2A2A2A] w-full font-zing px-4 py-3 text-white h-screen"
    >
      <div className="text-4xl text-end" onClick={handleClose}>
        X
      </div>
      <div className="flex flex-col gap-20 justify-center items-center">
        <div className="mt-2">
          <img src={Logo} alt="" />
        </div>

        <div className="flex flex-col text-3xl gap-8 overflow-auto justify-center items-center">
          <Link to={"/home"} onClick={handleClose}>
            <p className="">snowsports portugal</p>
          </Link>
          <p className="">Para quem</p>
          <Link to={"/experience"} onClick={handleClose}>
            <p className="">Atividades</p>
          </Link>
          <p className="">Torne-se Sócio</p>
          <p className="">Parceiros</p>
          <p className="">institucional</p>
          <p className="">contactar</p>
        </div>

        <div className="flex gap-6">
          <img src={Image10} alt="" />
          <img src={Image11} alt="" />
          <img src={Image12} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
