import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";
import texx from "./texx.png";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Cyl() {
  const texture = useTexture(texx);
  const cyl = useRef(null);
  const dragState = useRef({
    active: false,
    lastX: 0,
    lastY: 0,
  });
  const rotationRef = useRef(0);

  const handlePointerDown = (event) => {
    event.stopPropagation();
    dragState.current.active = true;
    dragState.current.lastX = event.clientX;
    dragState.current.lastY = event.clientY;
    event.target.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragState.current.active || !cyl.current) return;

    const dx = event.clientX - dragState.current.lastX;
    const dy = event.clientY - dragState.current.lastY;
    dragState.current.lastX = event.clientX;
    dragState.current.lastY = event.clientY;

    const dragAmount = (dx + dy) * 0.008;
    rotationRef.current += dragAmount;
  };

  const handlePointerUp = (event) => {
    dragState.current.active = false;
    event.target.releasePointerCapture?.(event.pointerId);
  };

  useFrame((_, delta) => {
    if (!cyl.current) return;

    if (!dragState.current.active) {
      rotationRef.current += delta * 0.8;
    }

    cyl.current.rotation.y = rotationRef.current;
  });

  return (
    <group rotation={[0, 1.5, 0.5]}>
      <mesh
        ref={cyl}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <cylinderGeometry args={[2, 2, 2.5, 70, 70, true]} />
        <meshStandardMaterial map={texture} transparent side={DoubleSide} />
      </mesh>
    </group>
  );
}
