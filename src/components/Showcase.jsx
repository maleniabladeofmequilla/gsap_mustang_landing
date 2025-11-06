import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || isTablet) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top+=100",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(section.querySelector(".mask img"), {
        scale: 1.5,
        ease: "power1.inOut",
      }).to(
        section.querySelector(".content"),
        { opacity: 1, y: 0, ease: "power1.out" },
        "<50%"
      );

      return () => {
        tl.kill();
        ScrollTrigger.refresh();
      };
    },
    { dependencies: [isTablet], scope: sectionRef }
  );

  return (
    <section id="showcase" ref={sectionRef} className="relative bg-black">
      <div className="media relative overflow-hidden">
        <video
          src="/videos/showcase.mp4"
          loop
          muted
          autoPlay
          playsInline
          preload="metadata"
          className="w-full object-cover object-center bg-black"
        />
        <div className="mask absolute top-0 left-0 w-full h-full">
          <img
            src="/mask-image.png"
            alt="mask"
            className="h-full w-full object-cover scale-100 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="content relative z-10 my-5 bg-black/70 text-white opacity-0 translate-y-10 transition-all duration-700">
        <div className="wrapper container mx-auto px-5 pb-20 flex flex-col lg:flex-row justify-center gap-20">
          <div className="lg:max-w-md">
            <h2 className="text-4xl lg:text-6xl font-bold">
              Experience the Thrill of Driving
            </h2>
            <div className="space-y-6 mt-7 pe-10">
              <p>
                Boss Mustang was heavily modified for racing. Though not formally
                known as the
                <span className="text-blue-400"> "Boss 429 engine" </span>
                by Ford, it earned that name from its introduction in the 1969
                Boss 429 Mustang.
              </p>
            </div>
            <p className="text-red-400 font-semibold mt-4">
              Learn more about the Beast...
            </p>
          </div>

          <div className="max-w-2xs space-y-6">
            <h3 className="text-3xl font-bold">BOSS Technical Information</h3>
            <p>Manufacturer: <span className="text-white">Ford</span></p>
            <p>Production: <span className="text-white">1969-1970</span></p>
            <p>Assembly: <span className="text-white">Dearborn, Michigan</span></p>
            <p>Class: <span className="text-white">Muscle car</span></p>
            <p>Body style: <span className="text-white">2-door coupe</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
