"use client";
import { motion } from "framer-motion";
import React from "react";

const Portfoliopage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
      className="h-full "
    >
      Portfoliopage
    </motion.div>
  );
};

export default Portfoliopage;
