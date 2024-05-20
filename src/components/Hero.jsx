/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Hero = ({
  image1,
  image2,
  heading1,
  heading2,
  heading1_color,
  heading2_color,
  heading_class,
  clip_section_class,
  arrow_pos_class,
}) => {
  return (
    <div className="-mt-[100px]">
      <div className="h-screen max-h-[765px] relative">
        <motion.img
          variants={{
            hidden: { opacity: 0.2, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          src={image2}
          alt=""
          className={`absolute right-[30%] lg:right-[32%] xl:right:[25%] 2xl:right-[30%] top-1 h-full z-30 ${arrow_pos_class}`}
        />
        <div
          className={`clip-section bg-white w-2/3 h-full absolute z-20 ${clip_section_class}`}
        ></div>
        <motion.img
          variants={{
            hidden: { opacity: 0.1 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.25 }}
          src={image1}
          alt=""
          className="absolute right-0 h-full z-10"
        />
      </div>

      <div className="">
        <div
          className={`text-[200px] 2xl:text- [250px] leading-[180px] text-end 2xl:leading-[250px] tracking-wider top-[20%] lg:right-[20%] xl:right-[28%] 2xl:right-[40%] z-40 font-zing -rotate-6 absolute mx-auto w-fit ${heading_class}`}
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, x: -95 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`${heading1_color}`}
          >
            {heading1}
          </motion.p>
          <motion.p
            variants={{
              hidden: { opacity: 0, x: 95 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`${heading2_color} pl-20`}
          >
            {heading2}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
