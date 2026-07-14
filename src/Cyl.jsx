import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";
import texx from "./texx.png";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cyl() {
  let texture = useTexture(texx);
let cyl =  useRef(null);
useFrame((state, delta) => {
  cyl.current.rotation.y += delta;
});
  return (
    <group  rotation={[0, 1.4, 0.5]} >
      <mesh ref={cyl}>
        <cylinderGeometry args={[2, 2, 2.6, 32, 32, true]} />
        <meshStandardMaterial map={texture} transparent side={DoubleSide} />
      </mesh>
    </group>
  );
}
