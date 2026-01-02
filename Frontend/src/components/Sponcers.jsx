import React, { useEffect, useRef } from 'react';
import sponcer1 from "../assets/sponcer1.png";
import sponcer2 from "../assets/sponcer2.png";
import sponcer3 from "../assets/sponcer3.png";
import sponcer4 from "../assets/sponcer4.png";
import sponcer5 from "../assets/sponcer5.png";
import sponcer6 from "../assets/sponcer6.png";
import sponcer7 from "../assets/sponcer7.png";
import sponcer8 from "../assets/sponcer8.png";

const Sponsors = () => {
  const sponsors = [
    {id:1,name:'Sponsor1', image:sponcer1 },
    {id:2,name:'Sponsor2', image:sponcer2 },
    {id:3,name:'Sponsor3', image:sponcer3 },
    {id:4,name:'Sponsor4', image:sponcer4 },
    {id :5,name:'Sponsor5', image:sponcer5 },
    {id:6,name:'Sponsor6', image:sponcer6 },
    {id:7,name:'Sponsor7', image:sponcer7 },
    {id:8,name:'Sponsor8', image:sponcer8 },
  ];

  const scrollRef=useRef(null);

  useEffect(() => {
    const scrollContainer=scrollRef.current;
    if(!scrollContainer)return;

    let scrollPosition=0;
    const scrollSpeed=1; 
    let animationId;

    const scroll=()=>{
      scrollPosition +=scrollSpeed;
      const maxScroll=scrollContainer.scrollWidth / 2;
      if (scrollPosition>=maxScroll) {
        scrollPosition=0;
      }
      
      scrollContainer.style.transform=`translateX(-${scrollPosition}px)`;
      animationId=requestAnimationFrame(scroll);
    };

    animationId=requestAnimationFrame(scroll);

    const handleMouseEnter=()=>cancelAnimationFrame(animationId);
    const handleMouseLeave=()=>{
      animationId=requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter',handleMouseEnter);
    scrollContainer.addEventListener('mouseleave',handleMouseLeave);

    return()=>{
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter',handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave',handleMouseLeave);
    };
  }, []);

  return(
    <section 
      id='Sponcers' 
      className='min-h-[60vh] w-full bg-[#020202] flex justify-center items-center'
    >
      <div className='flex flex-col w-full max-w-7xl px-4'>
        <div className='relative w-full mt-20 overflow-hidden'>
          <div className='absolute left-0 top-0 bottom-0 w-32 bg-transparent z-10 pointer-events-none'></div>
          <div className='absolute right-0 top-0 bottom-0 w-32 bg-transparent z-10 pointer-events-none'></div>
          <div ref={scrollRef} className='flex gap-8 will-change-transform'>
            {[...Array(3)].map((_, setIndex)=>(
              <React.Fragment key={setIndex}>
                {sponsors.map((sponsor)=>(
                  <div
                    key={`${setIndex}-${sponsor.id}`}
                    className='flex-shrink-0 w-64 h-40 flex items-center justify-center  '
                  >
                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className='w-32 object-contain p-4  flex'
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