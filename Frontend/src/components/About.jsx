import {React , useEffect,useState, useRef} from 'react'
import ideaimg from "../assets/ideaimg.png";
// eslint-disable-next-line no-unused-vars
import { motion, animate, useInView } from "framer-motion";

const fadeanimation={
    hidden: { opacity:0, y:30 },
    visible: {opacity:1,y:0,transition: { duration:0.6, ease:"easeOut" }},
  };

const fadeanimationforstats={
    hidden:{opacity:0,y:30},visible:(i=1)=>({opacity:1,y:0,transition:{
        delay:i*0.2,
        duration:0.6,
        ease:"easeOut",
      },
    }),
    
  };

const fadeanimation2={
    hidden:{opacity:0,x:-80},
    visible:{
      opacity:1,
      x:0,
      transition:{duration:0.6,ease:"easeOut"},
    },
  };

const fadeanimation3={
    hidden:{opacity:0,x:80},
    visible:{
      opacity:1,
      x:0,
      transition:{duration:0.6,ease:"easeOut"},
    },
  };

  const CountUp=({value,suffix="+"})=>{
    const [count,setCount]=useState(0);
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true,amount:0.5});
    const hasAnimatedRef=useRef(false);
  
    useEffect(()=>{
      if(isInView && !hasAnimatedRef.current){
        hasAnimatedRef.current=true;
        const controls=animate(0,value,{
          duration:1.2,
          ease:"easeOut",
          delay:0.4,
          onUpdate(latest){setCount(Math.round(latest))},
        });
  
        return()=>controls.stop();
      }
    },[isInView,value]);
  
    return (
      <motion.span ref={ref} className="text-white text-center text-2xl">
        {count}
        {suffix}
      </motion.span>
    );
  };

const About = () => {
  return (
    <>
    <section id='About' className='min-h-screen w-full bg-[#202020] flex justify-center'>
        <div className='flex flex-col justify-center items-center'>
 
        <div className='w-full flex xs:flex-col flex-1 justify-center items-center gap-32 xs:gap-20 px-10'>
            <div className='flex flex-col md:w-1/2 justify-around h-full items-center xs:gap-10 xs:mt-10'>
            <motion.div className='flex flex-col justify-center items-center xs:w-full'
             variants={fadeanimation2}
             initial="hidden"
              whileInView="visible"
              exit={{ opacity:0,y:30 }}
              transition={{ duration:0.6,ease:"easeOut" }}
              viewport={{ once:false,amount:0.5 }}>
            <img src={ideaimg} alt="" className='lg:w-40 md:w-32 xs:w-24 flex relative lg:top-8 md:top-6 xs:top-4 -rotate-[10deg] lg:left-6 md:left-7 xs:left-4' />
            <span className='lg:text-6xl md:text-4xl xs:text-3xl text-white font-bold Amoriafont tracking-widest'>AimQuest</span>
            <span className='lg:text-2xl md:text-xl xs:text-lg text-white navfonts tracking-wide xs:text-center'>ASSAM INSTITUTE OF MANAGEMENT</span>
            <span className='lg:text-2xl md:text-xl xs:text-lg text-white navfonts tracking-wide'>Since 1988</span>
            </motion.div>
            </div>
            <div className='flex flex-col h-full w-full items-center justify-center gap-6'>
                     <motion.div className='flex mt-10 flex-col w-full justify-center items-center'
         variants={fadeanimation}
         initial="hidden"
          whileInView="visible"
          exit={{ opacity:0,y:30 }}
          transition={{ duration:0.6,ease:"easeOut" }}
          viewport={{ once:false,amount:0.5 }}>
            <span className='lg:text-7xl md:text-5xl xs:text-3xl text-white text-center Amoriafont tracking-wider'>About Us</span>
        </motion.div>
            <motion.div className='flex md:w-1/2 lg:w-full justify-center items-center'
             variants={fadeanimation3}
             initial="hidden"
              whileInView="visible"
              exit={{ opacity:0,y:30 }}
              transition={{ duration:0.6,ease:"easeOut" }}
              viewport={{ once:false,amount:0.5 }}>
            <p className='lg:text-lg md:text-sm text-white text-center md:text-justify lg:leading-10 md:leading-relaxed navfonts tracking-wide '>The Annual Cultural cum Business Festival hosted by the Assam Institute of Management! Join us for a vibrant celebration that nurtures talent, encourages holistic growth, and provides a platform for individuals to shine. Our festival features a diverse range of events including music festivals, intellectual quizzes, engaging debates, and captivating art and culture displays. At AIMQUEST, we believe in fostering a spirit of camaraderie, exploration, and celebration. It's more than just an event; it's a melting pot of ideas, cultures, and talents, inspiring, entertaining, and uniting individuals from all walks of life. Don't miss out on this exciting opportunity to showcase your skills and passions while experiencing the magic of AIMQUEST</p>
            </motion.div>
            </div>
        </div>
            <div className='flex xs:flex-col lg:gap-20 md:gap-14 xs:gap-10 mb-10'>
            <motion.div className='flex flex-col w-[15rem] border border-white p-2 navfonts tracking-wide'
             variants={fadeanimationforstats}
             initial="hidden"
             whileInView="visible"
             custom={1}
             viewport={{ once:true,amount:0.5 }}>
               <CountUp value={145} suffix="K+" />
                <span className='text-white text-center text-md'>
                    Footfall
                    </span>
            </motion.div>
            <motion.div className='flex flex-col w-[15rem] border border-white p-2 navfonts tracking-wide'
              variants={fadeanimationforstats}
              initial="hidden"
              whileInView="visible"
              custom={2}
              viewport={{ once:true,amount:0.5 }}>
               <CountUp value={45} suffix="+" />
                <span className='text-white text-center text-md'>
                Competitions
                    </span>
            </motion.div>
            <motion.div className='flex flex-col w-[15rem] border border-white p-2 navfonts tracking-wide'
              variants={fadeanimationforstats}
              initial="hidden"
              whileInView="visible"
              custom={1}
              viewport={{ once:true,amount:0.5 }}>
               <CountUp value={100} suffix="+" />
                <span className='text-white text-center text-md'>
                Events
                    </span>
            </motion.div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About