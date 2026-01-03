import {React, useState} from 'react';
import { GoArrowRight } from "react-icons/go";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import EventDetailsModal from './EventDetailsModal';
import {eventsData} from '../data/eventsData'

const fadeanimation={
  hidden:{ opacity: 0, y: 30 },
  visible:{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants={
  hidden:{
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible:(i)=>({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.1,
    },
  }),
};

const hoverVariants={
  hover:{
    scale:1.05,
    y:-5,
    transition:{
      duration:0.3,
      ease:"easeOut",
    },
  },
};

const Events=()=>{
  const [activeevents, setactiveevents]=useState(null);
  
  // Split events into two groups - left (first 4) and right (last 4)
  const leftEvents=eventsData.slice(0, 4);
  const rightEvents=eventsData.slice(4, 8);

  return (
    <>
      <section id='Events' className='min-h-screen w-full bg-gradient-to-b from-black to-[#090C1F] eventsbg flex items-center justify-center relative overflow-hidden py-20'>
        <div className='w-full max-w-full mx-auto flex items-center justify-around gap-2 px-2'>
          
          {/* Left Grid - 2x2 */}
          <div className='grid grid-cols-2 xs:grid-cols-1 gap-4 lg:gap-6'>
            {leftEvents.map((event, index)=>(
              <motion.div
                key={event.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  onClick={() => setactiveevents(event)}
                  variants={hoverVariants}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex justify-center items-center gap-3 px-2 py-3 lg:px-2 lg:py-4 rounded-xl shadow-2xl w-full cursor-pointer transition border border-white/20 hover:border-white/40 hover:bg-white/10"
                >
                  <h3 className="text-white font-medium md:text-sm lg:text-lg  Amoriafont tracking-wide">
                    {event.name}
                  </h3>
                  <GoArrowRight className='text-base lg:text-xl text-white flex-shrink-0' />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Center - Events Title */}
          <motion.div 
            className='flex flex-col items-center z-50 relative'
            variants={fadeanimation}
            initial="hidden"
            whileInView="visible"
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <span className='text-5xl lg:text-7xl md:text-6xl z-40 xs:text-4xl text-white text-center Amoriafont tracking-wide whitespace-nowrap'>
              Events
            </span>
          </motion.div>

          {/* Right Grid - 2x2 */}
          <div className='grid grid-cols-2 xs:grid-cols-1 gap-4 lg:gap-6'>
            {rightEvents.map((event, index) => (
              <motion.div
                key={event.id}
                custom={index + 4}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: false, amount: 0.3 }}
              >
                <motion.div
                  onClick={() => setactiveevents(event)}
                  variants={hoverVariants}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex justify-center items-center gap-3 px-4 py-3 lg:px-6 lg:py-4 rounded-xl shadow-2xl w-full cursor-pointer transition border border-white/20 hover:border-white/40 hover:bg-white/10"
                >
                  <h3 className="text-white font-medium text-sm lg:text-lg md:text-base Amoriafont tracking-wide">
                    {event.name}
                  </h3>
                  <GoArrowRight className='text-base lg:text-xl text-white flex-shrink-0' />
                </motion.div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      
      <EventDetailsModal
        event={activeevents}
        onClose={()=>setactiveevents(null)}
      />
    </>
  )
}

export default Events