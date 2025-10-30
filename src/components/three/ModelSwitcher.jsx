import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Mustangboss302 from "../models/Mustang_boss_302.jsx";
import Mustangboss429 from "../models/Mustang_boss_429.jsx";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 2.5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const ModelSwitcher = ({ car }) => {
  const boss302Ref = useRef();
  const boss429Ref = useRef();

  useEffect(() => {
    if (boss302Ref.current && boss429Ref.current) {
      boss302Ref.current.position.x = 0;
      boss429Ref.current.position.x = OFFSET_DISTANCE;
      fadeMeshes(boss302Ref.current, 1);
      fadeMeshes(boss429Ref.current, 0);
    }
  }, []);

  useGSAP(() => {
    if (!boss302Ref.current || !boss429Ref.current) return;

    if (car === "429") {
      moveGroup(boss302Ref.current, -OFFSET_DISTANCE);
      fadeMeshes(boss302Ref.current, 0);

      moveGroup(boss429Ref.current, 0);
      fadeMeshes(boss429Ref.current, 1);
    } else {
      // reverse
      moveGroup(boss302Ref.current, 0);
      fadeMeshes(boss302Ref.current, 1);

      moveGroup(boss429Ref.current, OFFSET_DISTANCE);
      fadeMeshes(boss429Ref.current, 0);
    }
  }, [car]);

  return (
    <>
      <group ref={boss302Ref} position={[0, 0, 0]}>
        <Mustangboss302 scale={0.2} />
      </group>

      <group ref={boss429Ref} position={[OFFSET_DISTANCE, 0, 0]}>
        <Mustangboss429 scale={0.2} />
      </group>

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
};

export default ModelSwitcher;
