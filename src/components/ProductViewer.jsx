import React from 'react';
import useMustangStore from "../store";
import clsx from 'clsx';
import { Canvas } from "@react-three/fiber";
import StudioLights from './three/StudioLights.jsx';
import ModelSwitcher from './three/ModelSwitcher.jsx';

const ProductViewer = () => {
  const { car, setCar } = useMustangStore();

  return (
    <section id="product-viewer" className="text-white flex flex-col items-center">
      <h2>Take a closer look</h2>

      <div className="controls">
        <p className="info text-center">MUSTANG BOSS | use mouse to interact with the model</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control flex items-center gap-4">
            <div
              onClick={() => setCar('302')}
              className={clsx(
                'bg-yellow-400 w-6 h-6 rounded-full cursor-pointer',
                car === '302' && 'ring-4 ring-yellow-300'
              )}
            />
            <p>Mustang Boss 302</p>

            <div
              onClick={() => setCar('429')}
              className={clsx(
                'bg-green-700 w-6 h-6 rounded-full cursor-pointer',
                car === '429' && 'ring-4 ring-green-300'
              )}
            />
            <p>Mustang Boss 429</p>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        className="w-[200px] h-[200px] bg-black rounded-lg mt-8"
        camera={{ position: [1, 1, 1], fov: 50 }}
      >
        <StudioLights />
        <ModelSwitcher car={car} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
