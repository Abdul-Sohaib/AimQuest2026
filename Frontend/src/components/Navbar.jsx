import React, { useState } from "react";
import AimquestLogo from "../assets/AimQuest-Logo.png";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navLinks = [
    { href: "#About", label: "About" },
    { href: "#Events", label: "Events" },
    { href: "#Register", label: "Register" },
    { href: "#Sponcers", label: "Sponsors" },
    { href: "#Contact", label: "Contact" },
    { href: "#Team", label: "Team" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="lg:max-w-7xl md:max-w-fit mx-auto py-3 flex items-center justify-center border-b border-white bg-black/20 backdrop-blur-md rounded-md">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center w-full lg:justify-around md:gap-10 md:px-4 text-white navfonts tracking-wide lg:text-lg md:text-sm">
          <a href="#About" className="nav-link">About</a>
          <a href="#Events" className="nav-link">Events</a>
          <a href="#Register" className="nav-link">Register</a>
          <a href="#Home" className="flex items-center">
            <img src={AimquestLogo} alt="Logo" className="lg:w-20 md:w-16 rounded-md" />
          </a>
          <a href="#Sponcers" className="nav-link">Sponsors</a>
          <a href="#Contact" className="nav-link">Contact</a>
          <a href="#Team" className="nav-link">Team</a>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center justify-between w-full px-4">
          {/* Logo */}
          <a href="#Home" className="flex items-center">
            <img src={AimquestLogo} alt="Logo" className="w-14 rounded-md" />
          </a>

          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <IoClose className="text-3xl" />
              ) : (
                <HiMenuAlt3 className="text-3xl" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 sm:hidden"
            />

            {/* Slide-in Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 w-[50vw] max-w-4xl h-full bg-gradient-to-b from-black via-[#0a0e27] to-black border-l border-white/20 z-40 sm:hidden shadow-2xl"
            >
              <div className="flex flex-col items-start justify-center max-w-4xl h-full px-8 space-y-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    onClick={closeMenu}
                    className="text-white text-xl hover:text-blue-400 transition-colors duration-300 w-full py-2 navfonts tracking-wide "
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;