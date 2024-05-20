import HeroImage1 from "../assets/475110_1.png";
import HeroImage2 from "../assets/475110_2.png";
import NavBgImage from "../assets/Group_1_1.png";
import SmallLogo from "../assets/small-logo.png";
import Logo from "../assets/Centrado_White 1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <motion.div
        variants={{
          hidden: { opacity: 0, display: "none" },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 2, delay: 2 }}
        initial="visible"
        animate="hidden"
        className="bg-[#C11631] flex justify-center items-center w-full h-screen"
      >
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
          initial="hidden"
          animate="visible"
          src={Logo}
          alt=""
        />
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, display: "none" },
          visible: { opacity: 1, display: "block" },
        }}
        transition={{ duration: 5, delay: 3 }}
        initial="hidden"
        animate="visible"
        className="2xl:container mx-auto"
      >
        <div className="top-section w-full h-screen">
          <div className="relative w-full h-full">
            <div className="font-zing flex flex-col justify-center absolute w-full h-full text-[#236092] bg-transparent text-9xl">
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -95 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, delay: 4 }}
                initial="hidden"
                animate="visible"
                className="z-10"
              >
                o ponto de encontro
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: 95 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, delay: 4 }}
                initial="hidden"
                animate="visible"
                className="text-right z-30"
              >
                dos entusiastas
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -95 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 1, delay: 4 }}
                initial="hidden"
                animate="visible"
                className="z-10"
              >
                de desportos de inverno
              </motion.p>
            </div>
            <div className="">
              <img
                src={HeroImage1}
                alt=""
                className="absolute w-full h-full object-cover"
              />
              <img
                src={HeroImage2}
                alt=""
                className="absolute w-full h-full z-20 object-cover"
              />
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, delay: 4 }}
              initial="hidden"
              animate="visible"
              className="absolute w-full bottom-0"
            >
              <img src={NavBgImage} alt="" className="w-full" />
              <div className="flex absolute bottom-0 justify-between w-full items-center px-16">
                <img src={SmallLogo} alt="" className="z-10 w-[200px] mb-4" />
                <div className="flex gap-12 text-[#236092] z-20 font-zing text-4xl">
                  <Link to={"/home"}>
                    <p className="cursor-pointer hover:scale-105 transition duration-300">
                      MISSÃO
                    </p>
                  </Link>
                  <Link to={"/member"}>
                    <p className="cursor-pointer hover:scale-105 transition duration-300">
                      torne-se associado
                    </p>
                  </Link>
                  <Link to={"/experience"}>
                    <p className="cursor-pointer hover:scale-105 transition duration-300">
                      Experiências
                    </p>
                  </Link>
                  <Link to={"/about-us"}>
                    <p className="cursor-pointer hover:scale-105 transition duration-300">
                      contactar
                    </p>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
