import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import { features } from "../constants/index.jsx";
import clsx from "clsx";
import { Suspense, useRef } from "react";
import { Html } from "@react-three/drei";
import MustangModel from "./models/Mustang_both.jsx";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ModelScroll = () => {
  const groupRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    timeline
      .to(".box1", { opacity: 1, y: 0, delay: 1 })
      .to(".box2", { opacity: 1, y: 0 })
      .to(".box3", { opacity: 1, y: 0 })
      .to(".box4", { opacity: 1, y: 0 })
      .to(".box5", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense fallback={<Html><h1 className="text-white text-3xl uppercase">Loading...</h1></Html>}>
        <MustangModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Features = () => {
  return (
    <section id="features">
      <h2 className="text-white text-4xl lg:text-6xl font-bold text-center mb-10">
        Experience the Thrill.
      </h2>

      <Canvas id="f-canvas" camera={{ position: [0, 0, 5], fov: 45 }}>
        <StudioLights />
        <ambientLight intensity={0.06} />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={clsx(
              "box",
              `box${index + 1}`,
              feature.styles,
              "flex items-start gap-4 max-w-xs"
            )}
          >
            <img
              src={feature.icon}
              alt={feature.highlight}
              className={`${feature.size} object-contain shrink-0 drop-shadow-[0_2px_6px_rgba(255,255,255,0.25)]`}
            />
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">
                {feature.highlight}
              </h3>
              <p className="text-gray-300 text-sm leading-snug">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
