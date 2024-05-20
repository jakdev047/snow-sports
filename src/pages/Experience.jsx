import Image1 from "../assets/image.png";
import Image2 from "../assets/Group_20.png";
import Footer from "../components/Footer";
import Image3 from "../assets/Group 17.png";
import Image4 from "../assets/chev 2.png";
import Hero from "../components/Hero";
import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { useCheckMobileScreen } from "../helper/helper";

const Experience = () => {
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
          <img src={Image1} alt="" className="h-[500px] object-cover" />

          <div className="font-zing text-end absolute -rotate-6 text-7xl z-40 top-12 right-8">
            <motion.p
              variants={{
                hidden: { opacity: 0, x: -65 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="hidden"
              animate="visible"
              className="text-[#DB9F6D]"
            >
              atividades
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
              e serviços
            </motion.p>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="px-8 text-xl">
          <p className="-rotate-6 -skew-x-12">
            O Snowsports Portugal – APS disponibilizará um conjunto de programas
            desportivos, actividades e serviços exclusivos para os seus
            associados através de uma estrutura própria ao nível da formação, a
            Snowsports Academy, e de parcerias com profissionais seleccionados
            para o efeito.
          </p>
          <p className="font-zing -rotate-6 -skew-x-12 text-[#C11631] text-end text-5xl pt-8">
            saiba +
          </p>
        </div>
      </Reveal>

      <Reveal>
        <div className="relative">
          <div className="text-[#236092] font-zing absolute -rotate-6 flex flex-col justify-end items-end right-[50px] top-[20px] text-6xl tracking-wide">
            <p className="">a nossa</p>
            <p className="text-[#816044]">proposta</p>
          </div>
          <img
            src={Image3}
            alt=""
            className="relative -left-6 mt-20 h-[250px] z-40"
          />
        </div>
      </Reveal>

      <Reveal>
        <div className="relative w-full px-6 text-xl">
          <p className="font-zing -rotate-6 -skew-x-12 text-[#C11631] text-5xl pt-4">
            INSCREVA-SE
          </p>
          <div className="font-bold relative flex flex-col gap-3 text-lg mt-6">
            <div className="flex gap-3 -rotate-6 -skew-x-12 justify-start items-center">
              <div className="w-2 h-2 bg-black flex-shrink-0"></div>
              <div className="">
                Programas de iniciação aos desportos de neve
              </div>
            </div>
            <div className="flex gap-3 -rotate-6 -skew-x-12 justify-start items-center">
              <div className="w-2 h-2 bg-black flex-shrink-0"></div>
              <div className="">
                Programas de treino e competição regular para jovens;
              </div>
            </div>
            <div className="flex gap-3 -rotate-6 -skew-x-12 justify-start items-center">
              <div className="w-2 h-2 bg-black flex-shrink-0"></div>
              <div className="">Clínicas de aperfeiçoamento técnico</div>
            </div>
            <div className="flex gap-3 -rotate-6 -skew-x-12 justify-start items-center">
              <div className="w-2 h-2 bg-black flex-shrink-0"></div>
              <div className="">Formação de monitores;</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="relative w-full px-6 text-xl pt-5">
          <p className="font-zing -rotate-6 -skew-x-12 text-[#C11631] text-5xl pt-4">
            serviços
          </p>
          <div className="font-bold relative flex flex-col gap-3 text-lg mt-6">
            <div className="flex gap-3 -rotate-6 -skew-x-12 justify-start items-center">
              <div className="w-2 h-2 bg-black flex-shrink-0"></div>
              <div className="">Seguros de acidentes desportivos</div>
            </div>
            <div className="flex gap-3 -rotate-6 -skew-x-12 justify-start items-center">
              <div className="w-2 h-2 bg-black flex-shrink-0"></div>
              <div className="">Aulas de Ski / Snowboard</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="relative w-full px-6 text-xl">
          <p className="font-zing -rotate-6 -skew-x-12 text-[#C11631] text-5xl pt-4">
            experiências
          </p>
          <div className="font-bold relative flex flex-col gap-3 text-lg mt-6">
            <div className="flex gap-3 -rotate-6 -skew-x-12 justify-start items-center">
              <div className="w-2 h-2 bg-black flex-shrink-0"></div>
              <div className="">Descoberta de estâncias;</div>
            </div>
            <div className="flex gap-3 -rotate-6 -skew-x-12 justify-start items-center">
              <div className="w-2 h-2 bg-black flex-shrink-0"></div>
              <div className="">Baptismos de neve;</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="relative w-full px-6 text-xl mb-12">
          <div className="mt-6 font-bold text-xl px-4 pt-8 -rotate-6 -skew-x-12">
            Programas em desenvolvimento com lançamento progressivo até finais
            de 2025.
          </div>
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
          heading1={"atividades"}
          heading2={"e serviços"}
          heading1_color={"text-[#D89B69]"}
          heading2_color={"text-[#D9D9D9]"}
          heading_class={"!text-start !right-[450px]"}
          clip_section_class={"w-3/5"}
          arrow_pos_class={
            "!right-[38%] !lg:right-[32%] !xl:right:[25%] !2xl:right-[30%]"
          }
        />
      </div>

      <Reveal>
        <div className="">
          <div className="relative mx-auto -rotate-3 pt-8 text-2xl w-[700px] -skew-x-12">
            O Snowsports Portugal – APS disponibilizará um conjunto de programas
            desportivos, actividades e serviços exclusivos para os seus
            associados através de uma estrutura própria ao nível da formação, a
            Snowsports Academy, e de parcerias com profissionais seleccionados
            para o efeito.
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
              className=" font-zing absolute -rotate-3 flex flex-col justify-start items-start right-[350px]  leading-[180px] tracking-wide"
            >
              <p className="text-[100px] ml-[80px]">a nossa</p>
              <p className="text-[#D89B69] text-[200px] -mt-12">proposta</p>
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
                  className="relative rotate-2 -left-2 mt-48 h-[800px] w-[500px] z-40"
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
                  className="absolute  rotate-3 z-10 left-[100px] -bottom-24"
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
                <div className="w-[650px] mt-[19rem] relative z-40 -rotate-3 ml-24 text-2xl">
                  <div className="">
                    <p className="font-zing text-[#C11631] font-normal text-5xl pt-8">
                      Academy
                    </p>
                    <div className="font-bold text-2xl mt-2">
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="">
                          Programas de iniciação aos desportos de neve
                        </div>
                      </div>
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="">
                          Programas de treino e competição regular para jovens;
                        </div>
                      </div>
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="">
                          Clínicas de aperfeiçoamento técnico
                        </div>
                      </div>
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="">Formação de monitores;</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="font-zing text-[#C11631] font-normal text-5xl">
                      experiências
                    </p>
                    <div className="font-bold text-2xl mt-2">
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="">Descoberta de estâncias;</div>
                      </div>
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="">Baptismos de neve;</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 ml-8">
                    <p className="font-zing text-[#C11631] font-normal text-5xl">
                      serviços
                    </p>
                    <div className="font-bold text-2xl mt-2">
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="">Seguros de acidentes desportivos</div>
                      </div>
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="">
                          Aluguer de equipamento de Snowsports
                        </div>
                      </div>
                      <div className="flex gap-5 justify-start items-center">
                        <div className="w-2 h-2 bg-black"></div>
                        <div className="">Aulas de Ski / Snowboard</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 font-bold text-3xl w-[500px] ml-8 -skew-x-12">
                    Programas em desenvolvimento com lançamento progressivo até
                    finais de 2025.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Reveal>

      <div className="pb-12"></div>
      <Footer />
    </div>
  );
};

export default Experience;
