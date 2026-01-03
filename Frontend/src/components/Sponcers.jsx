import React, { useEffect, useRef } from 'react';
import sponcer1 from "../assets/Asset.png";
import sponcer2 from "../assets/eventbomb.png";
import sponcer3 from "../assets/martech.jpeg";
import sponcer4 from "../assets/nedfi.png";
import sponcer5 from "../assets/the_highlander.jpeg";
import sponcer6 from "../assets/the_nakhyatra.jpeg";
import sponcer7 from "../assets/unionbank.png";
import sponcer8 from "../assets/xamtech.png";

const Sponsors=()=>{
  const sponsors=[
    {id:1,name:'Sponsor1', image:sponcer1 },
    {id:2,name:'Sponsor2', image:sponcer2 },
    {id:3,name:'Sponsor3', image:sponcer3 },
    {id:4,name:'Sponsor4', image:sponcer4 },
    {id:5,name:'Sponsor5', image:sponcer5 },
    {id:6,name:'Sponsor6', image:sponcer6 },
    {id:7,name:'Sponsor7', image:sponcer7 },
    {id:8,name:'Sponsor8', image:sponcer8 },
  ];

  const scrollRef=useRef(null);
  const animationRef=useRef(null);

  useEffect(()=>{
    const scrollContainer=scrollRef.current;
    if(!scrollContainer)return;

    let scrollPosition=0;
    const scrollSpeed=0.5;
    let isPaused=false;

    const scroll=()=>{
      if (!isPaused) {
        scrollPosition+=scrollSpeed;
        const maxScroll=scrollContainer.scrollWidth/3;
        
        if (scrollPosition >= maxScroll){
          scrollPosition=0;
        }
        
        scrollContainer.style.transform=`translate3d(-${scrollPosition}px, 0, 0)`;
      }
      animationRef.current=requestAnimationFrame(scroll);
    };

    animationRef.current=requestAnimationFrame(scroll);

    const handleMouseEnter=()=>{
      isPaused=true;
    };
    
    const handleMouseLeave=()=>{
      isPaused=false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return()=>{
      if(animationRef.current){
        cancelAnimationFrame(animationRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section 
      id='Sponcers' 
      className='min-h-[60vh] w-full bg-[#020202] flex justify-center items-center'
    >
      <div className='flex flex-col w-full max-w-7xl px-4 h-80 justify-center items-center'>
        <div className='relative w-full h-full flex overflow-hidden justify-center items-center'>
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none'></div>
          
          <div 
            ref={scrollRef} 
            className='flex gap-16 '
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              perspective: '1000px'
            }}
          >
            {[...Array(3)].map((_, setIndex)=>(
              <React.Fragment key={setIndex}>
                {sponsors.map((sponsor)=>(
                  <div
                    key={`${setIndex}-${sponsor.id}`}
                    className='flex-shrink-0 w-64 h-40 border border-white flex items-center justify-center rounded-md transition-transform duration-300 hover:scale-105'
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className='w-32 object-contain p-4'
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;