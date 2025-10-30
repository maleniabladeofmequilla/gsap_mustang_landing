import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef();
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);
  return (
    <section id="hero"
      className="relative w-full h-screen flex-col items-center justify-start text-center text-white"
    >
       <video src="/videos/hero0.mp4" autoPlay muted loop
        className="absolute -top-5 col-center w-1/2 object-cover z-10"
      />
        <div className="relative top-20 z-10 flex flex-col items-center">
        <h1 className="text-6xl font-bold drop-shadow-lg mb-30">MUSTANG BOSS</h1>
        </div>
      <video src="/videos/hero.mp4" className="relative -top-10 mb-10 mix-blend-screen" autoPlay muted loop  />
      <button>Buy</button>
      <p>$65,000 to $85,000</p>
    </section>
  );
};

export default Hero;
