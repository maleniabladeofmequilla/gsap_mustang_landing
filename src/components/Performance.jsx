import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants/index.jsx";
import { useMediaQuery } from "react-responsive";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    // Fade-in text animation
    gsap.fromTo(
      ".content p",
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".content p",
          start: "top bottom",
          end: "top center",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    if (isMobile) return;

    const tl = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
      scrollTrigger: {
        trigger: sectionEl,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    performanceImgPositions.forEach((item) => {
      if (item.id === "p5") return; // skip main centered image

      const selector = `.${item.id}`;
      const vars = {};

      if (item.left !== undefined) vars.left = `${item.left}%`;
      if (item.right !== undefined) vars.right = `${item.right}%`;
      if (item.bottom !== undefined) vars.bottom = `${item.bottom}%`;
      if (item.transform) vars.transform = item.transform;

      tl.to(selector, vars, 0);
    });
  }, [isMobile]);

  return (
    <section id="performance" ref={sectionRef}>
      <h2 className="text-white font-semibold text-3xl lg:text-6xl text-center">
        Next-level performance. Born to race.
      </h2>

      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={`${item.id} rounded-2xl shadow-md`}
            alt={item.alt || `Performance Image #${index + 1}`}
            loading="lazy"
          />
        ))}
      </div>

      <div className="content">
        <p className="lg:h3-semibold base-semibold lg:text-justify text-center px-5 mt-10">
          The Ford Mustang Boss series stands as a symbol of raw power and racing precision.
          <span className="text-white">
            {" "}Built for dominance on the track and revered on the streets,
          </span>{" "}
          these machines pushed the boundaries of performance with high-compression V8 engines,
          aerodynamic design, and engineering born from racing heritage.
        </p>
      </div>
    </section>
  );
};

export default Performance;
