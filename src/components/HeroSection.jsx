import React from "react";
import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";

export const HeroSection = () => {
  const scrollToPrograms = () => {
    document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Train With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Purpose
          </span>
          .
          <br />
          Play With{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
            Passion
          </span>
          .
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Malaysia's premium squash academy for youth development.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={scrollToPrograms}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Programs
          </motion.button>

          <motion.button
            onClick={() => window.open("https://wa.me/60169203537?text=Hi%20Squash%40Work!%20I'm%20interested%20in%20joining%20your%20academy.%20Please%20find%20my%20details%20below:%0A%0AName:%0AKid's%20Name%20(if%20applicable):%0AYears%20of%20Squash%20Experience:%0AProgram%20of%20Interest:%0A%0AThank%20you!", "_blank")}
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Program
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  );
};