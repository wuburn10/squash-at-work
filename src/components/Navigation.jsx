import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

// Import logo
import logoImage from "../assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Programs", href: "#programs" },
    { name: "Activities", href: "#activities" },
    { name: "Coaches", href: "#coaches" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled 
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img 
                src={logoImage} 
                alt="Squash@Work Logo" 
                className="h-10 w-auto mr-2"
              />
              {/* <span className="text-2xl font-bold text-white hidden sm:inline">
                Squash<span className="text-orange-500">@Work</span>
              </span> */}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.button
              className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => window.open("https://wa.me/60169203537?text=Hi%20Squash%40Work!%20I'm%20interested%20in%20joining%20your%20academy.%20Please%20find%20my%20details%20below:%0A%0AName:%0AKid's%20Name%20(if%20applicable):%0AYears%20of%20Squash%20Experience:%0AProgram%20of%20Interest:%0A%0AThank%20you!", "_blank")}
            >
              Join Us
            </motion.button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={cn(
            "md:hidden",
            isMobileMenuOpen ? "block" : "hidden"
          )}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <button
              className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium"
              onClick={() => window.open("https://wa.me/60169203537?text=Hi%20Squash%40Work!%20I'm%20interested%20in%20joining%20your%20academy.%20Please%20find%20my%20details%20below:%0A%0AName:%0AKid's%20Name%20(if%20applicable):%0AYears%20of%20Squash%20Experience:%0AProgram%20of%20Interest:%0A%0AThank%20you!", "_blank")}
            >
              Join Us
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Floating WhatsApp Button */}
      <motion.button
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40 md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        onClick={() => window.open("https://wa.me/60169203537?text=Hi%20Squash%40Work!%20I'm%20interested%20in%20joining%20your%20academy.%20Please%20find%20my%20details%20below:%0A%0AName:%0AKid's%20Name%20(if%20applicable):%0AYears%20of%20Squash%20Experience:%0AProgram%20of%20Interest:%0A%0AThank%20you!", "_blank")}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.button>
    </>
  );
};