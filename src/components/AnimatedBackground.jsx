import React from "react";
import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated court lines */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        {/* Vertical lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-0.5 bg-white"
            style={{ left: `${12.5 * (i + 1)}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ 
              delay: i * 0.1, 
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
          />
        ))}
        
        {/* Horizontal lines */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute w-full h-0.5 bg-white"
            style={{ top: `${16.67 * (i + 1)}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              delay: i * 0.15, 
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 4
            }}
          />
        ))}
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90" />
    </div>
  );
};