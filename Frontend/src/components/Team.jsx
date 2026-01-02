import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { teamData } from '../data/teamData';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { BiSolidDownArrow } from "react-icons/bi";

const fadeAnimation={
  hidden:{ opacity: 0, y: 30 },
  visible:{
    opacity: 1,
    y: 0,
    transition:{ duration: 0.6, ease: "easeOut" },
  },
};

const cardAnimation={
  hidden:{ opacity: 0, scale: 0.9 },
  visible:(i)=>({
    opacity:1,
    scale:1,
    transition:{
      delay:i * 0.1,
      duration:0.5,
      ease:"easeOut",
    },
  }),
};

const Team=()=>{
  const [selectedEvent, setSelectedEvent]=useState(null);

  const handleEventClick=(event)=>{
    setSelectedEvent(selectedEvent?.id===event.id?null:event);
  };

  return (
    <section id="Team" className="min-h-screen w-full bg-[#202020] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-6xl xs:text-4xl font-bold text-white mb-4 Amoriafont tracking-wider">
            Our Team
          </h2>
          <p className="text-white/70 text-lg xs:text-sm navfonts tracking-wider">
            Meet the dedicated members behind each event
          </p>
          {/* events */}
        </motion.div>
        <div className="space-y-12">
          {teamData.map((event) => (
            <motion.div
              key={event.id}
              className="w-full"
              variants={fadeAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <button
                onClick={() => handleEventClick(event)}
                className="w-full mb-6 group"
              >
                <div
                  className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <h3 className="text-3xl xs:text-xl font-bold text-white group-hover:text-[#EBFE70] transition-colors Amoriafont tracking-wider">
                        {event.eventName}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: selectedEvent?.id === event.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white text-2xl"
                    >
                       <BiSolidDownArrow/>
                    </motion.div>
                  </div>
                  <p className="text-white/60 text-sm xs:text-xs mt-2 text-left navfonts tracking-wider">
                    {event.members.length} Team Members
                  </p>
                </div>
              </button>

              {/* Members */}
              <AnimatePresence>
                {selectedEvent?.id === event.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 px-4">
                      {event.members.map((member, memberIndex) => (
                        <motion.div
                          key={member.id}
                          custom={memberIndex}
                          variants={cardAnimation}
                          initial="hidden"
                          animate="visible"
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="group"
                        >
                          <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20  transition-all duration-300 flex flex-col"
                          >
                            <div className="relative mb-4">
                              <div
                                className="w-24 h-24 mx-auto rounded-full overflow-hidden border-white border transition-all duration-300"
                              >
                                <img
                                  src={member.image}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            
                            </div>
                            <div
                                className=" text-xs font-bold text-white w-full items-center flex text-center justify-center"
                              >
                                {member.role}
                              </div>

                            {/* Member Info */}
                            <div className="text-center mt-6">
                              <h4 className="text-white font-bold text-lg mb-4">
                                {member.name}
                              </h4>

                              {/* Contact Info */}
                              <div className="space-y-2 flex flex-col justify-center items-center w-full">
                                <div className="flex items-center gap-2 text-white/70 text-sm  transition-colors">
                                  <FaEnvelope className="text-[#EBFE70]" />
                                  <span className="truncate">{member.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/70 text-sm  transition-colors">
                                  <FaPhone className="text-[#EBFE70]" />
                                  <span>{member.phone}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;