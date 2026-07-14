import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./style.css";
import Cyl from "./Cyl";
import { Bloom, ToneMapping, EffectComposer } from "@react-three/postprocessing";
import InfiniteScroller from './InfiniteScroller';
import FooterOverlay from './FooterOverlay';

const App = () => {
  return (
    <>
      <Canvas camera={{ fov: 20 }}>
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <OrbitControls />
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
      <InfiniteScroller />
      <FooterOverlay />
    </>
  );
};
export default App;
