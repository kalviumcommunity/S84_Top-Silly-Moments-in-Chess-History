import FullChessModel from "./FullChessModel";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";


export default function InteractiveChessboard() {
  return (
    <div style={{ height: "1000px", padding: "0", marginTop: "-290px" }}>
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <Stage adjustCamera={false}>
            <FullChessModel scale={0.4} position={[0, 0, 0]} />
          </Stage>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
