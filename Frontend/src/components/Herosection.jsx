import React from "react";
import AimQuestLogo from "../assets/AimQuest-Logo.png";
import Navbar from "./Navbar";
// eslint-disable-next-line no-unused-vars
import { motion} from 'framer-motion'
const fadeanimation={
  hidden:{ opacity:0, y:30 },
  visible:{
    opacity:1,
    y:0,
    transition:{ duration:0.6, ease:"easeOut"},
  },
};
const fadeanimationtext={
hidden:{ opacity:0, y:30 },
visible: {
  opacity:1,
  y:0,
  transition:{ duration:0.6, ease:"easeOut",delay:0.4 },
  },
};

const Herosection=()=>{
  return(
    <>
    <Navbar/>
    <section
      id="Home"
      className="min-h-screen w-full herosectionbackgroundimage flex items-center justify-center"
    >
      <div className="flex flex-col gap-32 items-center text-center px-4 z-10 bg-transparent">
      <motion.div className="flex items-center justify-center  mt-6 bg-transparent"
         variants={fadeanimation}
        initial="hidden"
         whileInView="visible"
         exit={{ opacity:0,y:30 }}
         transition={{duration:0.6, ease:"easeOut"}}
         viewport={{ once:false, amount:0.5}}>
          <img
            src={AimQuestLogo}
            alt="AimQuest Logo"
            className="lg:w-72 md:w-64 xs:w-56 relative top-5 flex rounded-md bg-transparent"
          />
        </motion.div>
        <motion.p className="text-white font-semibold md:text-3xl xs:text-xl Amoriafont tracking-widest lg:text-4xl  max-w-7xl  bg-transparent"
         variants={fadeanimationtext}
         initial="hidden"
          whileInView="visible"
          exit={{opacity:0, y:30 }}
          transition={{duration:0.8,ease:"easeOut",}}
          viewport={{once:false, amount:0.5 }}>
          Ready to showcase your talent, creativity, and innovative ideas?
        </motion.p>
  
      </div>
    </section>
    </>
  );
};

export default Herosection;
