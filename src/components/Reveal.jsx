/* eslint-disable react/prop-types */
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else mainControls.stop("visible");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
