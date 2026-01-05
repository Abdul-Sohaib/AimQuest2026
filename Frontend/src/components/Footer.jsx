import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import AimQuestLogo from "../assets/AimQuest-Logo.png";

const Footer=()=>{
  return (
    <footer className="bg-[#020202] text-white p-6 h-full">
      <div className="max-w-full mx-auto border-b-2 border-white">
        <div className="flex xs:flex-col flex-1 gap-8 justify-around ">
          
          {/* Logo and Location Section */}
          <div className="space-y-10 flex flex-col h-full items-center justify-around">
            <div className="flex items-center gap-3 w-full">
              {/* Placeholder for logo image */}
              <div className='relative ' >
                <img src={AimQuestLogo} alt="" className='lg:w-32 md:w-52 xs:w-40 flex rounded-md bg-transparent'/>
              </div>
              <div className='relative flex flex-col gap-2 xs:gap-6'>
                <p className="lg:text-sm md:text-sm xs:text-xs text-white navfonts tracking-wide">AIM BORAGAON, GUWAHATI</p>
                <h2 className="lg:text-5xl md:text-4xl xs:text-2xl font-bold Amoriafont tracking-wider">AIMQUEST</h2>
                <p className="lg:text-xl md:text-lg xs:text-sm font-semibold absolute right-[-1rem] xs:right-2 lg:bottom-9 md:bottom-6 xs:bottom-6 rotate-12">2026</p>
              </div>
            </div>
            <div className="flex gap-10 pt-7 items-center justify-evenly">
              <a href="#instagram" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#linkedin" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#facebook" className="hover:text-blue-600 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
           
          </div>
          <div className='flex lg:flex-row md:flex-col xs:flex-col md:gap-6 lg:gap-20 xs:gap-6 mb-10'>
             <div className='flex flex-col w-full justify-center items-center xs:gap-4'>
            <span className='xs:text-sm w-full items-center justify-center text-center  underline'>Quick links</span>
          <nav className="flex flex-col lg:text-lg md:text-lg xs:gap-4 w-full text-left justify-around items-center navfonts tracking-wide gap-3 mt-5">
              <a href="#About" className="hover:text-gray-300 transition-colors">About</a>
              <a href="#Register" className="hover:text-gray-300 transition-colors">Register</a>
              <a href="#Events" className="hover:text-gray-300 transition-colors">Events</a>
              <a href="#Contact" className="hover:text-gray-300 transition-colors">Contact</a>
              <a href="#Sponcors" className="hover:text-gray-300 transition-colors">Sponsors</a>
              <a href="#Team" className="hover:text-gray-300 transition-colors">Team</a>
            </nav>
           
            </div>
          <div className="space-y-1 flex flex-col w-full">
            <h3 className="text-lg font-semibold mb-4">For business related queries</h3>
            <p className="text-gray-300">xyz@gmail.com</p>
          </div>
          <div className="space-y-3 flex flex-col w-full">
            <h3 className="text-lg font-semibold mb-4">For General Queries</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="space-y-1">
                <p className="text-gray-400">name</p>
                <p className="text-gray-400">position</p>
                <p className="text-gray-400">phone no</p>
                <p className="text-gray-400">email</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400">name</p>
                <p className="text-gray-400">position</p>
                <p className="text-gray-400">phone no</p>
                <p className="text-gray-400">email</p>
              </div>
            </div>
          </div>
         
          </div>
          
          </div>
          
          
        
      </div>
    </footer>
  );
};

export default Footer;