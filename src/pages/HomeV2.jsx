import Image1 from "../assets/herov2.png";
import Image2 from "../assets/Group_20.png";
import Image3 from "../assets/image slices.png";
import Image4 from "../assets/chev 2.png";
import Image6 from "../assets/arcalis.png";
import Image13 from "../assets/Pessoal na montanha AF 1.png";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { useCheckMobileScreen } from "../helper/helper";

const HomeV2 = () => {
  const isMobile = useCheckMobileScreen();

  return isMobile ? (
    <div className="">
      <Reveal>
        <div
          className="relative"
          style={{
            clipPath: "polygon(0 10%, 100% 0, 100% 50%, 100% 90%, 0% 100%)",
          }}
        >
          <img src={Image13} alt="" className="h-[500px] object-cover" />

          <div className="font-zing text-end absolute -rotate-6 text-7xl z-40 top-12 right-8">
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -65 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="hidden"
              animate="visible"
              className="text-[#236092]"
            >
              Sobre a
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, x: 65 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="hidden"
              animate="visible"
              className="text-[#816044]"
            >
              snowsports
            </motion.p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="px-8 text-xl">
          <p className="-rotate-6 -skew-x-12">
            Divulgar e incentivar a participação nos desportos de neve,
            facilitando o acesso a todas as suas vertentes, desenvolvendo
            simultaneamente actividades agregadoras dos seus entusiastas.
          </p>
          <p className="font-zing -rotate-6 -skew-x-12 text-[#C11631] text-end text-5xl pt-8">
            saiba +
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="relative">
          <div className="text-[#236092] font-zing absolute -rotate-6 flex flex-col justify-end items-end right-[50px] -top-[30px] text-6xl  tracking-wide">
            <p className="">torne-se</p>
            <p className="text-[#816044]">sócio</p>
          </div>
          <img
            src={Image3}
            alt=""
            className="relative -rotate-3 -left-20 mt-20 h-[190px] z-40"
          />
        </div>
      </Reveal>

      <Reveal>
        <div className="px-8 text-xl">
          <p className="-rotate-6 -skew-x-12">
            Junte-se à APS - Snowsports Portugal e aceda a uma variedade de
            programas, eventos, vantagens e descontos exclusivos para os
            entusiastas do Ski & Snowboard.
          </p>
          <p className="font-bold -rotate-6 -skew-x-12 pt-8">
            Junte-se ao clube e faça parte desta comunidade vibrante de
            apaixonados pela neve!
          </p>
          <p className="font-zing -rotate-6 -skew-x-12 text-[#C11631] text-end text-5xl pt-8">
            INSCREVA-SE
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="pt-8 relative">
          <div
            className=""
            style={{
              clipPath: "polygon(0 10%, 100% 0, 100% 50%, 100% 90%, 0% 100%)",
            }}
          >
            <img src={Image6} alt="" />
          </div>

          <div className="font-zing relative">
            <p className="-rotate-6 text-[#236092] text-7xl absolute ml-6">
              SNOWSPORTS
            </p>

            <div className="-rotate-6 text-5xl absolute mt-20 ml-12">
              <p className="">academy</p>
              <p className="">experiências</p>
              <p className="">serviços</p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="px-12 text-xl mt-60 mb-12">
          <p className="-rotate-6 -skew-x-12">
            Propomos um conjunto de programas, parcerias e benefícios para os
            associados, como programas de treino e competição para jovens,
            clínicas de aperfeiçoamento técnico e programas de formação, acesso
            directo a seguros para a prática das modalidades, eventos, descontos
            exclusivos no aluguer ou compra de equipamento, acesso a monitores /
            escola de Snowsports entre muitos outros.
          </p>
          <p className="font-zing -rotate-6 -skew-x-12 text-[#C11631] text-end text-5xl pt-8">
            inscreva-se +
          </p>
        </div>
      </Reveal>

      <Footer />
    </div>
  ) : (
    <div>
      <div
        className="bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0%, 100% 89%, 0% 100%)" }}
      >
        <Hero
          image1={Image1}
          image2={Image2}
          heading1={"Sobre a"}
          heading2={"snowsports"}
          heading1_color={"text-[#236092]"}
          heading2_color={"text-[#816044]"}
          heading_class={"!text-start !right-[250px]"}
        />
      </div>

      <Reveal>
        <div className="">
          <div className="relative mx-auto -rotate-3 pt-8 text-2xl w-[700px] -skew-x-12">
            Divulgar e incentivar a participação nos desportos de neve,
            facilitando o acesso a todas as suas vertentes, desenvolvendo
            simultaneamente actividades agregadoras dos seus entusiastas.
            <p className="font-zing text-[#C11631] text-6xl pt-8">saiba +</p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="overflow-hidden pb-32">
          <div className="relative h-full mt-24">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -65 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="hidden"
              animate="visible"
              className="text-[#236092] font-zing absolute -rotate-3 flex flex-col justify-end items-end right-[400px] text-[200px]  leading-[180px] tracking-wide"
            >
              <p className="">torne-se</p>
              <p className="">sócio</p>
            </motion.div>

            <div className="flex">
              <div className="relative">
                <motion.img
                  variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  initial="hidden"
                  animate="visible"
                  src={Image2}
                  alt=""
                  className="absolute h-[590px] z-10 -left-20"
                />
                <motion.img
                  variants={{
                    hidden: { opacity: 0, x: -95 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  initial="hidden"
                  animate="visible"
                  src={Image3}
                  alt=""
                  className="relative rotate-2 -left-2 mt-48 h-[590px] z-40"
                />
                <motion.img
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  initial="hidden"
                  animate="visible"
                  src={Image4}
                  alt=""
                  className="absolute h-[500px] rotate-3 z-10 left-[100px] -bottom-56"
                />
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -65 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                initial="hidden"
                animate="visible"
                className=""
              >
                <div className="w-[450px] mt-[22rem] -rotate-3 -ml-8 text-2xl">
                  Junte-se à APS - Snowsports Portugal e aceda a uma variedade
                  de programas, eventos, vantagens e descontos exclusivos para
                  os entusiastas do Ski & Snowboard.
                </div>
                <div className="font-semibold w-[400px] -rotate-3 pt-8 ml-8 text-2xl">
                  Junte-se ao clube e faça parte desta comunidade vibrante de
                  apaixonados pela neve!
                  <p className="font-zing text-[#C11631] font-normal text-6xl pt-8">
                    INSCREVA-SE
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-[6rem] -mb-[6rem]">
          <div className="relative">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -65 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="hidden"
              animate="visible"
              className="absolute text-[#236092] font-zing -rotate-3 text-[190px] flex gap-12 leading-[180px] tracking-wide"
            >
              <p className="">SNOWSPORTS</p>
              <p className="text-[#D9D9D9]">SNOW</p>
            </motion.div>
            <div className="relative flex z-40 overflow-hidden">
              <div className="flex-1 flex-shrink-0 mt-[250px] -rotate-[5deg] -skew-x-[10deg] -ml-12">
                <img src={Image6} alt="" className="h-full object-contain" />
              </div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -65 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.1 }}
                initial="hidden"
                animate="visible"
                className="mt-[200px] flex-1 -rotate-3"
              >
                <div className="font-zing text-8xl ml-[100px] -rotate-3 -skew-x-[13deg]">
                  <p className="">academy</p>
                  <p className="">experiências</p>
                  <p className="">serviços</p>
                </div>

                <div className="mt-8 text-[20px] font-medium w-[500px] ml-[70px] -rotate-3 -skew-x-12">
                  Propomos um conjunto de programas, parcerias e benefícios para
                  os associados, como programas de treino e competição para
                  jovens, clínicas de aperfeiçoamento técnico e programas de
                  formação, acesso directo a seguros para a prática das
                  modalidades, eventos, descontos exclusivos no aluguer ou
                  compra de equipamento, acesso a monitores / escola de
                  Snowsports entre muitos outros.
                </div>

                <div className="">
                  <p className="font-zing text-[#C11631] ml-[50px] -rotate-3  font-normal text-6xl pt-8">
                    inscreva-se +
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>

      <Footer />
    </div>
  );
};

export default HomeV2;
