import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all hero images
import hero1 from "../assets/hero/photo_2025-10-23_00-04-42.jpg";
import hero2 from "../assets/hero/photo_2025-10-23_00-04-45.jpg";
import hero3 from "../assets/hero/photo_2025-10-23_00-04-49.jpg";
import hero4 from "../assets/hero/photo_2025-10-23_00-04-51.jpg";
import hero5 from "../assets/hero/photo_2025-10-23_00-04-53.jpg";
import hero6 from "../assets/hero/photo_2025-10-23_00-04-56.jpg";
import hero7 from "../assets/hero/photo_2025-10-23_00-04-57.jpg";
import hero8 from "../assets/hero/photo_2025-10-23_00-04-59.jpg";
import hero9 from "../assets/hero/photo_2025-10-23_00-05-00.jpg";
import hero10 from "../assets/hero/photo_2025-10-23_00-05-13.jpg";
import hero11 from "../assets/hero/photo_2025-10-23_00-05-15.jpg";
import hero12 from "../assets/hero/photo_2025-10-23_00-05-22.jpg";

export const AnimatedBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of imported images
  const heroImages = [
    hero1, hero2, hero3, hero4, hero5, hero6,
    hero7, hero8, hero9, hero10, hero11, hero12
  ];

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sliding Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={heroImages[currentImageIndex]}
            alt={`Squash Academy ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-orange-500 w-8" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      {/* Animated court lines overlay (subtle) */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        {/* Subtle vertical lines */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute h-full w-0.5 bg-white"
            style={{ left: `${25 * (i + 1)}%` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ 
              delay: i * 0.2, 
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 5
            }}
          />
        ))}
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/75 to-slate-900/85" />
      
      {/* Additional dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};