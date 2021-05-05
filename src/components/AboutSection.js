import React from "react";

// Styled Components
import styled from "styled-components";

// Wave Component
import Wave from "./Wave";

// Styles
import { About, Hide } from "../styles";

// Framer Motion
import { motion } from "framer-motion";
import {
  titleAnim,
  fade,
  pageTransition,
  pageTransitionContainer,
} from "../animation";

const AboutSection = () => {
  return (
    <About>
      <motion.div variants={pageTransitionContainer}>
        <Frame1 variants={pageTransition}></Frame1>
        <Frame2 variants={pageTransition}></Frame2>
        <Frame3 variants={pageTransition}></Frame3>
        <Frame4 variants={pageTransition}></Frame4>
      </motion.div>
      <motion.div>
        <Hide>
          <motion.h2 variants={titleAnim}>Traditionnellement</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>photographié par</motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}>Finest Film.</motion.h2>
        </Hide>
        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          consequat mauris malesuada eros tincidunt, ut tristique nibh pretium.
          Nam porttitor risus eget lacus tempus dictum.
        </motion.p>
        <motion.button variants={fade}>Contactez-nous</motion.button>
      </motion.div>
      <Wave />
    </About>
  );
};

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #3f7d6e;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #2d3fff;
`;

const Frame3 = styled(Frame1)`
  background: #f71735;
`;

const Frame4 = styled(Frame1)`
  background: #011627;
`;

export default AboutSection;
