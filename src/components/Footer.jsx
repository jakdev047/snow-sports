import Image8 from "../assets/small-logo.png";
import Image9 from "../assets/fdip.png";
import Image10 from "../assets/fb.png";
import Image11 from "../assets/insta.png";
import Image12 from "../assets/linkdn.png";
import Image3 from "../assets/Rectangle99.png";
import Image2 from "../assets/Group_20.png";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const Footer = () => {
  const MobileView = (
    <div className="block sm:hidden">
      <div
        className=""
        style={{
          clipPath: "polygon(0 10%, 100% 0, 100% 50%, 100% 100%, 0% 100%)",
        }}
      >
        <img src={Image3} alt="" />
      </div>
      <div className="px-7 py-12">
        <div className="font-zing text-6xl">INSCREVA-SE</div>
        <div className="!transform">
          <p className="text-md pl-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
            eleifend nulla. Pellentesque convallis nec ex vitae vestibulum.
          </p>
          <div className="flex flex-col gap-3 mt-3">
            <div className="-skew-x-12 border text-[#236092] border-[#236092] px-4 pt-3 pb-1 rounded-sm">
              nome
            </div>
            <div className="-skew-x-12 border text-[#236092] border-[#236092] px-4 pt-3 pb-1 rounded-sm">
              e-mail
            </div>
            <div className="-skew-x-12 border text-[#236092] border-[#236092] px-4 pt-3 pb-1 rounded-sm">
              tlm
            </div>
            <div className="-skew-x-12 border text-[#236092] border-[#236092] px-4 pt-3 pb-1 rounded-sm">
              modalidade
            </div>
            <div className="-skew-x-12 border flex items-end text-[#236092] border-[#236092] px-4 h-[100px] pb-1 rounded-sm ml-3">
              assunto
            </div>
            <div className="flex justify-between">
              <div className="flex justify-center items-center gap-3 -mt-12 ml-6">
                <div className="border border-[#236092] w-4 h-4 rounded-sm"></div>
                <div className="text-[#236092]">rgpd ....</div>
              </div>
              <p className="font-zing text-[#C11631]  font-normal text-5xl pt-2 mr-2">
                aderir
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#181818] flex flex-col gap-8 justify-center items-center px-6 py-12">
        <div className="">
          <img src={Image8} alt="" className="h-[70px]" />
        </div>
        <div className="">
          <img src={Image9} alt="" />
        </div>
        <div className="flex gap-5 justify-end">
          <img src={Image10} alt="" />
          <img src={Image11} alt="" />
          <img src={Image12} alt="" />
        </div>
        <div className="text-lg font-cairo text-[#7EA0BD] text-end mt-5">
          <p className="">Privacidade | Cookies</p>
          <p className="">©2024 SnowSports</p>
        </div>
      </div>
    </div>
  );

  const WebView = (
    <div className="hidden relative sm:block">
      <div className="clip-footer relative h-screen max-h-[765px] w-full overflow-hidden">
        <div className=""></div>
        <div className="">
          <motion.img
            variants={{
              hidden: { opacity: 0.2, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            src={Image2}
            alt=""
            className="absolute right-[45%] xl:right-[49%] top-[5%] h-full z-30"
          />
          <div className="clip-footer-polygon bg-white w-2/4 h-full absolute z-20">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
              initial="hidden"
              animate="visible"
              className="w-[500px] pt-44 pl-20"
            >
              <div className="font-zing text-7xl">INSCREVA-SE</div>
              <div className="pl-6">
                <p className="text-md leading-[20px] pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam a eleifend nulla. Pellentesque convallis nec ex vitae
                  vestibulum.
                </p>
                <div className="flex flex-col gap-3 mt-3">
                  <div className="-skew-x-12 border text-[#236092] border-[#236092] px-4 pt-3 pb-1 rounded-sm">
                    nome
                  </div>
                  <div className="-skew-x-12 border text-[#236092] border-[#236092] px-4 pt-3 pb-1 rounded-sm">
                    e-mail
                  </div>
                  <div className="-skew-x-12 border text-[#236092] border-[#236092] px-4 pt-3 pb-1 rounded-sm">
                    tlm
                  </div>
                  <div className="-skew-x-12 border text-[#236092] border-[#236092] px-4 pt-3 pb-1 rounded-sm">
                    modalidade
                  </div>
                  <div className="-skew-x-12 border flex items-end text-[#236092] border-[#236092] px-4 h-[100px] pb-1 rounded-sm ml-3">
                    assunto
                  </div>
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-3 -mt-12 ml-6">
                      <div className="border border-[#236092] w-4 h-4 rounded-sm"></div>
                      <div className="text-[#236092]">rgpd ....</div>
                    </div>
                    <p className="font-zing text-[#C11631]  font-normal text-5xl pt-2 mr-2">
                      aderir
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.img
            variants={{
              hidden: { opacity: 0.1 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, delay: 0.25 }}
            src={Image3}
            alt=""
            className="absolute right-0"
          />
        </div>
      </div>

      <div className="bg-[#181818] w-full p-12 h-[200px] z-40 relative flex justify-between">
        <div className="flex-1">
          <img src={Image8} alt="" className="h-[70px]" />
        </div>
        <div className="font-zing text-xl text-white flex flex-3 flex-grow justify-between">
          <div className="flex flex-col gap-2">
            <p className="">Snowsports Portugal</p>
            <p className="">para quem</p>
            <p className="">Atividades</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">ser sócio</p>
            <p className="">parceiros</p>
            <p className="">contactar</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="">institucional</p>
            <img src={Image9} alt="" />
          </div>
        </div>
        <div className="flex-1 text-end text-white flex flex-col gap-6">
          <div className="flex gap-5 justify-end">
            <img src={Image10} alt="" />
            <img src={Image11} alt="" />
            <img src={Image12} alt="" />
          </div>
          <div className="text-lg font-cairo text-[#7EA0BD] text-end">
            <p className="">Privacidade | Cookies</p>
            <p className="">©2024 SnowSports</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Reveal>
      {MobileView}
      {WebView}
    </Reveal>
  );
};

export default Footer;
