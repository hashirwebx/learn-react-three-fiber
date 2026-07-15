import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./style.css";
import Cyl from "./Cyl";
import { Bloom, ToneMapping, EffectComposer } from "@react-three/postprocessing";

import FooterOverlay from './FooterOverlay';

const App = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHint(false), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="app-shell">
      <div className="scene-header">
        <p className="eyebrow">Featured work</p>
        <h1>Project Carousel</h1>
        <p className="scene-subtitle">
          Explore the latest concepts in a cinematic, interactive view.
        </p>
      </div>

      <div className={`interaction-hint ${showHint ? "" : "is-hidden"}`}>
        <span>Drag to rotate</span>
        <span>•</span>
        <span>Scroll to zoom</span>
      </div>

      <div
        className="canvas-shell"
        onWheel={(event) => event.stopPropagation()}
      >
        <Canvas className="scene-canvas" camera={{ fov: 30 }}>
          <ambientLight intensity={2} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <OrbitControls
            enableRotate={false}
            enablePan={false}
            enableZoom={true}
            minDistance={2}
            maxDistance={10}
          />
          <Cyl />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={3}
              luminanceThreshold={0.36}
              luminanceSmoothing={0}
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>
      </div>
      <FooterOverlay />
    </div>
  );
};
export default App;
