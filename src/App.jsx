import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import "remixicon/fonts/remixicon.css"

function App() {

const [showcontent, setShowcontent] = useState(false)


  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate :10,
      duration : 2,
      ease: "Power4.easeInOut",
      transformOrigin : "50% 50%",
    })
    .to(".vi-mask-group", {
      scale: 10,
      delay:-1.8,
      ease: "Expo.easeInOut",
      duration: 2,
      transformOrigin : "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= 0.9){
          document.querySelector(".svg").remove();
          setShowcontent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(()=>{

    if(!showcontent) return;

    gsap.to(".main",{
 scale: 1,
 rotate:0,
 duration:2,
 delay:"-1",
 ease:"expo.easeInOut"

    })

    gsap.to(".sky",{
 scale: 1.2,
 rotate:0,
 duration:2,
 delay:"-0.5",
 ease:"expo.easeInOut"

    })

     gsap.to(".bg",{
 scale: 1.2,
 rotate:0,
 duration:2,
 delay:"-0.5",
 ease:"expo.easeInOut"
     })
       gsap.to(".character",{
 scale: 0.8,
 x:"-50%",
 bottom:"-70%",
  
 rotate:0,
 duration:2,
 delay:"-0.5",
 ease:"expo.easeInOut"
     })

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function(e){
      const xMove =(e.clientX / window.innerWidth -.5)*40;
      gsap.to(".imagesdiv .text" , {
        x:`${xMove * 0.4}%`,
      })

      gsap.to(".sky" , {
        x: xMove,
      })

      gsap.to(".bg" , {
        x: xMove * 2.5,
      })

    })
  }, [showcontent])
  return (
    <>
   <div className='svg fixed item-center justify-center top-0 left-0 z-[10] w-full h-screen overflow-hidden bg-black'>
   <svg viewBox='0 0 800 450' preserveAspectRatio='xMidYMid slice'>
    <defs>
      <mask id='viMask'>
        <rect width="100%" height="100%" fill='black'/>
        <g className='vi-mask-group'>
          <text x="50%" y="50%" fontSize="250" textAnchor="middle" fill="white" dominantBaseline="middle" fontFamily="Arial Black">
            VI
          </text>
        </g>
      </mask>
    </defs>
    <image href='./bg.png' width="100%" height="100%" preserveAspectRatio='xMidYMid slice' mask='url(#viMask)'></image>
   </svg>
   </div>
   {showcontent && (
    <div className='main w-full rotate-[-10deg] scale-[1.7]'>
    <div className=" landing w-full h-screen bg-black relative ">
      <div className='navbar w-full absolute top-0 left-0 z-[50] py-10 px-10'>
        <div className='logo flex gap-7'>
          <div className='lines flex flex-col gap-[5px]'>
            <div className='line w-11 h-1 bg-white'></div>
            <div className='line w-8 h-1 bg-white'></div>
            <div className='line w-5 h-1 bg-white'></div>
          </div>
          <h3 className='text-4xl text-white -mt-[11px] '>Rockstar</h3>
        </div>
      </div>


      <div className='imagesdiv relative w-full h-screen overflow-hidden'>
      <img className='sky absolute top-0 left-0 w-full h-full object-cover z-0 scale-[1.8] rotate-[-20deg]' src='./sky.png'></img>
        <img className='bg absolute top-0 left-0 w-full h-full object-cover z-10 pointer-events-none scale-[1.9] rotate-[-3deg]' src='./bg.png'></img>
            <div className='text text-white flex flex-col gap-3 absolute top-10 left-1/2 -translate-x-1/2 z-20'>
              <h1 className='text-[8rem] leading-none -ml-40'>Grand</h1>
              <h1 className='text-[8rem] leading-none ml-10'>Theft</h1>
              <h1 className='text-[8rem] leading-none -ml-40' >Auto</h1>
            </div>
        <img className='character absolute bottom-[-250%] left-1/2 -translate-x-1/2 scale-[2] rotate-[-40deg]  z-20' src='./girlbg.png'></img>
        

      </div>


      <div className='btmbar text-white absolute bottom-[0] left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent z-[30] '>
      <div className='flex gap-4 items-center px-3'>
<i className=" text-3xl ri-arrow-down-line"></i>
<h3 className=' text-[18px] font-[Helvetica_Now_Display]'>Scroll Down</h3>
      </div>

      <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px]' src='./ps5.png'></img>
      </div>

      
    </div>

    <div className='h-screen w-full bg-black flex'>
      <div className='cntr w-full h-[80%] flex text-white mt-10'>
         <div className='left relative h-full w-1/2 '>
         <img className='absolute scale-[0.75] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src='./imag.png'></img>
         </div>
         <div className='right py-10 w-[35%]'>
         <h1 className='text-5xl'>Still Running</h1>
         <h1 className='text-5xl'>Not Hunting</h1>
         <p className='mt-10 text-[14px] font-[Helvetica_Now_Display]'>Step into the vibrant, sprawling world of Grand Theft Auto VI – where every corner of the city pulses with life, danger, and opportunity. </p>

         <p className='mt-5 text-[14px] font-[Helvetica_Now_Display]'>GTA 6 pushes the boundaries of open-world gameplay with next-gen realism, dynamic storytelling, and seamless transitions between missions, environments, and characters.</p>
         <p className='mt-5 text-[14px] font-[Helvetica_Now_Display]'>More than just a game – GTA 6 is a cultural phenomenon in the making. Built from the ground up for next-gen platformshyper-realistic physics, and an immersive soundtrack that fuels your rise to the top.</p>
  
         <button className=' mt-5 text-xl bg-yellow-500 text-black h-10 w-40'>Download Now</button>
         </div>
      </div>
      

    </div>
    </div>
    )}
    </>
  )
}

export default App