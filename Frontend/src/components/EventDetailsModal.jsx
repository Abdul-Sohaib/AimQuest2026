import {React} from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";
const fadeanimationxaxis={
  hidden:{ opacity:0, x:-30 },
  visible:{
    opacity:1,
    x:0,
    transition:{ duration:0.6, ease:"easeOut" },
  },
};
const fadeanimationxaxis2={
  hidden:{opacity:0, x:30 },
  visible:{
    opacity:1,
    x:0,
    transition:{ duration:0.6,ease:"easeOut" },
  },
};

const EventDetailsModal=({event,onClose})=>{
  if(!event)return null;
  return(
    <AnimatePresence>
      {event && (
        <>
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-black to-[#090C1F] backdrop-blur-md z-40 "
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{scale:0.8,opacity:0}}
            animate={{scale:1,opacity:1}}
            exit={ {scale:0.8,opacity:0}}
          >
            <div
              onClick={(e)=>e.stopPropagation()}
              className="bg-gradient-to-b from-black to-[#090C1F] text-white lg:w-screen md:w-screen p-8 max-h-screen overflow-y-auto hide-scrollbar border border-white/30 shadow-2xl"
            >
              <button
                onClick={onClose}
                className="absolute lg:top-6 lg:right-3 md:top-10 md:right-14 xs:top-10 xs:right-8 text-3xl hover:text-red-600 transition-colors"
              >
                <IoClose />
              </button>

              {/* Event Name & Description */}
              <div className="flex flex-col w-full justify-center items-center mb-8">
                <h1 className="text-4xl font-bold text-center mb-4 Amoriafont tracking-wider">
                  {event.name}
                </h1>
                <p className="text-white/80 text-center text-sm leading-relaxed navfonts tracking-wide">
                  {event.description}
                </p>
              </div>
              {event.eventSymbol && (
                <div className="flex justify-center mb-8 items-center w-full">
                  <div className="bg-transparent w-full justify-center items-center flex">
                    <img
                      src={event.eventSymbol}
                      alt={`${event.name} symbol`}
                      className="rounded-full w-64 object-contain"
                    />
                  </div>
                </div>
              )}

              {/* Prizes Section */}
              <div className="mb-8 flex flex-col h-fit">
                <h3 className="text-3xl font-bold text-center mb-6 text-[#EBFE70] Amoriafont tracking-wider">
                  Prizes & Winners
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* First Prize*/}
                

                  {/* Second Prize*/}
                  {event.prizes[1] && (
                    <div className="bg-gradient-to-br from-gray-400/20 to-gray-500/10 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-400/40 hover:border-gray-400/60 transition-all hover:scale-105 transform">
                      <div className="flex justify-center mb-3">
                        <FaMedal className="text-5xl text-gray-300" />
                      </div>
                      <p className="text-white text-center font-bold text-lg mb-2 navfonts tracking-widest">
                        Second Place
                      </p>
                      {event.prizes[1].title && (
                        <p className="text-white/90 text-center font-medium text-base mb-2">
                          {event.prizes[1].title}
                        </p>
                      )}
                      <p className="text-gray-300 text-center font-bold text-xl mb-1">
                        ₹{event.prizes[1].amount}
                      </p>
                      {event.prizes[1].certificate && (
                        <p className="text-white/70 text-center text-sm navfonts tracking-wide">
                          {event.prizes[1].certificate}
                        </p>
                      )}
                    </div>
                  )}

{event.prizes[0] && (
                    <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-500/40 hover:border-yellow-500/60 transition-all hover:scale-105 transform">
                      <div className="flex justify-center mb-3">
                        <FaTrophy className="text-5xl text-yellow-400" />
                      </div>
                      <p className="text-white text-center font-bold text-lg mb-2 navfonts tracking-widest">
                        First Place
                      </p>
                      {event.prizes[0].title && (
                        <p className="text-white/90 text-center font-medium text-base mb-2 ">
                          {event.prizes[0].title}
                        </p>
                      )}
                      <p className="text-yellow-400 text-center font-bold text-xl mb-1">
                        ₹{event.prizes[0].amount}
                      </p>
                      {event.prizes[0].certificate && (
                        <p className="text-white/70 text-center text-sm navfonts tracking-wide">
                          {event.prizes[0].certificate}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Third Prize */}
                  {event.prizes[2] && (
                    <div className="bg-gradient-to-br from-orange-600/20 to-orange-700/10 backdrop-blur-sm rounded-xl p-6 border-2 border-orange-600/40 hover:border-orange-600/60 transition-all hover:scale-105 transform">
                      <div className="flex justify-center mb-3">
                        <FaAward className="text-5xl text-orange-400" />
                      </div>
                      <p className="text-white text-center font-bold text-lg mb-2 navfonts tracking-widest">
                        Third Place
                      </p>
                      {event.prizes[2].title && (
                        <p className="text-white/90 text-center font-medium text-base mb-2">
                          {event.prizes[2].title}
                        </p>
                      )}
                      <p className="text-orange-400 text-center font-bold text-xl mb-1">
                        ₹{event.prizes[2].amount}
                      </p>
                      {event.prizes[2].certificate && (
                        <p className="text-white/70 text-center text-sm navfonts tracking-wide">
                          {event.prizes[2].certificate}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-10">

              {/* Rules Section */}
              {event.rules && event.rules.length > 0 && (
                <motion.div className="mb-6 w-full text-left flex flex-col"
                variants={fadeanimationxaxis}
                initial="hidden"
                 whileInView="visible"
                 exit={{opacity:0, x:-30}}
                 transition={{ duration:0.6,ease:"easeOut"}}
                 viewport={{ once:false,amount:0.5}}
                >
                  <h3 className="text-3xl font-bold mb-4 text-[#EBFE70] navfonts tracking-wider">
                    Rules & Guidelines
                  </h3>
                  <div className="w-full bg-transparent text-left">
                    <ul className="space-y-3">
                      {event.rules.map((rule, i)=>(
                        <li key={i} className="flex items-start">
                          <span className="text-white/80 text-base">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Prospective Participants Section */}
              {event.prospective_participants && event.prospective_participants.length > 0 && (
                <motion.div className="mb-6 w-full text-right flex flex-col"
                variants={fadeanimationxaxis2}
                initial="hidden"
                 whileInView="visible"
                 exit={{opacity:0, x:30}}
                 transition={{duration:0.6,ease:"easeOut"}}
                 viewport={{ once:false,amount:0.5}}
                >
                  <h3 className="text-3xl font-bold mb-4 text-[#EBFE70]">
                    Prospective Participants
                  </h3>
                  <div className="w-full bg-transparent">
                    <ul className="space-y-3">
                      {event.prospective_participants.map((participant, i)=>(
                        <li key={i} className="flex ">
                          <span className="text-white/80 text-base text-right w-full">{participant}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Judge Section */}
              {event.judge && event.judge.length > 0 && (
                <motion.div className="mb-6 w-full text-left flex flex-col"
                variants={fadeanimationxaxis}
                initial="hidden"
                 whileInView="visible"
                 exit={{ opacity: 0, x: 30 }}
                 transition={{duration:0.6,ease:"easeOut"}}
                 viewport={{once:false,amount:0.5}}
                >
                  <h3 className="text-3xl font-bold mb-4 text-[#EBFE70]">
                    Judges
                  </h3>
                  <div className="w-full bg-transparent">
                    <ul className="space-y-3">
                      {event.judge.map((judgeItem, i)=>(
                        <li key={i} className="flex items-start">
                          <span className="text-white/80 text-base">{judgeItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Marketing Section */}
              {event.marketings && event.marketings.length > 0 && (
                <motion.div className="mb-6 w-full text-left flex flex-col"
                variants={fadeanimationxaxis}
                initial="hidden"
                 whileInView="visible"
                 exit={{ opacity:0, x:-30 }}
                 transition={{ duration:0.6,ease:"easeOut"}}
                 viewport={{ once:false,amount:0.5}}
                >
                  <h3 className="text-3xl font-bold mb-4 text-[#EBFE70]">
                    Marketing Strategy
                  </h3>
                  <div className="w-full bg-transparent">
                    <ul className="space-y-3">
                      {event.marketings.map((marketing, i)=>(
                        <li key={i} className="flex items-start">
                          <span className="text-white/80 text-base">{marketing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Other Requirements Section */}
              {event.other_requirements && event.other_requirements.length > 0 && (
                <motion.div className="mb-6 w-full text-right flex flex-col"
                variants={fadeanimationxaxis2}
                initial="hidden"
                 whileInView="visible"
                 exit={{opacity:0,x:30}}
                 transition={{ duration:0.6,ease:"easeOut"}}
                 viewport={{once:false,amount:0.5}}
                >
                  <h3 className="text-3xl font-bold mb-4 text-[#EBFE70]">
                    Other Requirements
                  </h3>
                  <div className="w-full bg-transparent">
                    <ul className="space-y-3">
                      {event.other_requirements.map((requirement, i)=>(
                        <li key={i} className="flex items-start">
                          <span className="text-white/80 text-base w-full text-right">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventDetailsModal;