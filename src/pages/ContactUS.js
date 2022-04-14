import React from "react";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
function ContactUS() {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      ContactUS
    </motion.div>
  );
}

export default ContactUS;
